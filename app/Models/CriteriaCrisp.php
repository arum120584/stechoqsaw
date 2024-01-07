<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CriteriaCrisp extends Model
{
    use HasFactory;

    public function selectionCriteria()
    {
        return $this->belongsTo(SelectionCriteria::class);
    }
}
