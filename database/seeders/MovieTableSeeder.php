<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Movie;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $movies = [
            [
                'name' => 'The Penguin',
                'slug' => 'the-penguin',
                'genre' => 'Crime',
                'video_url' => 'https://www.youtube.com/watch?v=sfJG6IiA_s8',
                'thumbnail' => 'https://www.ungeek.ph/wp-content/uploads/2024/08/the-penguin-hbo-series-hbo-go-jpg.webp',
                'rating' => 8.8,
                'is_featured' => 1,
            ],
            [
                'name' => 'World War Z',
                'slug' => 'world-war-z',
                'genre' => 'Disaster',
                'video_url' => 'https://www.youtube.com/watch?v=4EC7P5WdUko',
                'thumbnail' => 'https://rukminim2.flixcart.com/image/850/1000/jn3hocw0/poster/4/z/x/medium-athah-220-gsm-paper-wall-poster-13-19-inches-world-war-z-original-imaf9usz3gc6mh5r.jpeg?q=90&crop=false',
                'rating' => 7.0,
                'is_featured' => 0,
            ],

        ];

        Movie::insert($movies);
    }
}
