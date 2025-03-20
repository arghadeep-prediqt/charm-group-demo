import React, { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeClosed } from "lucide-react";
import { BlurImage } from "@/components/ui/BluerImage";
import Link from "next/link";

function RegisterPage() {
  const router = useRouter();
  const [isShow, setIsShow] = useState<boolean>(false);
  const [isShowC, setIsShowC] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState(false);

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
            <div className="h-full flex flex-col items-center justify-center p-12">
              <Link href="/">
                <BlurImage
                  src="/images/charm.png"
                  alt="logo"
                  width={60}
                  height={60}
                  className="mx-auto filter brightness-0 invert mb-4"
                />
              </Link>

              <div className="text-center">
                <h1 className="text-5xl font-bold mb-4 text-white">
                  WELCOME TO CHARM
                </h1>
                <p className="text-gray-200">
                  Join a community that redefines travel. Start planning
                  unforgettable getaways today!
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - Register Form */}
          <div className="lg:w-1/2">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
              <div className="max-w-sm mx-auto">
                <h2 className="text-2xl font-semibold text-center mb-2">
                  Create Account
                </h2>
                <p className="text-gray-600 text-center mb-6">
                  Fill in your details to get started
                </p>

                <form onSubmit={handleForm} className="space-y-4">
                  <input
                    type="text"
                    name="full_name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200  focus:border-transparent transition-all"
                    placeholder="Full Name"
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200  focus:border-transparent transition-all"
                    placeholder="Email Address"
                    required
                  />

                  <div className="relative">
                    <input
                      type={isShow ? "text" : "password"}
                      name="password"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200  focus:border-transparent transition-all"
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
                      className="w-full px-4 py-3 rounded-xl border border-gray-200  focus:border-transparent transition-all"
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
                      className="rounded text-blue-500"
                      required
                    />
                    <span className="text-sm text-gray-600">
                      I accept the{" "}
                      <a href="#" className="text-blue-500 hover:text-blue-600">
                        Privacy Policy
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-blue-500 hover:text-blue-600">
                        Terms & Conditions
                      </a>
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={isClicked}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl transition-colors"
                  >
                    {isClicked ? "Creating Account..." : "Sign Up"}
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
                    className="w-full flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 py-3 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <BlurImage
                      src="/icons/google.svg"
                      alt="Google"
                      width={20}
                      height={20}
                    />
                    <span>Continue with Google</span>
                  </button>

                  <p className="text-center text-gray-600 text-sm">
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={() => router.push("/auth")}
                      className="text-blue-500 hover:text-blue-600 font-medium"
                    >
                      Sign In
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

export default RegisterPage;
