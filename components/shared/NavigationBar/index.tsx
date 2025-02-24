import React, { memo } from "react";
import { BlurImage } from "@/components/ui/BluerImage";
import dynamic from "next/dynamic";
import Link from "next/link";

import ListDropDown from "@/components/ui/ListDropDown";
import {
  itineraryMenuItems,
  ourResortMenuItems,
  privilegesMenuItems,
} from "@/components/lib/rawData";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/router";
const Container = dynamic(() => import("../Container"));
const CustomNavBtn = dynamic(
  () => import("@/components/layouts/NavigationBar/CustomNavBtn")
);
const ProfileBtn = dynamic(
  () => import("@/components/layouts/NavigationBar/ProfileBtn")
);

function NavigationBar() {
  const router = useRouter();
  const isAuth = useAppSelector((state) => state.user.is_auth);

  return (
    <div className="bg-[#003049]">
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

        <div className="flex items-center justify-end gap-x-6 my-2">
          <ListDropDown
            logo="https://img.icons8.com/ios-filled/100/ffea00/sun-lounger.png"
            title="Our Resorts"
            menuItems={ourResortMenuItems}
          />
          <ListDropDown
            logo="https://img.icons8.com/ios-filled/100/ffea00/crown.png"
            title="Exclusive Privileges"
            menuItems={privilegesMenuItems}
          />
          <ListDropDown
            logo="https://img.icons8.com/ios-filled/100/ffea00/path.png"
            title="My Itinerary"
            menuItems={itineraryMenuItems}
          />

          <CustomNavBtn
            logo="https://img.icons8.com/ios-filled/100/ffea00/ask-question--v1.png"
            title="need assistance?"
            link="/faqs"
          />
          {isAuth ? (
            <ProfileBtn />
          ) : (
            <button
              onClick={() => router.push("/auth")}
              className="bg-yellow-300 px-4 py-1 rounded-md text-p1-m text-slate-700 hover:bg-amber-300 active:bg-amber-200"
            >
              Login
            </button>
          )}
        </div>
      </Container>
    </div>
  );
}

export default memo(NavigationBar);
