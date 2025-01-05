import { MenuItemProps } from "@/components/@types/common";
import { BlurImage } from "@/components/ui/BluerImage";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, { memo } from "react";

const Container = dynamic(() => import("../Container"));
const ListDropDown = dynamic(() => import("@/components/ui/ListDropDown"));

function BottomNavBar() {
  const resortMenuItems: MenuItemProps[] = [
    {
      title: "horizon",
      icon: "https://img.icons8.com/ios/100/ff9900/astronomical-twilight.png",
      link: "/#privilegs",
    },
    {
      title: "our resorts",
      icon: "https://img.icons8.com/ios/100/ff9900/sunbathe.png",
      link: "/our_resorts",
    },
  ];

  const privilegesMenuItems: MenuItemProps[] = [
    {
      title: "Relegious Festive",
      icon: "https://img.icons8.com/ios/100/ff9900/festival.png",
      link: "/privilegs?section=religious%20festive",
    },
    {
      title: "curated holidays",
      icon: "https://img.icons8.com/ios/100/ff9900/sunbathe.png",
      link: "/privilegs?section=curated%20holidays",
    },
    {
      title: "weekend gateways",
      icon: "https://img.icons8.com/ios/100/ff9900/car--v1.png",
      link: "/privilegs?section=weekend%20gateways",
    },
  ];
  return (
    <div className="bg-primary-600 text-white">
      <Container className="py-2 flex justify-center items-center gap-x-12">
        <ListDropDown title="resort" menuItems={resortMenuItems} />
        <ListDropDown title="privileges" menuItems={privilegesMenuItems} />
        <Link
          href="https://www.clubmahindra.com/refer-a-friend/user/dashboard"
          target="_blank"
          className="text-p1-r leading-relaxed"
        >
          Referral Program{" "}
          <span className="text-p2-m animate-pulse text-[#ebb541]">★New</span>
        </Link>
        <Link href="/membership" className="text-p1-r leading-relaxed">
          Membership Upgrade
        </Link>
        <Link href="/my_bookings" className="text-p1-r leading-relaxed">
          My Holidays
        </Link>

        <div className="border-l border-gray-300 ps-10 flex justify-start items-center gap-x-3">
          <BlurImage
            src={"https://img.icons8.com/material-outlined/96/ebb541/help.png"}
            alt="help me"
            width={100}
            height={100}
            className="size-5 object-cover"
          />
          <Link href="/profile" className="text-p1-r leading-relaxed">
            Get Help
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default memo(BottomNavBar);
