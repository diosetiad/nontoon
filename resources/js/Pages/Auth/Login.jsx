import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import Button from "@/Components/Button";
import InputError from "@/Components/InputError";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const handleOnChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <GuestLayout>
            <Head title="Login" />

            <div className="space-y-3">
                <h1 className="text-[26px] font-semibold text-white">
                    Welcome Back
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
                <InputError message={errors.email} />

                <div className="space-y-2">
                    <InputLabel htmlFor="email" value="Email Address" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        autoComplete="email"
                        isFocused={true}
                        placeholder="Your email"
                        onChange={handleOnChange}
                        required
                        isError={errors.email}
                    />
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
                        isError={errors.email}
                    />
                </div>

                <div className="mt-2 space-y-[14px]">
                    <Button type="submit" processing={processing}>
                        Start Watching
                    </Button>

                    <div>
                        <Link href={route("register")}>
                            <Button type="button" variant="light-outline">
                                Create New Account
                            </Button>
                        </Link>
                    </div>
                </div>
            </form>
        </GuestLayout>
    );
}
