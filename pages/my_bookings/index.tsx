import dynamic from "next/dynamic";
import React from "react";

const NavContainer = dynamic(() => import("@/components/shared/NavContainer"));

function MyBookings() {
  return <NavContainer>MyBookings</NavContainer>;
}

export default MyBookings;
