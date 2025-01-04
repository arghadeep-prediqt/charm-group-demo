import dynamic from "next/dynamic";
import React from "react";

const TopBanner = dynamic(
  () => import("@/components/templates/OurResortsPage/TopBanner")
);
const NavContainer = dynamic(() => import("@/components/shared/NavContainer"));
const Container = dynamic(() => import("@/components/shared/Container"));

function MyBookings() {
  return (
    <NavContainer>
      <Container className="py-2">
        <TopBanner
          photo="https://common-booking-engine.gumlet.io/cmsimages/banners/all-resort-banner.jpg"
          title="My Holidays"
          subTitle="View your upcoming, ongoing and past holidays, modify bookings, find pre-book offers and cancellation options."
        />
      </Container>
    </NavContainer>
  );
}

export default MyBookings;
