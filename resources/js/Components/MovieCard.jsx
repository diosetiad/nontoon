export default function MovieCard({
    isFeatured,
    slug,
    name,
    genre,
    thumbnail,
    rating = 0,
}) {
    return (
        <>
            {isFeatured && (
                <div className="group relative mr-[30px] w-full shrink-0 text-white md:w-auto">
                    <img
                        src={thumbnail}
                        alt="Movie thumbnail"
                        className="h-[340px] w-[520px] rounded-[30px] object-cover"
                    />

                    <div className="absolute left-[30px] top-[30px] flex items-center gap-1">
                        <img src="/icons/ic_star.svg" alt="Star icon" />
                        <span className="mt-1 text-sm font-medium">
                            {rating.toFixed(1)}/10
                        </span>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 h-[130px] rounded-bl-[30px] rounded-br-[30px] bg-gradient-to-t from-black">
                        <div className="absolute bottom-[30px] flex w-full items-center justify-between px-[30px]">
                            <div>
                                <h2 className="text-[22px] font-medium">
                                    {name}
                                </h2>
                                <span className="text-sm font-light">
                                    {genre}
                                </span>
                            </div>

                            <button
                                type="button"
                                className="block translate-x-[100px] transition duration-500 ease-in-out group-hover:translate-x-0 max-[360px]:hidden"
                            >
                                <img src="/icons/ic_play.svg" alt="Play icon" />
                            </button>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-[500px] transition duration-500 ease-in-out group-hover:-translate-y-1/2 max-[360px]:block"
                    >
                        <img src="/icons/ic_play.svg" alt="Play icon" />
                    </button>

                    <a
                        href={route("watch", slug)}
                        className="absolute inset-0"
                    />
                </div>
            )}

            {!isFeatured && (
                <div className="group relative mr-[30px] w-auto shrink-0 text-white">
                    <img
                        src={thumbnail}
                        alt="Movie thumbnail"
                        className="h-[340px] w-[250px] rounded-[30px] object-cover"
                    />

                    <div className="absolute bottom-0 left-0 right-0 h-[130px] rounded-bl-[30px] rounded-br-[30px] bg-gradient-to-t from-black">
                        <div className="absolute bottom-[30px] w-full px-[30px]">
                            <h2 className="text-[22px] font-medium">{name}</h2>
                            <span className="text-sm font-light">{genre}</span>
                        </div>
                    </div>

                    <button
                        type="button"
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[500px] transition duration-500 ease-in-out group-hover:-translate-y-1/2"
                    >
                        <img src="/icons/ic_play.svg" alt="Play icon" />
                    </button>

                    <a
                        href={route("watch", slug)}
                        className="absolute inset-0"
                    />
                </div>
            )}
        </>
    );
}
