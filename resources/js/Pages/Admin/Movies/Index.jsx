import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Index({ auth }) {
    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="List of Movies" />

            <h1>Movies</h1>
        </AuthenticatedLayout>
    );
}
