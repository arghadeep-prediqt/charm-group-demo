import React from "react";
import dynamic from "next/dynamic";

const PricingTable = dynamic(
  () => import("@/components/templates/MembershipPage/PriceTable")
);
const TopBanner = dynamic(
  () => import("@/components/templates/OurResortsPage/TopBanner")
);
const LeftSideNav = dynamic(
  () => import("@/components/shared/ProfilePage/LeftSideNav")
);
const NavContainer = dynamic(() => import("@/components/shared/NavContainer"));

function MembershipPage() {
  return (
    <NavContainer>
      <TopBanner
        title="Ownership Upgrade"
        photo="https://common-booking-engine.gumlet.io/cmsimages/banners/all-resort-banner.jpg"
        subTitle="View your upcoming, ongoing and past holidays, modify bookings, find pre-book offers and cancellation options."
      />
      <div
        id="upgrade"
        className="px-4 mb-12 relative flex justify-start items-start"
      >
        <div className="w-[20vw] p-4 sticky top-14">
          <LeftSideNav />
        </div>
        <div className="ps-12 w-[80vw]">
          <section className="mt-5 p-8 bg-gray-50 shadow-sm border border-gray-200 rounded-xl">
            <PricingTable />
          </section>
        </div>
      </div>
    </NavContainer>
  );
}

export default MembershipPage;
