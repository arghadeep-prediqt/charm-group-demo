import { BlurImage } from "@/components/ui/BluerImage";
import dynamic from "next/dynamic";
import React from "react";

const Container = dynamic(() => import("@/components/shared/Container"));

function HolidayOffer() {
  return (
    <Container className="mt-[5%] my-[2%] py-2">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div className="w-10/12">
          <h1 className="text-[40px] leading-relaxed">Your Holiday Offers</h1>
          <p className="text-[18px] text-gray-700">
            Check out the offers that will make your holiday even better
          </p>
        </div>
        <div className="w-2/12 flex justify-end">
          <button className="text-sky-700 text-[18px] font-semibold capitalize hover:underline hover:underline-offset-2">
            view all
          </button>
        </div>
      </div>

      <div className="flex pt-[2.8rem]">
        <div className="bg-[#fef1c9] text-gray-800 h-[50vh] px-16 py-[2em] relative text-center rounded-2xl">
          <div className="h-full flex flex-col gap-4 justify-center items-center">
            <h2 className="text-primary-700">SP Offer : 3960451</h2>
            <h4 className=" mt-2 font-medium text-gray-700">
              Offer Valid Till 04 Dec 2025
            </h4>

            <button className="mt-1 bg-[#0ec1eb] text-white text-p1-b py-2 px-4 w-full rounded-full active:opacity-65">
              Explore now
            </button>
          </div>
        </div>

        <div className="relative z-10">
          <div className="absolute rounded-full size-8 bg-white -left-5 -top-4"></div>
        </div>

        <div className="h-[50vh] max-w-sm">
          <BlurImage
            src="https://common-booking-engine.gumlet.io/cmsimages/offer-card/Offer 3.jpg"
            alt=""
            width={600}
            height={900}
            className="w-full h-full rounded-2xl"
          />
          <div className="relative z-10">
            <div className="absolute rounded-full size-8 bg-white -left-5 -top-3"></div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default HolidayOffer;
