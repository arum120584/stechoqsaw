<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

use App\Exports\ExportUsers;
use App\Imports\ImportUsers;
use App\Imports\ImportParticipants;
use App\Exports\ExportParticipants;
use App\Exports\ExportSelections;
use Illuminate\Support\Facades\Route;

use App\Models\Participant;

class ImportExportsController extends Controller
{

    public function importParticipants(Request $request)
    {
        Excel::import(new ImportParticipants, request()->file('file'));
        Participant::whereNull('selection_id')->update(['selection_id' => $request->selection_id]);  
        return back();
    }

    public function exportParticipants()
    {
        return Excel::download(new ExportParticipants, 'hasil_seleksi.xlsx');
    }

    public function exportSelectionParticipants()
    {
        return Excel::download(new ExportSelections, 'hasil_seleksi.xlsx');
        // return Excel::download(new ExportParticipants, 'hasil_seleksi.xlsx');
    }
}
