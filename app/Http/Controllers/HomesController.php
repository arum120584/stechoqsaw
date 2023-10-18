<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Job;
use Inertia\Inertia;

class HomesController extends Controller
{
    public function index()
    {
        $jobs = Job::all();
        return Inertia::render('Home', [
            'jobs' => $jobs
        ]);
    }
}
