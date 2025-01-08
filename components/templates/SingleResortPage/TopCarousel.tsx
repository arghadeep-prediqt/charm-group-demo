import React from "react";
import { BlurImage } from "@/components/ui/BluerImage";
import { singleResortData } from "@/components/lib/rawData";

function TopCarousel() {
  return (
    <React.Fragment>
      <div className="h-[60vh] my-4 grid grid-rows-2 grid-flow-col gap-4">
        <BlurImage
          src={singleResortData?.[0] || ""}
          alt="property1"
          width={600}
          height={400}
          className="w-full h-full bg-gray-200 rounded-xl row-span-2 col-span-2"
        />
        <BlurImage
          src={singleResortData?.[1] || ""}
          alt="property1"
          width={600}
          height={400}
          className="h-full bg-gray-200 rounded-xl col-span-1"
        />{" "}
        <BlurImage
          src={singleResortData?.[2] || ""}
          alt="property1"
          width={600}
          height={400}
          className="h-full bg-gray-200 rounded-xl row-span-1 col-span-1"
        />
      </div>
    </React.Fragment>
  );
}

export default TopCarousel;
