import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <main className="min-h-screen overflow-x-hidden bg-black">
            <section className="flex min-h-screen flex-row items-center justify-around">
                <div className="laptop:block hidden h-screen w-auto">
                    <img
                        src="/images/movie-collage.png"
                        alt="Movie collage"
                        className="laptop:max-w-[450px] fixed left-10 top-0 h-screen 2xl:max-w-[640px]"
                    />
                </div>

                <div className="flex w-full flex-col gap-[70px] px-8 py-14 text-white md:w-auto">
                    <Link href="/" className="w-fit">
                        <img
                            src="/images/nontoon-white.svg"
                            alt="Nontoon logo"
                        />
                    </Link>

                    {children}
                </div>
            </section>
        </main>
    );
}
