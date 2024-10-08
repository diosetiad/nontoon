<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Movies\Store;
use App\Http\Requests\Admin\Movies\Update;
use App\Models\Movie;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

class MovieController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $movies = Movie::withTrashed()->orderBy('deleted_at')->get();

        return Inertia::render('Admin/Movies/Index', [
            'movies' => $movies
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Admin/Movies/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Store $request)
    {
        $data = $request->validated();

        $data['thumbnail'] = Storage::disk('public')->put('movies', $request->file('thumbnail'));

        $data['slug'] = Str::slug($data['name']);

        $movie = Movie::create($data);

        return redirect(route('movies.index'))->with([
            'message' => 'Movie was created successfully!',
            'type' => 'success'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function show(Movie $movie)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function edit(Movie $movie)
    {
        return Inertia::render('Admin/Movies/Edit', [
            'movie' => $movie
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function update(Update $request, Movie $movie)
    {
        $data = $request->validated();

        if ($request->file('thumbnail')) {
            $data['thumbnail'] = Storage::disk('public')->put('movies', $request->file('thumbnail'));

            Storage::disk('public')->delete($movie->thumbnail);
        } else {
            $data['thumbnail'] = $movie->thumbnail;
        }

        if ($request->input('name') !== $movie->name) {
            $data['slug'] = Str::slug($request->input('name'));
        } else {
            $data['slug'] = $movie->slug;
        }

        $movie->update($data);

        return redirect(route('movies.index'))->with([
            'message' => 'Movie was updated successfully!',
            'type' => 'success'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function destroy(Movie $movie)
    {
        $movie->delete();

        return redirect(route('movies.index'))->with([
            'message' => 'Movie was deleted successfully!',
            'type' => 'success'
        ]);
    }

    public function restore($movie)
    {
        Movie::withTrashed()->find($movie)->restore();
        return redirect(route('movies.index'))->with([
            'message' => 'Movie was restored successfully!',
            'type' => 'success'
        ]);
    }
}
