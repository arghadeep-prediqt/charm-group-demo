import dynamic from "next/dynamic";
import React, { memo } from "react";
import { CommonProps } from "../@types/common";

const Footer = dynamic(() => import("./Footer"));
const BottomNavBar = dynamic(() => import("@/components/shared/BottomNav"));
const NavigationBar = dynamic(
  () => import("@/components/shared/NavigationBar")
);

function NavContainer({ children }: CommonProps) {
  return (
    <React.Fragment>
      <div className="sticky top-0 z-30">
        <NavigationBar />
        <BottomNavBar />
      </div>
      {children}

      <Footer />
    </React.Fragment>
  );
}

export default memo(NavContainer);
