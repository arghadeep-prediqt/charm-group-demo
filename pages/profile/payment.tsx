import dynamic from "next/dynamic";
import React from "react";

const RightPaymentSection = dynamic(
  () => import("@/components/templates/PaymentPage/RightPaymentSection")
);
const LeftPaymentSection = dynamic(
  () => import("@/components/templates/PaymentPage/LeftPaymentSection")
);
const LeftSideNav = dynamic(
  () => import("@/components/shared/ProfilePage/LeftSideNav")
);
const TopBanner = dynamic(
  () => import("@/components/templates/OurResortsPage/TopBanner")
);
const NavContainer = dynamic(() => import("@/components/shared/NavContainer"));

function PaymentPage() {
  return (
    <NavContainer>
      <TopBanner
        title="Payment Details"
        photo="https://common-booking-engine.gumlet.io/cmsimages/banners/all-resort-banner.jpg"
        subTitle="View your upcoming, ongoing and past holidays, modify bookings, find pre-book offers and cancellation options."
      />

      <div
        id="payment"
        className="px-4 relative flex justify-start items-start"
      >
        <div className="w-[20vw] p-4 sticky top-14">
          <LeftSideNav />
        </div>
        <div className="ps-12 w-[80vw] flex justify-start items-start">
          <div className="w-9/12 h-full p-3">
            <LeftPaymentSection />
          </div>
          <div className="w-3/12 h-full py-3 px-2">
            <RightPaymentSection />
          </div>
        </div>
      </div>
    </NavContainer>
  );
}

export default PaymentPage;
