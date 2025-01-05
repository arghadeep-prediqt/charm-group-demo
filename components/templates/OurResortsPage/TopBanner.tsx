import { BlurImage } from "@/components/ui/BluerImage";
import React from "react";

interface PageProps {
  title: string;
  subTitle?: string;
  photo: string;
  isButton?: boolean;
}

function TopBanner({ photo, title, subTitle, isButton = false }: PageProps) {
  return (
    <div className="relative my-6">
      <BlurImage
        src={photo}
        alt="background"
        width={1800}
        height={900}
        className="w-full h-[360px] object-cover rounded-2xl -z-10"
      />
      <div
        className={`pb-4 px-[5%] ${
          isButton ? "pt-14" : "pt-4"
        } absolute w-full h-full  top-0 left-0 bg-gradient-to-r from-black/60 to-black/20 z-10 rounded-2xl flex flex-col justify-center items-start`}
      >
        <h1 className="text-white text-[40px] font-medium leading-relaxed">
          {title}
        </h1>
        <p className="mt-1 text-white text-[18px] w-6/12 leading-relaxed">
          {subTitle}
        </p>

        {isButton && (
          <p className="bg-[#b0d23db3] mt-[6%] leading-relaxed px-6 py-2 rounded-lg text-[23px] font-medium text-white">
            0 Days Available
          </p>
        )}
      </div>
    </div>
  );
}

export default TopBanner;
