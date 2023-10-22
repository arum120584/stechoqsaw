<?php

namespace App\Exports;

use App\Models\Participant;
use Maatwebsite\Excel\Concerns\FromCollection;

class ExportParticipants implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return Participant::all();
        // return dd(Participant::find(1)->getFillable());
        // $fillable = Participant::find(1)->getFillable();
        // $participants = Participant::all()->getItems();
        // $wrapper = array_merge($fillable, $participants);
        // dd($participants);
    }
}
