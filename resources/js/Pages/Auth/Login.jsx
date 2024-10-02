import GuestLayout from "@/Layouts/GuestLayout";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import Button from "@/Components/Button";
import { Head, Link } from "@inertiajs/react";

export default function Login() {
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

            <form className="flex flex-col gap-6 md:w-[370px]">
                <div className="space-y-2">
                    <InputLabel htmlFor="email" value="Email Address" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        isFocused={true}
                        placeholder="Your email"
                    />
                </div>

                <div className="space-y-2">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Your password"
                    />
                </div>

                <div className="mt-2 space-y-[14px]">
                    <Button type="button">Start Watching</Button>

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
