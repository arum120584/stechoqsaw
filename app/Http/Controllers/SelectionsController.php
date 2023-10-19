<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Selection;
use Inertia\Inertia;

class SelectionsController extends Controller
{
    public function detail($id)
    {
        $selection = Selection::with('participants', 'job', 'selectionCriterias')->find($id);
        // return response($selection);
        return Inertia::render('Selections/DetailSelection', [
            'selection' => $selection
        ]);

    }
}
