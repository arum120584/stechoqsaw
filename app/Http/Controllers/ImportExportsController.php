<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

use App\Exports\ExportUsers;
use App\Imports\ImportUsers;
use App\Imports\ImportParticipants;

use App\Models\Participant;

class ImportExportsController extends Controller
{
    public function import(Request $request)
    {
        // return dd(request()->file('file'));
        Excel::import(new ImportUsers, request()->file('file'));
        return back();
    }

    public function export()
    {
        //return Excel::download(new ExportUsers, 'users.xlsx');
        $coba = Excel::download(new ExportUsers, 'users.xlsx');
        return response()->download($coba, 'users', [
            'Content-Type' => 'application/vnd.ms-excel',
            'Content-Disposition' => 'inline; filename="' . 'users' . '"'
        ]);
    }

    public function importParticipants(Request $request)
    {
        Excel::import(new ImportParticipants, request()->file('file'));
        Participant::whereNull('selection_id')->update(['selection_id' => 1]);  
        return back();
    }
}
