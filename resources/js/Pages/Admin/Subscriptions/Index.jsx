import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Index({ auth }) {
    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="List of Subscriptions" />

            <h1>Subscriptions</h1>
        </AuthenticatedLayout>
    );
}
