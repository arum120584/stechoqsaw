<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Job extends Model
{

    use HasFactory;
    protected $table = "jobs";

    public function selections()
    {
        return $this->hasMany(Selection::class);
    }

    //TIDAK DIGUNAKAN
    public function candidates()
    {
        return $this->hasMany(Candidate::class);
    }
    //TIDAK DIGUNAKAN
}
