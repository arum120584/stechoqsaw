<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SelectionCriteria extends Model
{
    use HasFactory;
    protected $table = 'selection_criterias';

    public function selection()
    {
        return $this->belongsTo(Selection::class);
    }

    public function participantCriterias()
    {
        return $this->hasMany(ParticipantCriteria::class);
    }
}
