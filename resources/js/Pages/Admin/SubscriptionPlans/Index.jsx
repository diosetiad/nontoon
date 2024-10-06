import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import Button from "@/Components/Button";
import FlashMessage from "@/Components/FlashMessage";

export default function Index({ auth, flashMessage, subscriptionPlans }) {
    const { delete: destroy, put } = useForm();

    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="List of Subscription Plans" />

            <section className="flex flex-col gap-[50px]">
                {flashMessage?.message && (
                    <FlashMessage
                        message={flashMessage.message}
                        className="!self-center !text-center"
                    />
                )}

                <Link
                    href={route("subscription-plans.create")}
                    className="w-fit"
                >
                    <Button type="button" className="!w-40">
                        Add New Plans
                    </Button>
                </Link>

                <div className="overflow-x-auto">
                    {subscriptionPlans.length > 0 ? (
                        <table className="w-full text-left">
                            <thead className="bg-gray-50 text-sm uppercase">
                                <tr>
                                    <th className="px-6 py-4">Name</th>
                                    <th className="px-6 py-4">Price</th>
                                    <th className="px-6 py-4">
                                        Active Period in Months
                                    </th>
                                    <th className="px-6 py-4">Features</th>
                                    <th className="px-6 py-4" colSpan={2}>
                                        Action
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {subscriptionPlans.map((subscriptionPlan) => (
                                    <tr
                                        key={subscriptionPlan.id}
                                        className="border-b bg-white hover:bg-gray-50"
                                    >
                                        <td className="px-6 py-4">
                                            {subscriptionPlan.name}
                                        </td>
                                        <td className="px-6 py-4">
                                            {subscriptionPlan.price}
                                        </td>
                                        <td className="px-6 py-4">
                                            {
                                                subscriptionPlan.active_period_in_months
                                            }
                                        </td>
                                        <td className="px-6 py-4">
                                            {JSON.parse(
                                                subscriptionPlan.features,
                                            ).map((feature, index) => (
                                                <div key={index}>{feature}</div>
                                            ))}
                                        </td>
                                        <td className="px-6 py-4">
                                            <Link
                                                href={route(
                                                    "subscription-plans.edit",
                                                    subscriptionPlan.id,
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
                                                    subscriptionPlan.deleted_at
                                                        ? put(
                                                              route(
                                                                  "subscription-plans.restore",
                                                                  subscriptionPlan.id,
                                                              ),
                                                          )
                                                        : destroy(
                                                              route(
                                                                  "subscription-plans.destroy",
                                                                  subscriptionPlan.id,
                                                              ),
                                                          );
                                                }}
                                            >
                                                <Button
                                                    type="button"
                                                    variant="danger"
                                                    className="!px-6"
                                                >
                                                    {subscriptionPlan.deleted_at
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
                        <p>Subscription Plans are not available yet.</p>
                    )}
                </div>
            </section>
        </AuthenticatedLayout>
    );
}
