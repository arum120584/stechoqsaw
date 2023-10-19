<?php

namespace App\Imports;

use App\Models\User;
use Maatwebsite\Excel\Concerns\ToModel;
use Illuminate\Support\Facades\Hash;

class ImportUsers implements ToModel
{
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */

    public function model(array $row)
    {
        if($row[0] != "ID") {
            return new User([
                //
                'name'     => $row[1],
                'email'    => $row[2],
                'password' => Hash::make($row[3]),
            ]);
        }
    }
}
