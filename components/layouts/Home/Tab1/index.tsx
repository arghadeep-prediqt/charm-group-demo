import dynamic from "next/dynamic";
import React from "react";

const PropertyCard = dynamic(() => import("./PropertyCard"));

function Tab1() {
  return (
    <div className="mt-[5%] flex flex-wrap gap-x-4 overflow-auto">
      <PropertyCard
        photo="https://charmresorthotram.vn/uploads/setting/672d7e7dbd8a1.jpg"
        title="Charm Resort Hồ Tràm"
        link="/our_resorts/67a1d14ce051bfada7f48b7f"
      />
      <PropertyCard
        link="/our_resorts/67a1d14ce051bfada7f48b7f"
        title="Charm Resort Long Hải "
        photo="https://charm.vn/wp-content/uploads/2022/12/Charm-Resort-Long-Hai-5-1.jpeg"
      />
      <PropertyCard
        link="/our_resorts/67a1d14ce051bfada7f48b7f"
        title="Charm Resort Đà Lạt "
        photo="https://charm-group.com.vn/upload/product/files/4-Charm-Da-Lat/charm-resort-da-lat%20(1)%20(1).jpg"
      />
      <PropertyCard
        photo="https://charmresorthotram.vn/uploads/setting/672d7e7dbd8a1.jpg"
        title="Charm Resort Hồ Tràm"
        link="/our_resorts/67a1d14ce051bfada7f48b7f"
      />
      <PropertyCard
        link="/our_resorts/67a1d14ce051bfada7f48b7f"
        title="Charm Resort Long Hải "
        photo="https://charm.vn/wp-content/uploads/2022/12/Charm-Resort-Long-Hai-5-1.jpeg"
      />
    </div>
  );
}

export default Tab1;
