<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Participant;
use App\Models\ParticipantCriteria;
use App\Models\SelectionCriteria;
use App\Models\Selection;
use Inertia\Inertia;

class ParticipantsController extends Controller
{
    public function getParticipant($id)
    {
        $participant = Participant::with('participantCriteria', 'participantCriteria.selectionCriteria', 'selection.selectionCriterias')->find($id);

        return Inertia::render('Participants/DetailParticipant', [
            'participant' => $participant
        ]);
    }

    public function addParticipant(Request $request)
    {
        $participants = collect($request->participants);

        $selection_id = $request->selection_id;
        $limit = $request->limit;
        $job_id = $request->job_id;
        $limitparticipants = $participants->take($limit);
        $selections = Selection::where('job_id', '=', $job_id)->get()->toArray();

        //mencari selection_id yang sekarang itu index ke berapa
        $index = array_search($selection_id, array_column($selections, 'id'));

        foreach($limitparticipants as $participant) {
            $newparticipant = new Participant();
            $newparticipant->nim = $participant['nim'];
            $newparticipant->name = $participant['name'];
            $newparticipant->university = $participant['university'];
            $newparticipant->status = $participant['status'];
            $newparticipant->semester = $participant['semester'];
            $newparticipant->email = $participant['email'];
            $newparticipant->phone = $participant['phone'];
            $newparticipant->selection_id = $selections[$index + 1]['id'];

            $newparticipant->save();
        }

        $prevselection = Selection::find($selection_id);
        $nextselection = Selection::find($selections[$index +1]['id']);

        $prevselection->status = "SELESAI";
        $prevselection->save();
        $nextselection->status = "BERLANGSUNG";
        $nextselection->save();

        return redirect()->route('selections.detail', ['id' => $selections[$index + 1]['id']]);
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
        $selectionId = $request->selection_id;

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

        return redirect()->route('selections.detail', ['id' => $selectionId]);
    }

    public function updateParticipantCriteria(Request $request)
    {
        $selectionCriteriaId = $request->selection_criteria_id;
        $participantCriteriaId = $request->participant_criteria_id;
        $values = $request->value;
        $weights = $request->weight;
        $notes = $request->note;

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
