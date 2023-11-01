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
    Route::post('/job/add', [JobsController::class, 'createJob'])->name('jobs.createjob');

    Route::get('/selection/detail/{id}', [SelectionsController::class, 'detail'])->name('selections.detail');

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
    Route::post('/participant/add', [ParticipantsController::class, 'addParticipant'])->name('participant.add');
    Route::post('/participant/add/criteria', [ParticipantsController::class, 'addParticipantCriteria'])->name('participant.addcriteria');
    Route::put('/participant/update/criteria', [ParticipantsController::class, 'updateParticipantCriteria'])->name('participant.updatecriteria');
    Route::post('/participant/import', [ImportExportsController::class, 'importParticipants'])->name('importexport.importparticipants');
    Route::get('/participant/export', [ImportExportsController::class, 'exportParticipants'])->name('importexport.exportparticipants');

    Route::get('/startsaw/{selectionid}', [SawsController::class, 'startSaw'])->name('saw.startsaw');
});

require __DIR__.'/auth.php';
