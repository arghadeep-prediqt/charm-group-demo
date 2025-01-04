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
        initialEnd={4}
        labels={["Today", "08 Jan", "23 Jan", "22 Feb", "24 Mar"]}
      />

      <div className="mt-[5%] flex gap-x-4 overflow-auto">
        <PropertyCard
          photo="https://charmresorthotram.vn/uploads/setting/672d7e7dbd8a1.jpg"
          title="Charm Resort Hồ Tràm"
          link="/our_resorts/Charm Resort Hồ Tràm"
        />
        <PropertyCard
          link="/our_resorts/Charm Resort Long Hải"
          title="Charm Resort Long Hải "
          photo="https://charm.vn/wp-content/uploads/2022/12/Charm-Resort-Long-Hai-5-1.jpeg"
        />
        <PropertyCard
          link="/our_resorts/Charm Resort Đà Lạt"
          title="Charm Resort Đà Lạt "
          photo="https://charm-group.com.vn/upload/product/files/4-Charm-Da-Lat/charm-resort-da-lat%20(1)%20(1).jpg"
        />
      </div>
    </div>
  );
}

export default Tab1;
