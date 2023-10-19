<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Participant extends Model
{
    use HasFactory;
    protected $fillable = ['second_id', 'nim', 'applied', 'name', 'position', 'university', 'major', 'status', 'ipk', 'semester', 'entry_year', 'university_type', 'email', 'phone', 'link_whatsapp', 'registration_eligibility_status', 'survey_kebhinekaan_status', 'letter_of_recommendadtion', 'spjtm', 'cv', 'transcripts', 'certificate_organization_one', 'certificate_organization_two', 'certificate_organization_three', 'certificate_organization_four', 'certificate_organization_five', 'score', 'selection_id', 'created_at', 'updated_at'];
    protected $table = 'participants';

    public function selection()
    {
        return $this->belongsTo(Selection::class);
    }

    public function participantCriteria()
    {
        return $this->hasMany(ParticipantCriteria::class);
    }
}
