<?php

use App\Http\Controllers\Admin\MovieController as AdminMovieController;
use App\Http\Controllers\Admin\SubscriptionPlanController as AdminSubscriptionPlanController;
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

Route::post('midtrans/notification', [SubscriptionPlanController::class, 'midtransCallback']);

Route::redirect('/', '/login');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('browse', [BrowseController::class, 'index'])->name('browse');

    Route::get('watch/{movie:slug}', [MovieController::class, 'show'])->middleware('checkUserSubscription:true')->name('watch');

    Route::get('subscribe', [SubscriptionPlanController::class, 'index'])->middleware('checkUserSubscription:false')->name('subscribe');
});

Route::post('subscribe/{subscription_plan}', [SubscriptionPlanController::class, 'store'])->middleware(['auth', 'role:user', 'checkUserSubscription:false'])->name('subscribe.store');

Route::middleware(['auth', 'role:admin'])->prefix('admin')->group(function () {
    Route::resource('movies', AdminMovieController::class);

    Route::put('movies/{movie}/restore', [AdminMovieController::class, 'restore'])->name('movies.restore');

    Route::resource('subscription-plans', AdminSubscriptionPlanController::class);

    Route::put('subscription-plans/{subscription_plan}/restore', [AdminSubscriptionPlanController::class, 'restore'])->name('subscription-plans.restore');
});

require __DIR__ . '/auth.php';
