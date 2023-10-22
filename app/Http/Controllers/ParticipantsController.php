<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Participant;
use App\Models\ParticipantCriteria;
use App\Models\SelectionCriteria;
use Inertia\Inertia;

class ParticipantsController extends Controller
{
    public function getParticipant($id)
    {
        $participant = Participant::with('participantCriteria', 'participantCriteria.selectionCriteria', 'selection.selectionCriterias')->find($id);
        // $selectioncriterias = 
        return Inertia::render('Participants/DetailParticipant', [
            'participant' => $participant
        ]);
    }

    public function addParticipantCriteria(Request $request)
    {
        $data = $request->validate([
            'participant_id' => 'required',
            'selection_criteria_id' => 'required',
            'weight' => 'required',
        ]);

        $participantId = $data['participant_id'];
        $selectionCriteriaId = $data['selection_criteria_id']; //INI ARRAY
        $weights = $data['weight'];
        $values = $request->value;
        $notes = $request->note;

        //mapping data $selectionCriteriaId dan ambil 'id' nya saja
        $selectionCriteriaIdArray = array_map(function ($selectionCriteria) {
            return $selectionCriteria['id'];
        }, $selectionCriteriaId);

        //looping $selectionCriteriaIdArray dan masukkan value-value nya
        foreach ($selectionCriteriaIdArray as $index => $selectioncriteria) {
            
            $weight = $weights[$index];
            $value = $values[$index];
            $note = $notes[$index];
            $participantCriteria = new participantCriteria();
            $participantCriteria->participant_id = $participantId;
            $participantCriteria->selection_criteria_id = $selectioncriteria;
            $participantCriteria->weight = $weight;
            $participantCriteria->value = $value;
            $participantCriteria->note = $note;
            $participantCriteria->save();
        }
    }

    public function updateParticipantCriteria(Request $request)
    {
        $selectionCriteriaId = $request->selection_criteria_id;
        $participantCriteriaId = $request->participant_criteria_id;
        $values = $request->value;
        $weights = $request->weight;
        $notes = $request->note;

        // return [$weights, $values, $participantCriteriaId];

        //mapping data $selectionCriteriaId dan ambil 'id' nya saja
        $selectionCriteriaIdArray = array_map(function ($selectionCriteria) {
            return $selectionCriteria['id'];
        }, $selectionCriteriaId);

        foreach ($selectionCriteriaIdArray as $index => $selectioncriteria) {
            
            $weight = $weights[$index];
            $value = $values[$index];
            $note = $notes[$index];

            // Periksa apakah indeks tersebut ada dalam $participantCriteriaId
            if (isset($participantCriteriaId[$index])) {
                $participantcriteriaid = $participantCriteriaId[$index];
                $participantCriteria = participantCriteria::find($participantcriteriaid);

                // Melakukan operasi jika $participantCriteria ditemukan
                if ($participantCriteria) {
                    $participantCriteria->participant_id = $request->participant_id;
                    $participantCriteria->selection_criteria_id = $selectioncriteria;
                    $participantCriteria->weight = $weight;
                    $participantCriteria->value = $value;
                    $participantCriteria->note = $note;
                    $participantCriteria->save();
                }
            }
        }

    }
}
