import React, { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeClosed } from "lucide-react";
import { BlurImage } from "@/components/ui/BluerImage";
import dynamic from "next/dynamic";
import Link from "next/link";

const Footer = dynamic(() => import("@/components/shared/Footer"));

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
    <>
      <div className="flex justify-start items-center">
        <div className="min-h-[80vh] w-6/12 flex justify-center items-center">
          <div className="bg-white p-8 w-full max-w-xl">
            <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
              Create Your Charm Account
            </h2>

            {/* Login Form */}
            <form onSubmit={handleForm}>
              <div className="mb-4">
                <label
                  htmlFor="full_name"
                  className="block text-gray-700 text-[16px] font-medium mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="full_name"
                  className="shadow appearance-none border border-gray-200 rounded-lg w-full py-3 px-4 h-[44px] text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent text-[16px] placeholder:text-[16px]"
                  placeholder="Full Name"
                  autoFocus
                  required
                />
              </div>

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

              <div className="mb-4">
                <label
                  htmlFor="cpassword"
                  className="block text-gray-700 text-[16px] font-medium mb-2"
                >
                  Confirm Password
                </label>

                <div className="relative">
                  <input
                    type={isShowC ? "text" : "password"}
                    name="cpassword"
                    className="shadow appearance-none border border-gary-200 rounded-lg w-full py-3 px-4 h-[44px] text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent text-[16px] placeholder:text-[16px]"
                    placeholder="Confirm Password"
                    required
                  />
                  <div
                    className="absolute right-3 top-[50%] -translate-y-[50%] cursor-pointer"
                    onClick={() => setIsShowC(!isShowC)}
                  >
                    {isShowC ? (
                      <Eye className="size-6 text-gray-700" />
                    ) : (
                      <EyeClosed className="size-6 text-gray-700" />
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mb-6">
                <label className="flex justify-start items-center gap-x-2">
                  <input
                    type="checkbox"
                    className="form-checkbox size-4 text-blue-500"
                  />
                  <p className="leading-relaxed text-gray-700 text-p1-r">
                    I accept the{" "}
                    <a href="" className="text-blue-500 font-semibold">
                      Privacy Policy{" "}
                    </a>{" "}
                    and{" "}
                    <a href="" className="text-blue-500 font-semibold">
                      Terms & Conditions
                    </a>
                    .
                  </p>
                </label>
              </div>

              <div className="mt-10 flex justify-center items-center">
                <button
                  type="submit"
                  className="bg-amber-500 hover:bg-amber-400 hover:text-gray-700 text-white text-[16px] font-medium py-2 rounded-full w-4/12 focus:outline-nono"
                  disabled={isClicked}
                >
                  {isClicked ? "Creating your Account..." : "Sign Up"}
                </button>
              </div>
            </form>

            <div className="flex items-center justify-center mt-6">
              <span className="text-gray-600 text-[15px] capitalize">
                Or continue with
              </span>
            </div>

            <div className="flex justify-center items-center mt-4">
              <button className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 py-2 px-4 rounded-full w-6/12 flex justify-start items-center font-medium text-[16px]">
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
              Already have an account?{" "}
              <button
                onClick={() => router.push("/auth")}
                className="text-amber-500 hover:text-amber-700 font-medium text-[16px] border-none focus:outline-none"
              >
                Log In
              </button>
            </div>
          </div>
        </div>

        <div className="w-6/12 relative">
          <BlurImage
            src="https://images.unsplash.com/photo-1503432697506-6986abec65ca?q=80&w=3005&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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

              <div className="text-center mt-5">
                <h1 className="text-white leading-relaxed">
                  WELCOME TO CHARM{" "}
                </h1>
                <p className="text-p1-r text-white leading-relaxed mt-1">
                  Join a community that redefines travel. Start planning
                  unforgettable getaways today!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default RegisterPage;
