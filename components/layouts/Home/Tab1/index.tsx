import dynamic from "next/dynamic";
import React from "react";

const RangeSlider = dynamic(() => import("@/components/ui/RangeSlider"));
const PropertyCard = dynamic(() => import("./PropertyCard"));

function Tab1() {
  return (
    <div className="mt-[5%]">
      <RangeSlider
        min={0}
        max={4}
        step={1}
        initialStart={0}
        initialEnd={1}
        labels={["Today", "08 Jan", "23 Jan", "22 Feb", "24 Mar"]}
      />

      <div className="mt-[5%] flex gap-x-4 overflow-auto">
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>
    </div>
  );
}

export default Tab1;
