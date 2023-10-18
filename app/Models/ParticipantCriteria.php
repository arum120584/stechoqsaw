<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ParticipantCriteria extends Model
{
    use HasFactory;
    protected $table = 'participant_criterias';

    public function participant()
    {
        return $this->belongsTo(Participant::class);
    }

    public function selectionCriteria()
    {
        return $this->belongsTo(SelectionCriteria::class);
    }
}

