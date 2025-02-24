import React, { useCallback, useState } from "react";
import { Eye, EyeClosed } from "lucide-react";
import { BlurImage } from "@/components/ui/BluerImage";
import dynamic from "next/dynamic";
import Link from "next/link";
import { setCookie } from "cookies-next";
import { useLoginGateWayMutation } from "@/redux/services/authApi";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

const Footer = dynamic(() => import("@/components/shared/Footer"));

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
    <>
      <div className="flex justify-start items-center">
        <div className="w-6/12 relative">
          <BlurImage
            src="https://images.unsplash.com/photo-1560113855-2ea616c915ee?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="register"
            width={600}
            height={1200}
            className="w-full h-screen object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/60">
            <div className="px-10 w-full h-full flex flex-col justify-center items-center">
              <div className="">
                <Link
                  href={"/"}
                  className="w-full flex justify-center items-center gap-x-2 cursor-pointer"
                >
                  <BlurImage
                    src={"/images/charm.png"}
                    alt="logo"
                    width={100}
                    height={100}
                    className="size-28 object-cover"
                  />
                </Link>
              </div>

              <div className="pb-24 text-center mt-5">
                <h1 className="text-white leading-relaxed">
                  WELCOME BACK TO CHARM{" "}
                </h1>
                <p className="text-p1-r mt-1 leading-relaxed text-white">
                  Reconnect with a community that redefines travel and
                  experiences.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="min-h-[80vh] w-6/12 flex justify-center items-center">
          <div className="bg-white p-8 w-full max-w-xl">
            <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
              Sign In to Charm
            </h2>

            {/* Login Form */}
            <form onSubmit={handleForm}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-[16px] font-medium mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  className="shadow appearance-none border border-gray-200 rounded-lg w-full py-3 px-4 h-[44px] text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent text-[16px] placeholder:text-[16px]"
                  placeholder="Email Address"
                  autoFocus={true}
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-[16px] font-medium mb-2"
                >
                  Password
                </label>

                <div className="relative">
                  <input
                    type={isShow ? "text" : "password"}
                    name="password"
                    className="shadow appearance-none border border-gary-200 rounded-lg w-full py-3 px-4 h-[44px] text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent text-[16px] placeholder:text-[16px]"
                    placeholder="Enter Password"
                    required
                  />
                  <div
                    className="absolute right-3 top-[50%] -translate-y-[50%] cursor-pointer"
                    onClick={() => setIsShow(!isShow)}
                  >
                    {isShow ? (
                      <Eye className="size-6 text-gray-700" />
                    ) : (
                      <EyeClosed className="size-6 text-gray-700" />
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox size-5 text-blue-500"
                  />
                  <span className="ml-2 text-gray-700 text-[16px]">
                    Keep me signed in
                  </span>
                </label>
                <a
                  href="#"
                  className="text-[16px] text-blue-500 hover:text-blue-700"
                >
                  Forgot Password?
                </a>
              </div>

              <div className="mt-10 flex justify-center items-center">
                <button
                  type="submit"
                  className="bg-amber-500 hover:bg-amber-400 hover:text-gray-700 text-white text-[16px] font-medium py-2 rounded-full w-4/12 focus:outline-nono"
                  disabled={isClicked}
                >
                  {isClicked ? "Please Wait..." : "Sign In"}
                </button>
              </div>
            </form>

            <div className="flex items-center justify-center mt-6">
              <span className="text-gray-600 text-[15px] capitalize">
                Or continue with
              </span>
            </div>

            <div className="flex justify-center items-center mt-4">
              <button
                onClick={() => router.push("/explore_membership")}
                className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 py-2 px-4 rounded-full w-6/12 flex justify-start items-center font-medium text-[16px]"
              >
                <BlurImage
                  src={"/icons/google.svg"}
                  alt="Google"
                  width={100}
                  height={100}
                  className="size-6 mr-2"
                />
                Continue with Google
              </button>
            </div>

            <div className="text-center mt-6 text-[16px] font-normal">
              Don’t have an account?{" "}
              <button
                onClick={() => router.push("/auth/register")}
                className="text-amber-500 hover:text-amber-700 font-medium text-[16px] border-none focus:outline-none"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Login;
