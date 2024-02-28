/* eslint-disable @next/next/no-img-element */
import Button from "@components/Button";
import Input from "@components/Input";
import SocialLogin from "@components/SocialLogin";
import { useUser } from "@hooks/useUser";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import loadingAnimation from "@lotties/loading.json";
import lottieAnimation from "@lotties/pulsating-circle.json";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const { data, isLoading } = useUser();
  const [loading, setLoading] = useState(false);
  // const lottieRef = useRef<LottieRefCurrentProps>(null);
  const router = useRouter();

  if (isLoading) {
    return <></>;
  }
  if (data?.userID) {
    router.push("/dashboard");
  }

  async function login() {
    setLoading(true);
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();
    setLoading(false);
    const { status } = response;
    if (status !== 200) {
      setLoginError(data.message);
      return;
    }
    setLoginError("");
    router.push("/dashboard");
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        {/* <p onClick={() => lottieRef.current?.setSpeed(0.1)}>Click me</p> */}
        {/* <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
          alt="Your Company"
        /> */}
        <div className="flex justify-center">
          <Lottie
            style={{
              width: 200,
              backgroundColor: "transparent",
              marginBottom: -40,
            }}
            animationData={lottieAnimation}
            // lottieRef={lottieRef}
            loop
          />
        </div>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm space-y-6">
        <Input
          label="Email"
          type="email"
          autocomplete="email"
          valueSetter={setEmail}
        />
        <Input
          label="Password"
          type="password"
          autocomplete="password"
          altLabel="Forgot Password?"
          altLabelLink="/forgot"
          valueSetter={setPassword}
          onEnter={login}
        />
        <SocialLogin />
        <Button name="Sign In" onClick={login} />
        {loginError && (
          <p className="text-center text-sm text-red-400">{loginError}</p>
        )}
        {loading && (
          <div className="flex justify-center">
            <Lottie
              style={{ width: 100 }}
              animationData={loadingAnimation}
              loop
            />
          </div>
        )}
        <p className="mt-10 text-center text-sm text-gray-400">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="font-semibold leading-6 text-indigo-400 hover:text-indigo-300"
          >
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
