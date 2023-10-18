<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Candidate extends Model
{
    use HasFactory;
    protected $table = "candidates";

    public function job()
    {
        return $this->belongsTo(Job::class);
    }

    public function candidate_criterias()
    {
        return $this->hasMany(CandidateCriteria::class)->with('job_criteria');
    }
}
