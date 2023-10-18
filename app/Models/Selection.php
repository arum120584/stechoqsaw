<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Selection extends Model
{
    use HasFactory;
    protected $table = 'selections';

    public function participants()
    {
        return $this->hasMany(Participant::class);
    }

    public function job()
    {
        return $this->belongsTo(Job::class);
    }

    public function selectionCriterias()
    {
        return $this->hasMany(SelectionCriteria::class);
    }
}
