<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\JobCriteria;
use App\Models\CandidateCriteria;
use App\Models\Candidate;

class CandidatesController extends Controller
{
    public function detailCandidate($id)
    {
        $candidate = Candidate::with('candidate_criterias', 'job')->find($id);
        // return response($candidate);

        return Inertia::render('DetailCandidate', [
            'candidate' => $candidate
        ]);
    }

    public function addCandidateCriteria(Request $request, $id)
    {
        $jobcriterias = JobCriteria::where("job_id", "=", 1)->get();
        return Inertia::render('AddCandidateCriteria', [
            'jobcriterias' => $jobcriterias,
            'user_id' => $id,
        ]);
    }

    public function newCandidateCriteria(Request $request)
    {
        $data = $request->validate([
            'candidate_id' => 'required',
            'job_criteria_id' => 'required',
            'weight' => 'required',
        ]);

        $candidateId = $data['candidate_id'];
        $jobCriteriaId = $data['job_criteria_id']; //INI ARRAY
        $weights = $data['weight'];
        $values = $request->value;

        //mapping data $jobCriteriaId dan ambil 'id' nya saja
        $jobCriteriaIdArray = array_map(function ($jobCriteria) {
            return $jobCriteria['id'];
        }, $jobCriteriaId);

        //looping $jobCriteriaIdArray dan masukkan value-value nya
        foreach ($jobCriteriaIdArray as $index => $jobcriteriaid) {
            
            $weight = $weights[$index];
            $value = $values[$index];
            $candidateCriteria = new CandidateCriteria();
            $candidateCriteria->candidate_id = $candidateId;
            $candidateCriteria->job_criteria_id = $jobcriteriaid;
            $candidateCriteria->weight = $weight;
            $candidateCriteria->value = $value;
            $candidateCriteria->save();
        }
    }
}
