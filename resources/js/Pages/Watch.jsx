import ReactPlayer from "react-player";
import { Head, Link } from "@inertiajs/react";

export default function Watch({ movie }) {
    return (
        <>
            <Head title={movie.name} />

            <main className="min-h-screen bg-form-bg py-14 text-white xl:h-screen">
                <section className="flex h-screen flex-col gap-[50px] xl:h-full">
                    <div className="flex w-full items-center px-8 laptop:px-14">
                        <Link href={route("browse")}>
                            <button type="button" className="h-[50px] w-[50px]">
                                <img
                                    src="/icons/ic_arrow-left.svg"
                                    alt="Arrow left icon"
                                />
                            </button>
                        </Link>

                        <h1 className="w-full text-center text-[22px] font-medium">
                            {movie.name}
                        </h1>
                    </div>

                    <ReactPlayer
                        url={movie.video_url}
                        controls
                        width="100%"
                        height="100%"
                    />
                </section>
            </main>
        </>
    );
}
