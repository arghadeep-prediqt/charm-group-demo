import React, { useCallback, useState } from "react";
import { Eye, EyeClosed } from "lucide-react";
import { BlurImage } from "@/components/ui/BluerImage";
import Link from "next/link";
import { setCookie } from "cookies-next";
import { useLoginGateWayMutation } from "@/redux/services/authApi";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

function Login() {
  const router = useRouter();
  const [isShow, setIsShow] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  //   const [cookies, setCookie] = useCookies(["authUser"]);
  const [loginGateWay] = useLoginGateWayMutation();

  const handleForm = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsClicked(true);

      const toastId = toast.loading("Verifying user...");

      try {
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email");
        const password = formData.get("password");

        const response = await loginGateWay({
          email: String(email),
          password: String(password),
        });

        if (response?.data) {
          // save the cookie
          setCookie("authUser", JSON.stringify({ ...response.data }), {
            expires: new Date(Date.now() + 43200000),
            // httpOnly: true,
            // maxAge: 43200,
            // path: '/',
          });
          // Success Message
          toast.success("Login Successfully", { id: toastId });
          router.reload();
        } else {
          // When error ocure
          const jsonError = JSON.stringify(response?.error);
          const resError = JSON.parse(jsonError);
          throw resError?.data?.message || "Server Error";
        }
        setIsClicked(false);
      } catch (error) {
        // console.log(error);
        toast.error(String(error), { id: toastId });
      } finally {
        setIsClicked(false);
      }
    },
    [loginGateWay, router]
  );

  return (
    <div className="min-h-screen relative">
      {/* Full screen background image */}
      <div className="fixed inset-0 -z-10">
        <BlurImage
          src="https://images.unsplash.com/photo-1560113855-2ea616c915ee?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="travel"
          width={1200}
          height={800}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </div>

      <div className="container mx-auto px-6 py-8 flex items-center justify-center min-h-screen">
        <div className="flex flex-col lg:flex-row w-full max-w-6xl gap-8 items-stretch">
          {/* Left Section - Content */}
          <div className="lg:w-1/2 relative">
            <div className="h-full flex flex-col items-center p-12">
              <Link href="/" className="mb-auto">
                <BlurImage
                  src="/images/charm.png"
                  alt="logo"
                  width={60}
                  height={60}
                  className="mx-auto filter brightness-0 invert"
                />
              </Link>

              <div className="text-center">
                <h1 className="text-5xl font-bold mb-4 text-white">
                  Experience Seamless Travel
                </h1>
                <p className="text-lg text-gray-200 mb-8">
                  Connecting travelers with extraordinary experiences through
                  innovative solutions and personalized journeys.
                </p>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Amazing Places
                </h3>
                <p className="text-gray-200">
                  Start your journey with us today
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - Login Form */}
          <div className="lg:w-1/2">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
              <div className="max-w-sm mx-auto">
                <h2 className="text-2xl font-semibold text-center mb-2">
                  Sign In
                </h2>
                <p className="text-gray-600 text-center mb-6">
                  Sign in if you already have an account.
                </p>

                <form onSubmit={handleForm} className="space-y-4">
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200  focus:border-transparent transition-all"
                    placeholder="Enter your email"
                    required
                  />

                  <div className="relative">
                    <input
                      type={isShow ? "text" : "password"}
                      name="password"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200  focus:border-transparent transition-all"
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                      onClick={() => setIsShow(!isShow)}
                    >
                      {isShow ? (
                        <Eye className="w-5 h-5 text-gray-500" />
                      ) : (
                        <EyeClosed className="w-5 h-5 text-gray-500" />
                      )}
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded text-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-600">
                        Remember me
                      </span>
                    </label>
                    <a
                      href="#"
                      className="text-sm text-blue-500 hover:text-blue-600"
                    >
                      Forgot Password?
                    </a>
                  </div>

                  <button
                    type="submit"
                    disabled={isClicked}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl transition-colors"
                  >
                    {isClicked ? "Please wait..." : "Continue"}
                  </button>

                  <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">
                        or continue with
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => router.push("/explore_membership")}
                    className="w-full flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 py-3 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <BlurImage
                      src="/icons/google.svg"
                      alt="Google"
                      width={20}
                      height={20}
                    />
                    <span>Sign in with Google</span>
                  </button>

                  <p className="text-center text-gray-600 text-sm mt-4">
                    Don't have an account?{" "}
                    <button
                      onClick={() => router.push("/auth/register")}
                      className="text-blue-500 hover:text-blue-600 font-medium"
                    >
                      Sign up
                    </button>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
