import GuestLayout from "@/Layouts/GuestLayout";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import Button from "@/Components/Button";
import { Head, Link } from "@inertiajs/react";

export default function Register() {
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

            <form className="flex flex-col gap-6 md:w-[370px]">
                <div className="space-y-2">
                    <InputLabel htmlFor="name" value="Full Name" />

                    <TextInput
                        id="name"
                        type="text"
                        name="name"
                        defaultValue="John Doe"
                        autoComplete="on"
                        isFocused={true}
                        placeholder="Your full name"
                    />
                </div>

                <div className="space-y-2">
                    <InputLabel htmlFor="email" value="Email Address" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        defaultValue="johndoe@nontoon.test"
                        autoComplete="on"
                        placeholder="Your email"
                    />
                </div>

                <div className="space-y-2">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        defaultValue="password"
                        autoComplete="off"
                        placeholder="Your password"
                    />
                </div>

                <div className="mt-2 space-y-[14px]">
                    <Button type="button">Register</Button>

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
