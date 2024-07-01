<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\HasilKeputusanSaw;

class HasilKeputusanSawController extends Controller
{
    public function HasilKeputusanSaw()
    {
        $hasilkeputusansaw = HasilKeputusanSaw::all();
        return inertia:: render('HasilKeputusan/HasilKeputusanSaw', [
        'hasilkeputusansaw' => $hasilkeputusansaw
        ]);
    }
}
