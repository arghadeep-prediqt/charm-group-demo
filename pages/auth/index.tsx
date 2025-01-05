import React, { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeClosed } from "lucide-react";
import { BlurImage } from "@/components/ui/BluerImage";
import dynamic from "next/dynamic";
import Link from "next/link";

const Container = dynamic(() => import("@/components/shared/Container"));

function Login() {
  const router = useRouter();
  const [isShow, setIsShow] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  //   const [cookies, setCookie] = useCookies(["authUser"]);

  const handleForm = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsClicked(true);

      const formData = new FormData(e.currentTarget);

      const email = formData.get("email");
      const password = formData.get("password");

      console.log({ email, password });

      if (email !== "arghadeep.mallick@prediqt.it" && password !== "123456") {
        setIsClicked(false);
        alert("User Credentials are not correct");
        return;
      }

      try {
        const res = await fetch(`/api/auth?token=${String(email)}`, {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const resData = await res.json();

        if (res.status === 200) {
          console.log(resData);

          router.push("/");
          setIsClicked(false);
          return;
        }

        throw new Error("Unable to Login");
      } catch (error) {
        console.log(error);

        alert(error);
        setIsClicked(false);
      }

      setIsClicked(false);
    },
    [router]
  );

  return (
    <Container className="mt-4">
      <Link
        href={"/"}
        className="flex justify-start items-center gap-x-2 cursor-pointer"
      >
        <BlurImage
          src={"/images/charm.png"}
          alt="logo"
          width={100}
          height={100}
          className="size-10 object-cover"
        />
        <h3 className="text-gray-700 leading-relaxed">CHARM</h3>
      </Link>

      <div className="flex justify-start items-center">
        <div className="w-6/12">
          <BlurImage
            src="https://prediqt.ai/image/run.svg"
            alt="register"
            width={600}
            height={1200}
            className="w-full object-cover"
          />
        </div>

        <div className="min-h-[80vh] w-6/12 flex justify-center items-center">
          <div className="bg-white p-8 w-full max-w-xl">
            <h2 className="text-3xl font-semibold text-center mb-6 text-gray-800">
              Sign in
            </h2>

            {/* Login Form */}
            <form onSubmit={handleForm}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-[16px] font-medium mb-2"
                >
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  className="shadow appearance-none border border-gray-200 rounded-lg w-full py-3 px-4 h-[44px] text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent text-[16px] placeholder:text-[16px]"
                  placeholder="Email address"
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
                    placeholder="Enter password"
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
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white text-[16px] font-medium py-2 px-4 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={isClicked}
              >
                {isClicked ? "Please wait..." : "Continue with Login"}
              </button>
            </form>

            <div className="flex items-center justify-center mt-6">
              <span className="text-gray-600 text-[15px]">
                or use one of these options
              </span>
            </div>

            <div className="flex flex-col gap-6 mt-4">
              <button className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 py-2 px-4 rounded flex items-center justify-center w-full font-medium text-[16px]">
                <BlurImage
                  src={"/icons/google.svg"}
                  alt="Google"
                  width={100}
                  height={100}
                  className="size-8 mr-2"
                />
                Continue with Google
              </button>

              <button className="bg-blue-600 hover:bg-blue-800 border border-blue-800 text-white py-2 px-4 rounded flex items-center justify-center w-full font-medium text-[16px]">
                <BlurImage
                  src={"/icons/facebook.svg"}
                  alt="Facebook"
                  width={100}
                  height={100}
                  className="size-6 mr-2"
                />
                Continue with Facebook
              </button>
            </div>

            <div className="text-center mt-6 text-[16px] font-normal">
              Don’t have an account?{" "}
              <button
                onClick={() => router.push("/auth/register")}
                className="text-blue-500 hover:text-blue-700 font-medium text-[16px] border-none focus:outline-none"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Login;
