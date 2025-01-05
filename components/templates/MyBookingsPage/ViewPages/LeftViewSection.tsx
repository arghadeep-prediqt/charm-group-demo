import React from "react";
import { BlurImage } from "@/components/ui/BluerImage";

interface PageProps {
  title: string;
  subTitle: string;
}

function LeftViewSection({ title, subTitle }: PageProps) {
  return (
    <div className="w-[30%] bg-white border border-white rounded-2xl">
      <BlurImage
        src={
          "https://charm.vn/wp-content/uploads/2022/12/Charm-Resort-Ho-Tram-1.jpg"
        }
        alt="resort image"
        width={400}
        height={200}
        className="w-full h-[170px] object-cover rounded-tr-2xl rounded-tl-2xl"
      />

      {/* Bottom Section */}
      <div className="mt-3 py-4 px-6">
        <h3 className="font-medium break-words text-wrap text-[22px] leading-tight">
          {title}
        </h3>
        <p className="text-p1-r text-gray-700 leading-relaxed mt-3">
          {subTitle}
        </p>

        <div className="w-fit mt-5 flex justify-start items-center gap-x-3 py-1 ps-1 pe-3 bg-yellow-400 rounded-full">
          <BlurImage
            src="https://holidays.clubmahindra.com/images/utilised.svg"
            alt="logo"
            width={100}
            height={100}
            className="size-6 object-contain"
          />
          <p className="text-p2-m leading-relaxed">2 days utilised</p>
        </div>

        <div className="mt-5 flex justify-start items-center gap-x-4">
          <BlurImage
            src="https://holidays.clubmahindra.com/images/person.svg"
            alt="user"
            width={100}
            height={100}
            className="size-5 object-contain"
          />
          <p className="text-p1-r text-gray-700">2 Adult | 0 Child</p>
        </div>

        <div className="mt-5 flex justify-start items-center gap-x-4">
          <BlurImage
            src="https://holidays.clubmahindra.com/images/bed.svg"
            alt="studio"
            width={100}
            height={100}
            className="size-5 object-contain"
          />
          <p className="text-p1-r text-gray-700">1 Studio</p>
        </div>

        <div className="mt-5 flex justify-start items-center gap-x-4">
          <BlurImage
            src="https://holidays.clubmahindra.com/images/cv.svg"
            alt="cv"
            width={100}
            height={100}
            className="size-5 object-contain"
          />
          <p className="text-p1-r text-gray-700">8711719</p>
        </div>

        <p className="text-p1-m mt-8">View on Map</p>
        <BlurImage
          src={
            "https://common-booking-engine.gumlet.io/cmsimages/bookingMapImages/128.png"
          }
          alt="map"
          width={400}
          height={300}
          className="mt-3 w-full h-full object-cover"
        />

        <button className="mt-5 text-sky-500 text-p1-b underline underline-offset-2 hover:underline-offset-1 active:opacity-65">
          Cancel Booking
        </button>
      </div>
    </div>
  );
}

export default LeftViewSection;
