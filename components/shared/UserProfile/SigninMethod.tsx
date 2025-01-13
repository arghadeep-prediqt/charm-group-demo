import { BlurImage } from "@/components/ui/BluerImage";
import React from "react";

function SigninMethod() {
  return (
    <section
      id="signin"
      className="mt-5 p-8 bg-gray-50 shadow-sm border border-gray-200 rounded-xl"
    >
      <h3 className="font-medium text-gray-800">Sign in method</h3>

      <div className="my-6">
        <RowMethod
          title="email address"
          value="chin_thanh@charm.vn"
          btnName="change email"
        />
        <RowMethod
          title="password"
          value="**********"
          btnName="change password"
        />
      </div>

      {/* notification */}
      <div className="mt-6  px-4 py-3 bg-amber-50 border border-amber-300 rounded-xl flex justify-start items-center gap-x-4">
        <BlurImage
          src={"/icons/verify.svg"}
          alt="verify"
          width={100}
          height={100}
          className="size-8"
        />

        <div className="w-full">
          <p className="w-full text-[18px] text-gray-700 font-medium">
            Secure Your Account
          </p>
          <div className="flex justify-between items-center gap-x-4">
            <p className="w-11/12 text-[16px] mt-1 text-gray-600">
              Two-factor authentication adds an extra layer of security to your
              account. To log in, in addition {"you'll"} need to provide a 6
              digit code.
            </p>
          </div>
        </div>
        <button className="px-4 py-1.5 text-[14px] text-gray-700 font-semibold bg-amber-300 rounded-lg active:opacity-70">
          Enable
        </button>
      </div>
    </section>
  );
}

export default SigninMethod;

interface RowMethodProps {
  title: string;
  value: string;
  btnName: string;
}

function RowMethod({ title, value, btnName }: RowMethodProps) {
  return (
    <div className="py-4 px-3 border-y border-gary-200 flex justify-between items-center">
      <div className="text-start px-3">
        <p className="text-[18px] text-gray-800 font-semibold capitalize">
          {title}
        </p>
        <p className="mt-1 text-p1-m text-gray-600">{value}</p>
      </div>

      <button className="text-amber-600 text-p1-m capitalize border border-amber-300 bg-amber-50 px-5 py-1.5 rounded-xl shadow-sm active:opacity-70">
        {btnName}
      </button>
    </div>
  );
}
