<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Movie;

class BrowseController extends Controller
{
    public function index()
    {
        $featuredMovies = Movie::whereIsFeatured(true)->get();
        $movies = Movie::all();

        return Inertia::render('Browse', [
            'featuredMovies' => $featuredMovies,
            'movies' => $movies,
        ]);
    }
}
