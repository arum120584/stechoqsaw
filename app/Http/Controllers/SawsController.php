<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Participant;
use App\Models\ParticipantCriteria;
use App\Models\Selection;
use Illuminate\Support\Facades\Route;
use App\Models\SelectionCriteria;
class SawsController extends Controller
{
    
    public function startSaw($selectionid)
    {
        

        $selection = Selection::with('selectionCriterias')->find($selectionid);
        // return dd($selection);

        $totalWeight = 0;
     
    // Step 1
        // jumlah dari hasil kriteria dibagi bobot
        // hasilnya adalah mendapatkan normalisasi bobot kriteria
       foreach ($selection->selectionCriterias as $key => $criteria) {
            $totalWeight += $criteria->weight;
       }
    // Step 2
    // menentukan matriks keputusan yang dimana setiap alternatif diberika nilai menyesuaikan dari tipe benefit dan costnya
    

       foreach ($selection->selectionCriterias as $key => $criteria) {
        // untuk ngitung tolat bobotnya
        $selectioncriteria = SelectionCriteria::find($criteria->id);
        $selectioncriteria->weight_normalization = $criteria->weight/$totalWeight;
        $selectioncriteria->save();

       }
        $participants = Participant::with('participantCriteria', 
        'participantCriteria.selectionCriteria', 'selection.selectionCriterias')->where('selection_id', '=', $selectionid)->get();
        $data = json_decode($participants);
        
        $minMaxWeights = [];
    // step 3 
        // menentukan  nilai pembagi dari tiap alternatif, melihat dari setiap keterangannya benefit itu nilai alternatif  dibagi bobot maxsimum, kemudian keterangan cost itu nilai minimum dibagi jumlah alternatif
        // hasilnya mendapatkan normalisasi alternatif

        foreach ($data as $participant) {
            foreach ($participant->participant_criteria as $participantcriteria) {
                $selectionId = $participantcriteria->selection_criteria_id;
                $weight = $participantcriteria->weight;

                if (!isset($minMaxWeights[$selectionId])) {
                    $minMaxWeights[$selectionId] = [
                        'selection_criteria_id' => $selectionId,
                        'min_weight' => $weight,
                        'max_weight' => $weight,
                    ];
                } else {
                    if ($weight < $minMaxWeights[$selectionId]['min_weight']) {
                        $minMaxWeights[$selectionId]['min_weight'] = $weight;
                    }

                    if ($weight > $minMaxWeights[$selectionId]['max_weight']) {
                        $minMaxWeights[$selectionId]['max_weight'] = $weight;
                    }
                }
            }
        }
        
        // Setelah mendapatkan nilai minimum dan maksimum, ubah data weight_normalization
        foreach ($data as $participant) {
  

        //mencari nilai normalisasi matriks keputusan
            foreach ($participant->participant_criteria as $participantcriteria) {
                $selectionId = $participantcriteria->selection_criteria_id;
                $type = $participantcriteria->selection_criteria->type;
                $weightNormalization = 0;

                if ($type === 'BENEFIT') {
                    $weightNormalization = $participantcriteria->weight / $minMaxWeights[$selectionId]['max_weight'];
                } elseif ($type === 'COST') {
                    $weightNormalization = $minMaxWeights[$selectionId]['min_weight'] / $participantcriteria->weight;
                }

                // menyimpan nilai normalisasi ke database
                $updateweightnormalization = ParticipantCriteria::find($participantcriteria->id);
                $updateweightnormalization->weight_normalization = $weightNormalization;
                $updateweightnormalization->save();
            }

             // Tahap untuk mencari nilai preferensi
            $score = 0;
        
            foreach ($participant->participant_criteria as $participantcriteria) {
                $selectionId = $participantcriteria->selection_criteria_id;
                $weightNormalizationParticipant = $participantcriteria->weight_normalization;
                $weightNormalizationSelection = $participantcriteria->selection_criteria->weight_normalization;
        
                // Hitung hasil perkalian
                $result = $weightNormalizationParticipant * $weightNormalizationSelection;
                
                // Tambahkan hasil perkalian ke skor
                $score += $result;

            }
        
            // Simpan hasil preferensi ke dalam kolom "score" pada model Participant
            $updatescore = Participant::find($participant->id);
            $updatescore->score = $score;
            $updatescore->save();
            
        }
        //'kriteria','kandidat','seleksi'
        session()->put("currentTab", "seleksi");        
    }
}
