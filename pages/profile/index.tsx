import dynamic from "next/dynamic";
import React from "react";

const LeftProfileSection = dynamic(
  () => import("@/components/templates/ProfilePage/LeftProfileSection")
);
const RightProfileSection = dynamic(
  () => import("@/components/templates/ProfilePage/RightProfileSection")
);
const LeftAccordian = dynamic(
  () => import("@/components/shared/ProfilePage/LeftAccordian")
);
const ProfileCard = dynamic(
  () => import("@/components/templates/ProfilePage/ProfileCard")
);
const NavContainer = dynamic(() => import("@/components/shared/NavContainer"));

function ProfilePage() {
  return (
    <NavContainer>
      <div className="flex overflow-auto scrollbarY">
        <div className="w-[20vw] h-[85vh] sticky top-0 p-6">
          <ProfileCard />
          <LeftAccordian />
        </div>

        <div className="p-6 w-[80vw] h-[85vh] bg-gray-50">
          <div className="p-3 rounded-xl h-full bg-white flex justify-start items-start divide-x-2">
            <div className="w-8/12 h-full ">
              <LeftProfileSection />
            </div>
            <div className="w-4/12 h-full ">
              <RightProfileSection />
            </div>
          </div>
        </div>
      </div>
    </NavContainer>
  );
}

export default ProfilePage;
