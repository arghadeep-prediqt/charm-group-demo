import { BlurImage } from "@/components/ui/BluerImage";
import React from "react";

interface PageProps {
  title: string;
  subTitle?: string;
  photo: string;
}

function TopBanner({ photo, title, subTitle }: PageProps) {
  return (
    <div className="relative my-6">
      <BlurImage
        src={photo}
        alt="background"
        width={1800}
        height={900}
        className="w-full h-[360px] object-cover rounded-2xl -z-10"
      />
      <div className="py-4 px-[5%] absolute w-full h-full  top-0 left-0 bg-gradient-to-r from-black/60 to-black/20 z-10 rounded-2xl flex flex-col justify-center items-start">
        <h1 className="text-white text-[40px] font-medium leading-relaxed">
          {title}
        </h1>
        <p className="mt-1 text-white text-[21px]">{subTitle}</p>
      </div>
    </div>
  );
}

export default TopBanner;
