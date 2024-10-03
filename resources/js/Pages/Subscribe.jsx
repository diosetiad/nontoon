import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import SubscriptionCard from "@/Components/SubscriptionCard";

export default function Subscribe() {
    return (
        <AuthenticatedLayout>
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

                <div className="flex flex-col items-start gap-10 md:flex-row">
                    <SubscriptionCard
                        name="Basic"
                        price={120000}
                        durationInMonth={1}
                        features={["Feature 1", "Feature 2", "Feature 3"]}
                    />

                    <SubscriptionCard
                        isPremium
                        name="Premium"
                        price={186000}
                        durationInMonth={1}
                        features={[
                            "Feature 1",
                            "Feature 2",
                            "Feature 3",
                            "Feature 4",
                            "Feature 5",
                        ]}
                    />
                </div>
            </section>
        </AuthenticatedLayout>
    );
}
