<?php

namespace App\Http\Controllers;
use App\Models\SelectionCriteria;
use App\Models\Job;
use Illuminate\Http\Request;

use Inertia\Inertia;

class SelectionCriteriasController extends Controller
{
    public function getSelectionCriterias()
    {
        $selectioncriterias = SelectionCriteria::with('selection', 'selection.job')->get();
        return Inertia::render('Criterias/Criterias', [
            'criterias' => $selectioncriterias
        ]);
    }

    public function detailSelectionCriteria($id)
    {
        $selectioncriteria = SelectionCriteria::with('selection', 'selection.job.selections')->find($id);
        $jobs = Job::with('selections')->get();
        return Inertia::render('Criterias/DetailCriteria', [
            'criteria' => $selectioncriteria,
            'jobs' => $jobs
        ]);
    }

    public function formAddCriteria(Request $request)
    {
        return Inertia::render('Criterias/AddCriteria', [
            'selection_id' => $request->selection_id,
        ]);
    }

    public function createSelectionCriteria(Request $request)
    {
        $selectioncriteria = new SelectionCriteria();

        $selectioncriteria->name = $request->name;
        $selectioncriteria->type = $request->type;
        $selectioncriteria->weight = $request->weight;
        $selectioncriteria->description = $request->description;
        $selectioncriteria->selection_id = $request->selection_id;

        $selectioncriteria->save();

        return redirect()->route('selections.detail', ['id' => $request->selection_id]);
    }

    public function updateSelectionCriteria(Request $request, $id)
    {
        $selectioncriteria = SelectionCriteria::find($id);

        $selectioncriteria->name = $request->name;
        $selectioncriteria->type = $request->type;
        $selectioncriteria->weight = $request->weight;
        $selectioncriteria->description = $request->description;
        $selectioncriteria->selection_id = $request->selection_id;

        $selectioncriteria->save();

        return redirect()->route('selections.detail', ['id' => $request->selection_id]);
    }

    public function normalization(Request $request, $id)
    {
        $data = $request->validate([
            'weight_normalization' => 'required',
        ]);

        $selectioncriteria = SelectionCriteria::find($id);
        
        $selectioncriteria->weight_normalization = $data['weight_normalization'];

        $selectioncriteria->save();

    }

    public function deleteSelectionCriteria(Request $request, $id)
    {
        $selectioncriteria = SelectionCriteria::find($id);
        $selectioncriteria->delete();
    }
}
