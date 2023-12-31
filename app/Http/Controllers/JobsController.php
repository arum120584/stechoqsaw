<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Job;
use Inertia\Inertia;
use Storage;

class JobsController extends Controller
{
    public function getJobs()
    {
        $jobs = Job::all();
        return Inertia::render('Jobs/Jobs', [
            'jobs' => $jobs
        ]);
    }

    public function getJob($id)
    {
        // $job = Job::with('jobCriterias', 'candidates')->find($id);
        $job = Job::with('selections', 'selections.participants')->find($id);
        return Inertia::render('Jobs/DetailJob', [
            'job' => $job
        ]);
    }

    public function formEditJob($id)
    {
        $job = Job::with('selections', 'selections.participants')->find($id);
        return Inertia::render('Jobs/EditJob', [
            'job' => $job,
        ]);
    }

    public function formAddJob()
    {
        return Inertia::render('Jobs/AddJob');
    }

    public function createJob(Request $request)
    {
        $data = $request->validate([
            'job_name' => 'required|string',
            'description' => 'required|string',
        ]);

        $job = new Job();

        $job->job_name = $data['job_name'];
        $job->description = $data['description'];
        $job->type = $request->type;

        if (!isset($request->image)) {
            Storage::delete('public/uploads/jobs/' . $job->image);
            $job->image = NULL;
        } else {

            if ($request->hasFile('image')) {

                if (isset($job->image)) {
                    Storage::delete('public/uploads/jobs/' . $job->image);
                }

                $image = $request->file('image');
                $imageName = time() . '_' . $image->getClientOriginalName();
                $image->storeAs('public/uploads/jobs', $imageName);
                $job->image = $imageName;
            }
        }

        $job->division = $request->division;
        $job->due_date = $request->due_date;
        $job->status = $request->status;

        $job->save();

        return redirect()->route('jobs.getjobs');
    }

    public function updateJob(Request $request, $id)
    {
        $job = Job::find($id);

        $job->job_name = $request->job_name;
        $job->description = $request->description;
        $job->type = $request->type;

        // if (!isset($request->image)) {
        //     Storage::delete('public/uploads/jobs/' . $job->image);
        //     $job->image = $request->image;
        // } else {

        //     if ($request->hasFile('image')) {

        //         if (isset($job->image)) {
        //             Storage::delete('public/uploads/jobs/' . $job->image);
        //         }

        //         $image = $request->file('image');
        //         $imageName = time() . '_' . $image->getClientOriginalName();
        //         $image->storeAs('public/uploads/jobs', $imageName);
        //         $job->image = $imageName;
        //     }
        // }

        if ($request->hasFile('image')) {

            if (isset($job->image)) {
                Storage::delete('public/uploads/jobs/' . $job->image);
            }

            $image = $request->file('image');
            $imageName = time() . '_' . $image->getClientOriginalName();
            $image->storeAs('public/uploads/jobs', $imageName);
            $job->image = $imageName;
        }

        $job->division = $request->division;
        $job->due_date = $request->due_date;
        $job->status = $request->status;

        $job->save();

        return redirect()->route('jobs.getjobs');
    }

    public function deleteJob($id)
    {
        $job = Job::find($id);
        $job->delete();

        return redirect()->route('jobs.getjobs');      
    }
}
