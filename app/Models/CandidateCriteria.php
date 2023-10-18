<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CandidateCriteria extends Model
{
    use HasFactory;
    protected $table = "candidate_criterias";

    public function candidate()
    {
        return $this->belongsTo(Candidate::class);
    }

    public function job_criteria()
    {
        return $this->belongsTo(JobCriteria::class);
    }
}
