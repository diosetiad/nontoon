import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import Button from "@/Components/Button";
import FlashMessage from "@/Components/FlashMessage";

export default function Index({ auth, flashMessage, movies }) {
    const { delete: destroy, put } = useForm();

    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="List of Movies" />

            <section className="flex flex-col gap-[50px]">
                {flashMessage?.message && (
                    <FlashMessage
                        message={flashMessage.message}
                        className="!self-center !text-center"
                    />
                )}

                <Link href={route("movies.create")} className="w-fit">
                    <Button type="button" className="!w-40">
                        Add New Movie
                    </Button>
                </Link>

                <div className="overflow-x-auto">
                    {movies.length > 0 ? (
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 text-sm uppercase">
                                <tr>
                                    <th className="px-6 py-4">Thumbnail</th>
                                    <th className="px-6 py-4">Name</th>
                                    <th className="px-6 py-4">Genre</th>
                                    <th className="px-6 py-4">Featured</th>
                                    <th className="px-6 py-4" colSpan={2}>
                                        Action
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {movies.map((movie) => (
                                    <tr
                                        key={movie.id}
                                        className="border-b bg-white hover:bg-gray-50"
                                    >
                                        <td className="px-6 py-4">
                                            <img
                                                src={`/storage/${movie.thumbnail}`}
                                                alt="Thumbnail"
                                                className="w-56 rounded-md"
                                            />
                                        </td>
                                        <td className="px-6 py-4">
                                            {movie.name}
                                        </td>
                                        <td className="px-6 py-4">
                                            {movie.genre}
                                        </td>
                                        <td className="px-6 py-4">
                                            {movie.is_featured}
                                        </td>
                                        <td className="px-6 py-4">
                                            <Link
                                                href={route(
                                                    "movies.edit",
                                                    movie.id,
                                                )}
                                            >
                                                <Button
                                                    type="button"
                                                    variant="warning"
                                                    className="!px-6"
                                                >
                                                    Edit
                                                </Button>
                                            </Link>
                                        </td>
                                        <td className="py-4 pr-6">
                                            <div
                                                onClick={() => {
                                                    movie.deleted_at
                                                        ? put(
                                                              route(
                                                                  "movies.restore",
                                                                  movie.id,
                                                              ),
                                                          )
                                                        : destroy(
                                                              route(
                                                                  "movies.destroy",
                                                                  movie.id,
                                                              ),
                                                          );
                                                }}
                                            >
                                                <Button
                                                    type="button"
                                                    variant="danger"
                                                    className="!px-6"
                                                >
                                                    {movie.deleted_at
                                                        ? "Restore"
                                                        : "Delete"}
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>Movies are not available yet.</p>
                    )}
                </div>
            </section>
        </AuthenticatedLayout>
    );
}
