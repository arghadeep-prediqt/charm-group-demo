import React, { memo } from "react";
import { BlurImage } from "@/components/ui/BluerImage";
import dynamic from "next/dynamic";
import Link from "next/link";

const Container = dynamic(() => import("../Container"));
const SearchDiv = dynamic(
  () => import("@/components/layouts/NavigationBar/SearchDiv")
);
const CustomNavBtn = dynamic(
  () => import("@/components/layouts/NavigationBar/CustomNavBtn")
);
const ProfileBtn = dynamic(
  () => import("@/components/layouts/NavigationBar/ProfileBtn")
);

function NavigationBar() {
  return (
    <div className="bg-primary-700 text-white">
      <Container className="flex justify-between items-center gap-x-2">
        <Link
          href={"/"}
          className="flex justify-start items-center gap-x-2 cursor-pointer"
        >
          <BlurImage
            src={"/images/charm.png"}
            alt="logo"
            width={100}
            height={100}
            className="size-10 object-cover"
          />
          <h3 className="text-white leading-relaxed">CHARM</h3>
        </Link>
        <SearchDiv />

        <CustomNavBtn
          logo="https://img.icons8.com/external-vectorslab-glyph-vectorslab/53/ebb541/external-Calendar-Location-maps-and-navigation-vectorslab-glyph-vectorslab.png"
          title="Date & Destination"
          link="/search"
        />
        <CustomNavBtn
          logo="https://img.icons8.com/ios-glyphs/30/ebb541/marker--v1.png"
          title="Map View"
          link="/mapsearch"
        />
        <CustomNavBtn
          logo="https://img.icons8.com/ios-filled/50/ebb541/compass--v2.png"
          title="Magic Compass"
          link="/magic_compass"
        />
        <CustomNavBtn
          logo="https://img.icons8.com/glyph-neue/64/ebb541/point-objects.png"
          title="Circuit Booking"
          link="/circuitSearch"
        />

        <ProfileBtn />
      </Container>
    </div>
  );
}

export default memo(NavigationBar);
