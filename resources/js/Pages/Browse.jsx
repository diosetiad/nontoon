import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Flickity from "react-flickity-component";
import { Head } from "@inertiajs/react";
import MovieCard from "@/Components/MovieCard";

export default function Browse({ auth, featuredMovies, movies }) {
    const flickityOptions = {
        cellAlign: "left",
        contain: true,
        groupCells: 1,
        wrapAround: false,
        pageDots: false,
        prevNextButtons: false,
        draggable: ">1",
    };

    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Browse">
                <link
                    rel="stylesheet"
                    href="https://unpkg.com/flickity@2/dist/flickity.min.css"
                />
            </Head>

            <div className="flex flex-col gap-[50px] overflow-x-hidden">
                <section className="flex flex-col gap-4">
                    <h1 className="text-[22px] font-semibold">
                        Featured Movies
                    </h1>

                    {featuredMovies.length > 0 ? (
                        <Flickity options={flickityOptions}>
                            {featuredMovies.map((featuredMovie) => (
                                <MovieCard
                                    isFeatured
                                    key={featuredMovie.id}
                                    thumbnail={featuredMovie.thumbnail}
                                    rating={featuredMovie.rating}
                                    name={featuredMovie.name}
                                    genre={featuredMovie.genre}
                                    slug={featuredMovie.slug}
                                />
                            ))}
                        </Flickity>
                    ) : (
                        <p>Featured movies are not available yet.</p>
                    )}
                </section>

                <section className="flex flex-col gap-4">
                    <h1 className="text-[22px] font-semibold">Browse</h1>

                    {movies.length > 0 ? (
                        <Flickity options={flickityOptions}>
                            {movies.map((movie) => (
                                <MovieCard
                                    key={movie.id}
                                    thumbnail={movie.thumbnail}
                                    name={movie.name}
                                    genre={movie.genre}
                                    slug={movie.slug}
                                />
                            ))}
                        </Flickity>
                    ) : (
                        <p>Movies are not available yet.</p>
                    )}
                </section>
            </div>
        </AuthenticatedLayout>
    );
}
