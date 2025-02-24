import dynamic from "next/dynamic";
import React from "react";

const PropertyCard = dynamic(() => import("./PropertyCard"));

function Tab1() {
  return (
    <div className="mt-[5%] flex flex-wrap gap-x-4 overflow-auto">
      <PropertyCard
        photo="https://charmresorthotram.vn/uploads/setting/672d7e7dbd8a1.jpg"
        title="Charm Resort Hồ Tràm"
        link="/our_resorts/67bc2bfd899c4a28887dcdb4"
      />
      <PropertyCard
        link="/our_resorts/67bc2c4b899c4a28887dcdb5"
        title="Charm Resort Long Hải "
        photo="https://charm.vn/wp-content/uploads/2022/12/Charm-Resort-Long-Hai-5-1.jpeg"
      />
      <PropertyCard
        photo="https://charmresorthotram.vn/uploads/setting/672d7e7dbd8a1.jpg"
        title="Charm Diamond DĨ An"
        link="/our_resorts/67bc4c94899c4a28887dcdb7"
      />
      <PropertyCard
        link="/our_resorts/67bc2c83899c4a28887dcdb6"
        title="Charm Resort Đà Lạt "
        photo="https://charm-group.com.vn/upload/product/files/4-Charm-Da-Lat/charm-resort-da-lat%20(1)%20(1).jpg"
      />
      <PropertyCard
        link="/our_resorts/67bc2c4b899c4a28887dcdb5"
        title="Charm Resort Long Hải "
        photo="https://charm.vn/wp-content/uploads/2022/12/Charm-Resort-Long-Hai-5-1.jpeg"
      />
    </div>
  );
}

export default Tab1;
