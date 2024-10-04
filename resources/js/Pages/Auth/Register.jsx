import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import Button from "@/Components/Button";
import InputError from "@/Components/InputError";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <div className="space-y-3">
                <h1 className="text-[26px] font-semibold text-white">
                    Register
                </h1>
                <p className="text-[#767676]">
                    Explore our new movies and get <br />
                    the better insight for your life
                </p>
            </div>

            <form
                onSubmit={submit}
                className="flex flex-col gap-6 md:w-[370px]"
            >
                <div className="space-y-2">
                    <InputLabel htmlFor="name" value="Full Name" />

                    <TextInput
                        id="name"
                        type="text"
                        name="name"
                        value={data.name}
                        autoComplete="off"
                        isFocused={true}
                        placeholder="Your full name"
                        onChange={handleOnChange}
                        required
                    />
                </div>

                <div className="space-y-2">
                    <InputLabel htmlFor="email" value="Email Address" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        autoComplete="off"
                        placeholder="Your email"
                        onChange={handleOnChange}
                        required
                        isError={errors.email}
                    />

                    <InputError message={errors.email} />
                </div>

                <div className="space-y-2">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        autoComplete="off"
                        placeholder="Your password"
                        onChange={handleOnChange}
                        required
                    />
                </div>

                <div className="space-y-2">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirm Password"
                    />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        autoComplete="off"
                        placeholder="Confirm your password"
                        onChange={handleOnChange}
                        required
                        isError={errors.password}
                    />

                    <InputError message={errors.password} />
                </div>

                <div className="mt-2 space-y-[14px]">
                    <Button type="submit" processing={processing}>
                        Register
                    </Button>

                    <div>
                        <Link href={route("login")}>
                            <Button type="button" variant="light-outline">
                                Login to My Account
                            </Button>
                        </Link>
                    </div>
                </div>
            </form>
        </GuestLayout>
    );
}
