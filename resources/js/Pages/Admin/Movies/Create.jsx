import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import Checkbox from "@/Components/Checkbox";
import Button from "@/Components/Button";

export default function Create({ auth }) {
    const { setData, post, processing, errors } = useForm({
        name: "",
        genre: "",
        video_url: "",
        thumbnail: "",
        rating: "",
        is_featured: false,
    });

    const handleOnChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "file"
                ? event.target.files[0]
                : event.target.value,
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("movies.store"));
    };

    return (
        <AuthenticatedLayout auth={auth}>
            <Head title={`${auth.user.name} - Create Movie`} />

            <section className="flex flex-col gap-4">
                <h1 className="text-[22px] font-semibold">
                    Create a Movie <hr className="mb-4" />
                </h1>

                <form onSubmit={submit} className="flex flex-col gap-6">
                    <div className="space-y-2">
                        <InputLabel htmlFor="name" value="Name" />

                        <TextInput
                            id="name"
                            type="text"
                            variant="primary-outline"
                            name="name"
                            autoComplete="off"
                            isFocused={true}
                            placeholder="Movie name"
                            onChange={handleOnChange}
                            required
                            isError={errors.name}
                        />

                        <InputError message={errors.name} />
                    </div>

                    <div className="space-y-2">
                        <InputLabel htmlFor="genre" value="Genre" />

                        <TextInput
                            id="genre"
                            type="text"
                            variant="primary-outline"
                            name="genre"
                            autoComplete="off"
                            placeholder="Movie genre"
                            onChange={handleOnChange}
                            required
                            isError={errors.genre}
                        />

                        <InputError message={errors.genre} />
                    </div>

                    <div className="space-y-2">
                        <InputLabel htmlFor="video_url" value="Video URL" />

                        <TextInput
                            id="video_url"
                            type="url"
                            variant="primary-outline"
                            name="video_url"
                            autoComplete="off"
                            placeholder="Movie URL"
                            onChange={handleOnChange}
                            required
                            isError={errors.video_url}
                        />

                        <InputError message={errors.video_url} />
                    </div>

                    <div className="space-y-2">
                        <InputLabel htmlFor="thumbnail" value="Thumbnail" />

                        <TextInput
                            className="!border-transparent file:!border-transparent focus:!border-transparent focus:!outline-none focus:!ring-transparent"
                            id="thumbnail"
                            type="file"
                            variant="primary-outline"
                            name="thumbnail"
                            autoComplete="off"
                            placeholder="Movie thumbnail"
                            onChange={handleOnChange}
                            required
                            isError={errors.thumbnail}
                        />

                        <InputError message={errors.thumbnail} />
                    </div>

                    <div className="space-y-2">
                        <InputLabel htmlFor="rating" value="Rating" />

                        <TextInput
                            id="rating"
                            type="number"
                            variant="primary-outline"
                            name="rating"
                            autoComplete="off"
                            placeholder="Movie rating"
                            step={0.1}
                            min={0}
                            max={10}
                            onChange={handleOnChange}
                            required
                            isError={errors.rating}
                        />

                        <InputError message={errors.rating} />
                    </div>

                    <div className="flex items-center gap-6">
                        <InputLabel
                            className="mb-0"
                            htmlFor="is_featured"
                            value="Is Featured"
                        />

                        <Checkbox
                            id="is_featured"
                            name="is_featured"
                            onChange={(e) =>
                                setData("is_featured", e.target.checked)
                            }
                        />
                    </div>

                    <Button
                        className="!ml-auto !w-28"
                        type="submit"
                        variant="primary"
                        processing={processing}
                    >
                        Create
                    </Button>
                </form>
            </section>
        </AuthenticatedLayout>
    );
}
