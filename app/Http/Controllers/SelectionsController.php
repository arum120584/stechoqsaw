<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Selection;
use App\Models\Job;
use App\Models\Participant;
use Inertia\Inertia;

class SelectionsController extends Controller
{
    public function getSelections()
    {
        $selections = Selection::with('participants', 'job', 'selectionCriterias')->get();
        // return $selections;
        
        return Inertia::render('Selections/Selections', [
            'selections' => $selections,
        ]);

    }

    public function detail($id)
    {
        $selection = Selection::with('participants', 'job', 'selectionCriterias')->find($id);
        
        $participants = Participant::with('participantCriteria', 'participantCriteria.selectionCriteria', 'selection.selectionCriterias')
        ->where('selection_id', '=', $selection->id)
        ->paginate(10);
        
        return Inertia::render('Selections/DetailSelection', [
            'selection' => $selection,
            'participants' => $participants
        ]);

    }

    public function formAddSelection()
    {
        $jobs = Job::all();
        return Inertia::render('Selections/AddSelection', [
            'jobs' => $jobs
        ]);
    }

    public function createSelection(Request $request)
    {
        $selection = new Selection();
        $selection->name = $request->name;
        $selection->status = $request->status;
        $selection->job_id = $request->job_id;

        $selection->save();

        return redirect()->route('selections.all');
    }

    public function formEditSelection($id)
    {
        $jobs = Job::all();
        $selection = Selection::find($id);
        return Inertia::render('Selections/EditSelection', [
            'jobs' => $jobs,
            'selection' => $selection
        ]);
    }

    public function updateSelection(Request $request, $id)
    {
        $selection = Selection::find($id);

        $selection->name = $request->name;
        $selection->status = $request->status;
        $selection->job_id = $request->job_id;

        $selection->save();

        return redirect()->route('selections.all');
    }

    public function deleteSelection($id)
    {
        $selection = Selection::find($id);
        $selection->delete();
        return redirect()->route('selections.all');
    }
}
