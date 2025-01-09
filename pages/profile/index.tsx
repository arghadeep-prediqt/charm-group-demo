import dynamic from "next/dynamic";
import React from "react";

const LeftProfileSection = dynamic(
  () => import("@/components/templates/ProfilePage/LeftProfileSection")
);
const LeftSideNav = dynamic(
  () => import("@/components/shared/ProfilePage/LeftSideNav")
);
const NavContainer = dynamic(() => import("@/components/shared/NavContainer"));
const TopBanner = dynamic(
  () => import("@/components/templates/OurResortsPage/TopBanner")
);

function ProfilePage() {
  return (
    <NavContainer>
      <div className="relative">
        <TopBanner
          title="My Profile"
          photo="https://images.unsplash.com/photo-1698751437831-ef3209c04fee?q=80&w=3052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          subTitle="View your upcoming, ongoing and past holidays, modify bookings, find pre-book offers and cancellation options."
        />

        <div className="flex relative justify-start items-start">
          <div className="w-[20vw] px-4 sticky top-14">
            <LeftSideNav />
          </div>

          <div className="px-6 w-[80vw]">
            <div className="p-3 rounded-xl h-full bg-white">
              <LeftProfileSection />
            </div>
          </div>
        </div>
      </div>
    </NavContainer>
  );
}

export default ProfilePage;
