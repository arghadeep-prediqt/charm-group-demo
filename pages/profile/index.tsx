import ProfileCard from "@/components/templates/ProfilePage/ProfileCard";
import dynamic from "next/dynamic";
import React from "react";

const NavContainer = dynamic(() => import("@/components/shared/NavContainer"));

function ProfilePage() {
  return (
    <NavContainer>
      <div className="flex overflow-auto scrollbarY">
        <div className="w-[20vw] h-screen sticky top-0 p-6">
          <ProfileCard />
        </div>
        <div className="w-[80vw] h-screen bg-gray-50"></div>
      </div>
    </NavContainer>
  );
}

export default ProfilePage;
