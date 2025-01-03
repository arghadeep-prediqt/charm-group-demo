import { BlurImage } from "@/components/ui/BluerImage";
import React from "react";

function RefferalSection() {
  return (
    <div className="relative mb-[3%]">
      <BlurImage
        src={"https://holidays.clubmahindra.com/images/hfrp-bg-desktop.svg"}
        alt="referral"
        width={1600}
        height={800}
        className="w-full h-full"
      />

      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-end gap-x-3 pb-14">
        <div className="w-9/12 h-full flex justify-center items-end">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-white w-10/12 p-4 rounded-full flex justify-start items-center gap-x-4 divide-x-2 divide-gray-300 shadow-sm"
          >
            <input
              required
              type="text"
              placeholder="Friend's Name"
              className="w-full bg-transparent focus:outline-none ps-4 placeholder:text-primary-600 text-p1-m"
            />
            <input
              required
              type="text"
              placeholder="Friend's City"
              className="w-full bg-transparent focus:outline-none ps-4 placeholder:text-primary-600 text-p1-m"
            />
            <input
              required
              type="text"
              placeholder="Mobile Number"
              className="w-full bg-transparent focus:outline-none ps-4 placeholder:text-primary-600 text-p1-m"
            />
            <input
              required
              type="text"
              placeholder="Friend's e-mail"
              className="w-full bg-transparent focus:outline-none ps-4 placeholder:text-primary-600 text-p1-m"
            />
            <button
              type="submit"
              className="bg-sky-500 text-white text-[18px] font-semibold w-full py-2 rounded-full"
            >
              Refer Now
            </button>
          </form>
        </div>
        <div className="w-3/12">
          <h1 className="text-white font-medium leading-snug">
            Explore Charm <br />
            Rewards Referral <br />
            Program
          </h1>
          <button
            type="submit"
            className="mt-8 text-sky-500 bg-white text-p1-m px-10 py-3 rounded-full border-2 shadow-sm"
          >
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default RefferalSection;
