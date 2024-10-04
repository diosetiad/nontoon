import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import SubscriptionCard from "@/Components/SubscriptionCard";

export default function Subscribe({ auth, subscriptionPlans }) {
    const handleOnClikSubscription = (id) => {
        router.post(
            route("subscribe.store", {
                subscription_plan: id,
            }),
        );
    };

    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Subscribe" />

            <section className="flex flex-col items-center gap-[70px]">
                <div className="space-y-4 text-center">
                    <h1 className="text-[26px] font-semibold">
                        Pricing for Everyone
                    </h1>

                    <p className="max-w-[303px] leading-7 text-gray-1">
                        Invest your little money to get a whole new experiences
                        from movies.
                    </p>
                </div>

                {subscriptionPlans.length > 0 ? (
                    <div className="flex flex-col items-start gap-10 md:flex-row">
                        {subscriptionPlans.map((subscriptionPlan) => (
                            <SubscriptionCard
                                key={subscriptionPlan.id}
                                isPremium={subscriptionPlan.name === "Premium"}
                                name={subscriptionPlan.name}
                                price={subscriptionPlan.price}
                                durationInMonth={
                                    subscriptionPlan.active_period_in_months
                                }
                                features={JSON.parse(subscriptionPlan.features)}
                                onClickSubscription={() =>
                                    handleOnClikSubscription(
                                        subscriptionPlan.id,
                                    )
                                }
                            />
                        ))}
                    </div>
                ) : (
                    <p className="text-center">
                        Subscription plans are not available yet.
                    </p>
                )}
            </section>
        </AuthenticatedLayout>
    );
}
