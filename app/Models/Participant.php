<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Participant extends Model
{
    use HasFactory;
    protected $table = 'participant';

    public function selection()
    {
        return $this->belongsTo(Selection::class);
    }

    public function participantCriteria()
    {
        return $this->hasMany(ParticipantCriteria::class);
    }
}
