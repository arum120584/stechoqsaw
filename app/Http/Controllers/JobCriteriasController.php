<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\JobCriteria;
use App\Models\Job;

class JobCriteriasController extends Controller
{
    public function createJobCriteria(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string',
            'type' => 'required|string',
            'weight' => 'required|integer',
        ]);

        $jobcriteria = new JobCriteria();

        $jobcriteria->name = $data['name'];
        $jobcriteria->type = $data['type'];
        $jobcriteria->weight = $data['weight'];
        $jobcriteria->description = $request->description;
        $jobcriteria->job_id = $request->job_id;

        $jobcriteria->save();

        
        $criterias = JobCriteria::where('job_id','=', $jobcriteria->job_id)->get();

        //setelah tersimpan, sum nilai weight nya
        $sumweight = JobCriteria::where('job_id','=', $jobcriteria->job_id)->sum('weight');
        
        if(count($criterias) > 2){

            // return response($jobcriteria);
            $criteria = JobCriteria::find($jobcriteria->id);
            $criteria->weight_normalization = $criteria->weight / $sumweight;

            $criteria->save();

        } else if (count($criterias) > 1 && count($criterias) < 3) {

            $firstcriteria = JobCriteria::where('job_id','=', $jobcriteria->job_id)->first();
            $latestcriteria = JobCriteria::where('job_id','=', $jobcriteria->job_id)->latest()->first();
            // return response($firstcriteria);
            $firstcriteria->weight_normalization = $firstcriteria->weight / $sumweight;
            $latestcriteria->weight_normalization = $latestcriteria->weight / $sumweight;
            $firstcriteria->save();
            $latestcriteria->save();
            

        } else if (count($criterias) === 1) {
            return to_route('jobs.getjob', $jobcriteria->job_id);
        }

        return to_route('jobs.getjob', $jobcriteria->job_id);
        

    }
}
