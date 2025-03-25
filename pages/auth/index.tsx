import React, { useCallback, useState, useEffect } from "react";
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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2940&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1741462166415-1c5bcbdbbc46?q=80&w=2950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1707944422462-b3afab23da95?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  // Auto slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, [images.length]);

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
    <div className="min-h-screen">
      <div className="flex h-screen">
        <div className="lg:w-1/2 relative overflow-hidden">
          {/* Back to website button */}

          {/* Main Content */}
          <div className="relative h-full flex flex-col justify-end p-12">
            {/* Logo */}
            <div className="absolute top-20 left-12">
              <Link href="/">
                <BlurImage
                  src="/images/charm.png"
                  alt="logo"
                  width={40}
                  height={40}
                  className="brightness-0 invert"
                />
              </Link>
            </div>

            {/* Text Content */}
            <div className="mb-20">
              <h1 className="text-[2.5rem] font-medium leading-tight text-white mb-4">
                Experience Seamless Travel
              </h1>
              <p className="text-white/90 text-lg mb-4">
                Connecting travelers with extraordinary experiences through
                innovative solutions and personalized journeys.
              </p>
              <h2 className="text-white text-xl font-medium mb-2">
                Amazing Places
              </h2>
              <p className="text-white/90">Start your journey with us today</p>
              <div className="flex gap-2 mt-8">
                {images.map((_, index) => (
                  <div
                    key={index}
                    className={`w-8 h-1 rounded-full ${
                      currentImageIndex === index
                        ? "bg-white"
                        : "bg-gray-400/30"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Background Image with Overlay */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-black/50 z-10" />{" "}
            {/* Dark overlay */}
            <BlurImage
              src={images[currentImageIndex]}
              alt="background slider"
              width={1000}
              height={1000}
              className="w-full h-full object-cover transition-opacity duration-1000"
            />
          </div>
        </div>
        <div className="lg:w-1/2 p-8 lg:p-12 bg-gradient-to-b from-blue-50  to-teal-50 flex items-center justify-center">
          <div className="w-full max-w-xl">
            <h2 className="text-3xl font-semibold text-gray-800 mb-2">
              Sign In
            </h2>
            <p className="text-gray-600 mb-8">
              Sign in if you already have an account.
            </p>

            <form onSubmit={handleForm} className="space-y-5">
              <div>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-xl bg-white/80 border border-gray-200 text-gray-800 placeholder-gray-500 focus:border-purple-500 focus:ring-purple-500 transition-all"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="relative">
                <input
                  type={isShow ? "text" : "password"}
                  name="password"
                  className="w-full px-4 py-3 rounded-xl bg-white/80 border border-gray-200 text-gray-800 placeholder-gray-500 focus:border-purple-500 focus:ring-purple-500 transition-all"
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
                    className="rounded bg-white border-gray-300 text-purple-500 focus:ring-purple-500"
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    Remember me
                  </span>
                </label>
                <a
                  href="#"
                  className="text-sm text-purple-600 hover:text-purple-700"
                >
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                disabled={isClicked}
                className="w-full bg-gradient-to-r from-blue-500  to-teal-500 text-white py-3 rounded-xl transition-all"
              >
                {isClicked ? "Please wait..." : "Continue"}
              </button>

              <div className="relative my-6">
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
                className="w-full flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 py-3 rounded-xl hover:bg-gray-50 transition-all"
              >
                <BlurImage
                  src="/icons/google.svg"
                  alt="Google"
                  width={20}
                  height={20}
                />
                <span>Continue with Google</span>
              </button>

              <p className="text-center text-gray-600 text-sm mt-6">
                Don't have an account?{" "}
                <button
                  onClick={() => router.push("/auth/register")}
                  className="text-purple-600 hover:text-purple-700 font-medium"
                >
                  Sign up
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
