import React from "react";
import { BlurImage } from "@/components/ui/BluerImage";
import { useRouter } from "next/router";

interface PageProps {
  title: string;
}

function LeftViewSection({ title }: PageProps) {
  const router = useRouter();

  return (
    <div className="w-[30%] border border-gray-200 shadow-sm rounded-2xl sticky top-14">
      {/* Bottom Section */}
      <div className="mt-3 py-4 px-6">
        <h3 className="pb-3 font-medium text-[22px] leading-tight capitalize border-b border-gray-400">
          Resort Summary
        </h3>

        <div className="mt-5 flex justify-start items-center gap-x-4">
          <BlurImage
            src="https://img.icons8.com/material-rounded/100/00509d/user.png"
            alt="user"
            width={100}
            height={100}
            className="size-5 object-contain"
          />
          <p className="text-p1-m text-gray-700">
            Navigator | <span className="text-amber-500">2</span> Adults
          </p>
        </div>

        <div className="mt-5 flex justify-start items-center gap-x-4">
          <BlurImage
            src="https://img.icons8.com/ios-filled/100/00509d/bed.png"
            alt="studio"
            width={100}
            height={100}
            className="size-5 object-contain"
          />
          <p className="text-p1-m text-gray-700">
            {" "}
            <span className="text-amber-500">1</span> Studio
          </p>
        </div>

        <div className="mt-5 flex justify-start items-center gap-x-4">
          <BlurImage
            src="https://img.icons8.com/ios-filled/100/00509d/activity-history.png"
            alt="cv"
            width={100}
            height={100}
            className="size-5 object-contain"
          />
          <p className="text-p1-m text-gray-700">#8711719</p>

          <BlurImage
            src="https://img.icons8.com/glyph-neue/100/04385E/download--v1.png"
            alt="cv"
            width={100}
            height={100}
            className="size-4 object-contain"
          />
        </div>

        <div className="pt-8 flex justify-between items-center">
          <button
            onClick={() => router.back()}
            className="px-4 py-1.5 rounded-lg text-white text-p2-m bg-red-500 active:opacity-65"
          >
            Cancel Booking
          </button>
          <button
            onClick={() =>
              router.push(
                `/my_bookings/${title.split(" ").join("%20")}?type=modify`
              )
            }
            className="px-4 py-1.5 rounded-lg text-white text-p2-m bg-orange-500 active:opacity-65"
          >
            Modify Booking
          </button>
        </div>

        <h3 className="py-3 mt-5 font-medium text-[22px] leading-tight capitalize border-b border-gray-400">
          Resort Location
        </h3>

        <div className="relative">
          <BlurImage
            src={
              "https://charm.vn/wp-content/uploads/2022/12/vi-tri-Charm-Resort-Ho-Tram-1.jpg"
            }
            alt="map"
            width={400}
            height={300}
            className="mt-3 w-full h-full rounded-xl object-cover shadow-sm"
          />

          <button className="absolute top-2 right-2 py-1.5 px-3 rounded-lg text-p3-m text-white bg-[#00509df9]">
            View Map
          </button>
        </div>

        <h3 className="py-3 mt-6 font-medium text-[22px] leading-tight capitalize border-b border-gray-400">
          Packing Essentials
        </h3>
        <div className="my-5">
          <ListPara
            title="Comfortable Flip-Flops"
            para="Perfect for the beach, showers, and strolling around the resort."
          />
          <ListPara
            title="Capture the Moments"
            para="Don't forget your camera – there will be plenty of amazing photo opportunities during your stay."
          />
          <ListPara
            title="Stay Warm"
            para="Pack woolens, scarves, mufflers, caps, jackets, and other essentials to keep cozy."
          />
        </div>
      </div>
    </div>
  );
}

export default LeftViewSection;

interface ListParaProps {
  title: string;
  para: string;
}

function ListPara({ para, title }: ListParaProps) {
  return (
    <div className="mt-3 flex justify-start items-center gap-x-2">
      <BlurImage
        src="https://img.icons8.com/fluency/100/verified-account--v1.png"
        alt="check"
        width={100}
        height={100}
        className="size-7 object-contain"
      />

      <p className="w-10/12 capitalize text-p3-m">
        <span className="text-amber-500">{title}: </span>
        <span className="text-p3-r">{para}</span>
      </p>
    </div>
  );
}
