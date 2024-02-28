/* eslint-disable @next/next/no-img-element */
import Button from "@components/Button";
import Input from "@components/Input";
import SocialLogin from "@components/SocialLogin";
import Link from "next/link";

export default function Register() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Create an Account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div className="mt-4 flex justify-between">
            <Input label="First Name" type="text" />
            <Input label="Last Name" type="text" />
          </div>

          <Input label="Email" type="email" autocomplete="email" />
          <Input label="Password" type="password" autocomplete="password" />
          <Input
            label="Confirm Password"
            type="password"
            autocomplete="password"
          />
          <SocialLogin />
          <Button
            name="Create Account"
            onClick={() => console.log("sign in action")}
          />
        </form>

        <p className="mt-10 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold leading-6 text-indigo-400 hover:text-indigo-300"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}
