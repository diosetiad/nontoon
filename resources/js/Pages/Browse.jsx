import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Flickity from "react-flickity-component";
import { Head } from "@inertiajs/react";
import MovieCard from "@/Components/MovieCard";

export default function Browse() {
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
        <AuthenticatedLayout>
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

                    <Flickity options={flickityOptions}>
                        {[1, 2, 3, 4].map((i) => (
                            <MovieCard
                                isFeatured
                                key={i}
                                thumbnail="/images/featured-1.png"
                                rating={7.5}
                                name={`The Batman in Love ${i}`}
                                genre="Action"
                                slug="the-batman-in-love"
                            />
                        ))}
                    </Flickity>
                </section>

                <section className="flex flex-col gap-4">
                    <h1 className="text-[22px] font-semibold">Browse</h1>

                    <Flickity options={flickityOptions}>
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <MovieCard
                                key={i}
                                thumbnail="/images/browse-1.png"
                                name={`Golden Cat ${i}`}
                                genre="Cartoon"
                                slug="golden-cat"
                            />
                        ))}
                    </Flickity>
                </section>
            </div>
        </AuthenticatedLayout>
    );
}
