import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, router } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import Button from "@/Components/Button";

export default function Edit({ auth, subscriptionPlan }) {
    const { data, setData, processing, errors } = useForm({
        ...subscriptionPlan,
    });

    const { features } = data;

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const handleFeatureChange = (event, index) => {
        const newFeatures = [...features];
        newFeatures[index] = event.target.value;
        setData("features", newFeatures);
    };

    const addFeature = () => {
        setData("features", [...features, ""]);
    };

    const removeFeature = (index) => {
        const newFeatures = features.filter((_, i) => i !== index);

        setData("features", newFeatures);
    };

    const submit = (e) => {
        e.preventDefault();

        router.post(route("subscription-plans.update", subscriptionPlan.id), {
            _method: "PUT",
            ...data,
        });
    };

    return (
        <AuthenticatedLayout auth={auth}>
            <Head title={`${auth.user.name} - Edit Subscription Plan`} />

            <section className="flex flex-col gap-4">
                <h1 className="text-[22px] font-semibold">
                    Edit Subscription Plan: {subscriptionPlan.name}{" "}
                    <hr className="mb-4" />
                </h1>

                <form onSubmit={submit} className="flex flex-col gap-6">
                    <div className="space-y-2">
                        <InputLabel htmlFor="name" value="Name" />

                        <TextInput
                            id="name"
                            type="text"
                            variant="primary-outline"
                            name="name"
                            defaultValue={subscriptionPlan.name}
                            autoComplete="on"
                            isFocused={true}
                            placeholder="Subscription plan name"
                            onChange={handleOnChange}
                            required
                            isError={errors.name}
                        />

                        <InputError message={errors.name} />
                    </div>

                    <div className="space-y-2">
                        <InputLabel htmlFor="price" value="Price" />

                        <TextInput
                            id="price"
                            type="number"
                            variant="primary-outline"
                            name="price"
                            defaultValue={subscriptionPlan.price}
                            autoComplete="off"
                            placeholder="Subscription plan price"
                            min={0}
                            onChange={handleOnChange}
                            required
                            isError={errors.price}
                        />

                        <InputError message={errors.price} />
                    </div>

                    <div className="space-y-2">
                        <InputLabel
                            htmlFor="active_period_in_months"
                            value="Active Period in Months"
                        />

                        <TextInput
                            id="active_period_in_months"
                            type="number"
                            variant="primary-outline"
                            name="active_period_in_months"
                            defaultValue={
                                subscriptionPlan.active_period_in_months
                            }
                            autoComplete="off"
                            placeholder="Subscription plan active period in months"
                            min={1}
                            onChange={handleOnChange}
                            required
                            isError={errors.active_period_in_months}
                        />

                        <InputError message={errors.active_period_in_months} />
                    </div>

                    <div className="space-y-2">
                        {features.map((feature, index) => (
                            <div key={index} className="space-y-2">
                                <InputLabel
                                    htmlFor={`feature_${index}`}
                                    value={`Feature ${index + 1}`}
                                />

                                <div className="flex items-center gap-4">
                                    <div className="w-full">
                                        <TextInput
                                            id={`feature_${index}`}
                                            type="text"
                                            variant="primary-outline"
                                            name={`features[${index}]`}
                                            value={feature}
                                            autoComplete="on"
                                            placeholder={`Subscription plan feature ${index + 1}`}
                                            onChange={(event) =>
                                                handleFeatureChange(
                                                    event,
                                                    index,
                                                )
                                            }
                                            required
                                            isError={errors.features?.[index]}
                                        />

                                        <InputError
                                            message={errors.features?.[index]}
                                        />
                                    </div>

                                    {features.length > 1 && (
                                        <Button
                                            className="!w-28"
                                            type="button"
                                            variant="danger"
                                            onClick={() => removeFeature(index)}
                                        >
                                            Remove
                                        </Button>
                                    )}
                                </div>
                            </div>
                        ))}

                        <Button
                            className="!mt-4 !w-32"
                            type="button"
                            onClick={addFeature}
                        >
                            Add feature
                        </Button>
                    </div>

                    <Button
                        className="!ml-auto !w-28"
                        type="submit"
                        variant="primary"
                        processing={processing}
                    >
                        Edit
                    </Button>
                </form>
            </section>
        </AuthenticatedLayout>
    );
}
