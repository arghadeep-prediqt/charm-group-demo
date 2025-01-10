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
        photo="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
