import React, { useCallback, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeClosed } from "lucide-react";
import { BlurImage } from "@/components/ui/BluerImage";
import Link from "next/link";

function RegisterPage() {
  const router = useRouter();
  const [isShow, setIsShow] = useState<boolean>(false);
  const [isShowC, setIsShowC] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState(false);
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
    }, 2000);

    return () => clearInterval(timer);
  }, [images.length]);

  const handleForm = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsClicked(true);

      const formData = new FormData(e.currentTarget);

      const fullName = formData.get("full_name");
      const email = formData.get("email");
      const password = formData.get("password");
      const cpassword = formData.get("cpassword");

      if (password !== cpassword)
        return alert("Both the passwords are not same");

      console.log({ fullName, email, password, cpassword });

      //   try {
      //     const res = await fetch(`${urlApi}/api/register`, {
      //       method: "POST",
      //       mode: "cors",
      //       headers: {
      //         "Content-Type": "application/json",
      //       },
      //       body: JSON.stringify({ email, password }),
      //     });

      //     if (res.status === 201) {
      //       // console.log(resData);
      //       alert("Account has been created. Please Login.");
      //       router.push("/login");
      //       setIsClicked(false);
      //       return;
      //     }

      //     throw new Error("Unable to Login");
      //   } catch (error) {
      //     console.log(error);
      //     setIsClicked(false);
      //   }
    },
    []
  );

  return (
    <div className="min-h-screen">
      <div className="flex h-screen">
        {/* Left Section */}
        <div className="lg:w-1/2 relative overflow-hidden">
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
          <div className="relative h-full flex flex-col justify-end p-12">
            <div className="mb-20">
              <h1 className="text-[2.5rem] font-medium leading-tight text-white mb-4">
                Start Your Journey,
                <br />
                Join Our Community
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

          {/* Background Image */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <BlurImage
              src={images[currentImageIndex]}
              alt="background slider"
              width={1000}
              height={1000}
              className="w-full h-full object-cover transition-opacity duration-1000"
            />
          </div>
        </div>

        {/* Right Section - Register Form */}
        <div className="lg:w-1/2 p-8 lg:p-12 bg-gradient-to-b from-blue-50 to-teal-50 flex items-center justify-center">
          <div className="w-full max-w-xl">
            <h2 className="text-3xl font-semibold text-gray-800 mb-2">
              Create Account
            </h2>
            <p className="text-gray-600 mb-8">
              Fill in your details to get started
            </p>

            <form onSubmit={handleForm} className="space-y-5">
              <div>
                <input
                  type="text"
                  name="full_name"
                  className="w-full px-4 py-3 rounded-xl bg-white/80 border border-gray-200 text-gray-800 placeholder-gray-500 focus:border-purple-500 focus:ring-purple-500 transition-all"
                  placeholder="Full Name"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-xl bg-white/80 border border-gray-200 text-gray-800 placeholder-gray-500 focus:border-purple-500 focus:ring-purple-500 transition-all"
                  placeholder="Email Address"
                  required
                />
              </div>

              <div className="relative">
                <input
                  type={isShow ? "text" : "password"}
                  name="password"
                  className="w-full px-4 py-3 rounded-xl bg-white/80 border border-gray-200 text-gray-800 placeholder-gray-500 focus:border-purple-500 focus:ring-purple-500 transition-all"
                  placeholder="Password"
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

              <div className="relative">
                <input
                  type={isShowC ? "text" : "password"}
                  name="cpassword"
                  className="w-full px-4 py-3 rounded-xl bg-white/80 border border-gray-200 text-gray-800 placeholder-gray-500 focus:border-purple-500 focus:ring-purple-500 transition-all"
                  placeholder="Confirm Password"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  onClick={() => setIsShowC(!isShowC)}
                >
                  {isShowC ? (
                    <Eye className="w-5 h-5 text-gray-500" />
                  ) : (
                    <EyeClosed className="w-5 h-5 text-gray-500" />
                  )}
                </button>
              </div>

              <label className="flex items-center gap-x-2">
                <input
                  type="checkbox"
                  className="rounded bg-white border-gray-300 text-purple-500 focus:ring-purple-500"
                  required
                />
                <span className="text-sm text-gray-600">
                  I accept the{" "}
                  <a href="#" className="text-purple-600 hover:text-purple-700">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-purple-600 hover:text-purple-700">
                    Terms & Conditions
                  </a>
                </span>
              </label>

              <button
                type="submit"
                disabled={isClicked}
                className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white py-3 rounded-xl transition-all"
              >
                {isClicked ? "Creating Account..." : "Sign Up"}
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
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => router.push("/auth")}
                  className="text-purple-600 hover:text-purple-700 font-medium"
                >
                  Sign In
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
