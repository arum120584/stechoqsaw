<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Selection;
use App\Models\Participant;
use Inertia\Inertia;

class SelectionsController extends Controller
{
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
}
