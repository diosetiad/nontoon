<?php

use App\Http\Controllers\BrowseController;
use App\Http\Controllers\MovieController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SubscriptionPlanController;
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

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('browse', [BrowseController::class, 'index'])->name('browse');

    Route::get('watch/{movie:slug}', [MovieController::class, 'show'])->name('watch');

    Route::get('subscribe', [SubscriptionPlanController::class, 'index'])->name('subscribe');
});

Route::post('subscribe/{subscription_plan}', [SubscriptionPlanController::class, 'store'])->middleware(['auth', 'role:user'])->name('subscribe.store');

require __DIR__ . '/auth.php';
