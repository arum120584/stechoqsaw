<?php

namespace App\Exports;

use App\Models\Participant;
use Maatwebsite\Excel\Concerns\FromCollection;

class ExportSelections implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        $selectionId = request()->selectionid;
        $participants = Participant::where('selection_id', $selectionId)->where('is_selected', 1)->orderBy('score', 'desc')->get();
        return $participants;



        // return dd(Participant::find(1)->getFillable());
        // $fillable = Participant::find(1)->getFillable();
        // $participants = Participant::all()->getItems();
        // $wrapper = array_merge($fillable, $participants);
        // dd($participants);
    }
}
