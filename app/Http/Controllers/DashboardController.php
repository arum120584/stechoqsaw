<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Participant;
use App\Models\Job;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function dashboard()
    {
        $users = User::all()->count();
        $participants = Participant::all()->count();
        $jobs = Job::all()->count();
        return Inertia::render('Dashboard', [
            'statistics' => [
                $users, $participants, $jobs
            ]
        ]);
    }
}
