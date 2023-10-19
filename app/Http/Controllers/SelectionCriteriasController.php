<?php

namespace App\Http\Controllers;
use App\Models\SelectionCriteria;
use Illuminate\Http\Request;

class SelectionCriteriasController extends Controller
{
    public function normalization(Request $request, $id)
    {
        $data = $request->validate([
            'weight_normalization' => 'required',
        ]);

        $selectioncriteria = SelectionCriteria::find($id);
        
        $selectioncriteria->weight_normalization = $data['weight_normalization'];

        $selectioncriteria->save();

    }
}
