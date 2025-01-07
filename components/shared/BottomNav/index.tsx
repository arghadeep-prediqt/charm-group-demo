import dynamic from "next/dynamic";
import Link from "next/link";
import React, { memo } from "react";

const Container = dynamic(() => import("../Container"));
// const ListDropDown = dynamic(() => import("@/components/ui/ListDropDown"));

function BottomNavBar() {
  return (
    <div className="bg-[#014f86] px-6 text-white">
      <Container className="py-2 flex justify-between items-center gap-x-12">
        {/* <ListDropDown title="resort" menuItems={resortMenuItems} /> */}
        {/* <ListDropDown title="privileges" menuItems={privilegesMenuItems} /> */}
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
        <Link href="/faqs" className="text-p1-r leading-relaxed">
          Get Help
        </Link>
      </Container>
    </div>
  );
}

export default memo(BottomNavBar);
