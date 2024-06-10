<?php

namespace App\Http\Controllers;
use App\Models\SelectionCriteria;
use App\Models\Job;
use Illuminate\Http\Request;
use App\Models\CriteriaCrisp;
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
        $selectioncriteria = SelectionCriteria::with('selection', 'selection.job.selections', 'criteriaCrisps')->find($id);
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
        // $selectioncriteria->description = $request->description;
        $selectioncriteria->selection_id = $request->selection_id;
        $selectioncriteria->save();

        foreach ($request->crisp as $key => $value) {
            $crisp = new CriteriaCrisp();
            $crisp->title = $value["title"];
            $crisp->weight = $value->weight;
            $crisp->selection_criteria_id =  $selectioncriteria->id;
            $crisp->save();
        }

        return redirect()->route('selections.detail', ['id' => $request->selection_id]);
    }

    public function updateSelectionCriteria(Request $request, $id)
    {
        $selectioncriteria = SelectionCriteria::find($id);

        $selectioncriteria->name = $request->name;
        $selectioncriteria->type = $request->type;
        $selectioncriteria->weight = $request->weight;
        // $selectioncriteria->description = $request->description;
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

    public function deleteSelectionCriteria($id)
    {
        $selectioncriteria = SelectionCriteria::find($id);
        $selectioncriteria->delete();
    }

    public function saveCrisp(Request $request)
    {
        $crisp = new CriteriaCrisp();
        $crisp->title = $request->title;
        $crisp->weight = $request->weight;
        $crisp->selection_criteria_id = $request->selection_criteria_id;
        $crisp->created_at  = now();
        $crisp->save();
    }

    public function updateCrisp(Request $request, $id)
    {
        $crisp = CriteriaCrisp::find($id);
        $crisp->title = $request->title;
        $crisp->weight = $request->weight;
        $crisp->selection_criteria_id = $request->selection_criteria_id;
        $crisp->created_at  = now();
        $crisp->save();
    }

    public function deleteCrisp($id)
    {
        $crisp = CriteriaCrisp::find($id);
       
        $crisp->delete();
    }
}