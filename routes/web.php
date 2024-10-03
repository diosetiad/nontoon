<?php

use App\Http\Controllers\ProfileController;
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

Route::redirect('/', '/login');

Route::get('browse', function () {
    return Inertia::render('Browse');
})->name('browse');

Route::get('subscribe', function () {
    return Inertia::render('Subscribe');
})->name('subscribe');

Route::get('/watch/{slug}', function () {
    return Inertia::render('Watch');
})->name('watch');

require __DIR__ . '/auth.php';
