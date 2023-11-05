<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\JobsController;
use App\Http\Controllers\SelectionsController;
use App\Http\Controllers\SelectionCriteriasController;
use App\Http\Controllers\ParticipantsController;
use App\Http\Controllers\SawsController;




use App\Http\Controllers\JobCriteriasController;
use App\Http\Controllers\CandidatesController;
use App\Http\Controllers\HomesController;
use App\Http\Controllers\ImportExportsController;

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/home', [HomesController::class, 'index'])->name('home.index');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Route::get('/jobs', [JobsController::class, 'getJobs'])->name('jobs.getjobs');

Route::middleware('auth', 'admin')->group(function () {

    Route::get('/users', [UsersController::class, 'getUsers'])->name('user.all');
    Route::get('/user/form/add', [UsersController::class, 'formAddUser'])->name('user.formadd');
    Route::post('/user/add', [UsersController::class, 'addUser'])->name('user.add');
    Route::get('/user/form/detail/{id}', [UsersController::class, 'formDetailUser'])->name('user.formdetail');
    Route::put('/user/update/{id}', [UsersController::class, 'updateUser'])->name('user.update');
    Route::delete('/user/delete/{id}', [UsersController::class, 'deleteUser'])->name('user.delete');

    Route::get('/jobs', [JobsController::class, 'getJobs'])->name('jobs.getjobs');
    Route::get('/job/detail/{id}', [JobsController::class, 'getJob'])->name('jobs.getjob');
    Route::get('/job/form/add', [JobsController::class, 'formAddJob'])->name('jobs.formaddjob');
    Route::post('/job/add', [JobsController::class, 'createJob'])->name('jobs.createjob');
    Route::get('/job/form/edit/{id}', [JobsController::class, 'formEditJob'])->name('jobs.formeditjob');
    Route::post('/job/update/{id}', [JobsController::class, 'updateJob'])->name('jobs.updatejob');
    Route::delete('/job/delete/{id}', [JobsController::class, 'deleteJob'])->name('jobs.deletejob');

    Route::get('/selections', [SelectionsController::class, 'getSelections'])->name('selections.all');
    Route::get('/selection/detail/{id}', [SelectionsController::class, 'detail'])->name('selections.detail');
    Route::get('/selection/form/add', [SelectionsController::class, 'formAddSelection'])->name('selections.formaddselection');
    Route::get('/selection/form/edit/{id}', [SelectionsController::class, 'formEditSelection'])->name('selections.formeditselection');
    Route::post('/selection/add', [SelectionsController::class, 'createSelection'])->name('selections.createselection');
    Route::delete('/selection/add', [SelectionsController::class, 'createSelection'])->name('selections.createselection');
    Route::put('/selection/update/{id}', [SelectionsController::class, 'updateSelection'])->name('selections.updateselection');
    Route::delete('/selection/delete/{id}', [SelectionsController::class, 'deleteSelection'])->name('selections.deleteselection');

    Route::get('/selectioncriterias', [SelectionCriteriasController::class, 'getSelectionCriterias'])->name('selectioncriterias.all');
    Route::get('/selectioncriteria/detail/{id}', [SelectionCriteriasController::class, 'detailSelectionCriteria'])->name('selectioncriterias.detail');
    Route::post('/selectioncriteria/form/add', [SelectionCriteriasController::class, 'formAddCriteria'])->name('selectioncriterias.formadd');
    Route::post('/selectioncriteria/add', [SelectionCriteriasController::class, 'createSelectionCriteria'])->name('selectioncriterias.add');
    Route::put('/selectioncriteria/update/{id}', [SelectionCriteriasController::class, 'updateSelectionCriteria'])->name('selectioncriterias.update');
    Route::delete('/selectioncriteria/delete/{id}', [SelectionCriteriasController::class, 'deleteSelectionCriteria'])->name('selectioncriterias.delete');
    Route::put('/selectioncriteria/normalization/{id}', [SelectionCriteriasController::class, 'normalization'])->name('selectioncriteria.normalization');





    // Route::post('/criteria/add', [JobCriteriasController::class, 'createJobCriteria'])->name('criteria.create');
    // Route::put('/criteria/normalization/{id}', [JobCriteriasController::class, 'normalizationWeight'])->name('criteria.normalization');
    // Route::get('/candidate/detail/{id}', [CandidatesController::class, 'detailCandidate'])->name('candidate.detail');
    // Route::get('/candidate/addcriteria/{id}', [CandidatesController::class, 'addCandidateCriteria'])->name('candidate.addcriteria');
    // Route::post('/candidate/newcriteria', [CandidatesController::class, 'newCandidateCriteria'])->name('candidate.newcriteria');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/participants', [ParticipantsController::class, 'getParticipants'])->name('participant.all');
    Route::get('/participant/detail/{id}', [ParticipantsController::class, 'getParticipant'])->name('participant.detail');
    Route::get('/participant/biodata/{id}', [ParticipantsController::class, 'biodataParticipant'])->name('participant.biodata');
    Route::post('/participant/add', [ParticipantsController::class, 'addParticipant'])->name('participant.add');
    Route::put('/participant/update/{id}', [ParticipantsController::class, 'updateParticipant'])->name('participant.update');
    Route::delete('/participant/delete/{id}', [ParticipantsController::class, 'deleteParticipant'])->name('participant.delete');
    
    Route::post('/participant/add/criteria', [ParticipantsController::class, 'addParticipantCriteria'])->name('participant.addcriteria');
    Route::put('/participant/updatecriteria', [ParticipantsController::class, 'updateParticipantCriteria'])->name('participant.updatecriteria');
    Route::post('/participant/import', [ImportExportsController::class, 'importParticipants'])->name('importexport.importparticipants');
    Route::get('/participant/export', [ImportExportsController::class, 'exportParticipants'])->name('importexport.exportparticipants');

    Route::get('/startsaw/{selectionid}', [SawsController::class, 'startSaw'])->name('saw.startsaw');
});

require __DIR__.'/auth.php';
