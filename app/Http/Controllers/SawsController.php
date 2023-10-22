<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Participant;
use App\Models\ParticipantCriteria;

class SawsController extends Controller
{
    public function startSaw(Request $request, $selectionid)
    {
        $participants = Participant::with('participantCriteria', 'participantCriteria.selectionCriteria', 'selection.selectionCriterias')->where('selection_id', '=', $selectionid)->get();
        $data = json_decode($participants);
        
        $minMaxWeights = [];

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
            foreach ($participant->participant_criteria as $participantcriteria) {
                $selectionId = $participantcriteria->selection_criteria_id;
                $type = $participantcriteria->selection_criteria->type;
                $weightNormalization = 0;

                if ($type === 'BENEFIT') {
                    $weightNormalization = $participantcriteria->weight / $minMaxWeights[$selectionId]['max_weight'];
                } elseif ($type === 'COST') {
                    $weightNormalization = $minMaxWeights[$selectionId]['min_weight'] / $participantcriteria->weight;
                }

                // Simpan nilai weight_normalization ke dalam objek participant_criteria
                $updateweightnormalization = ParticipantCriteria::find($participantcriteria->id);
                $updateweightnormalization->weight_normalization = $weightNormalization;
                $updateweightnormalization->save();
            }

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
        
            // Simpan hasil skor ke dalam kolom "score" pada model Participant
            $updatescore = Participant::find($participant->id);
            $updatescore->score = $score;
            $updatescore->save();
        }
        
    }
}
