import { CurrentSectionProps } from "@/components/@types/pages";
import { BlurImage } from "@/components/ui/BluerImage";
import React from "react";

interface PageProps {
  currentImage: CurrentSectionProps;
}

function LeftSection({ currentImage }: PageProps) {
  return (
    <div className="w-[40%] h-full relative">
      <BlurImage
        src={currentImage?.image || "/images/map.png"}
        alt={currentImage?.name || "hero"}
        width={600}
        height={900}
        className="w-full h-full object-cover"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10 flex justify-center items-center">
        <h1 className="w-8/12 text-[42px] text-white font-medium text-center leading-normal capitalize">
          {currentImage?.name || ""}
        </h1>
      </div>
    </div>
  );
}

export default LeftSection;
