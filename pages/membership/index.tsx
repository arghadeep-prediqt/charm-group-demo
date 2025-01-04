import dynamic from "next/dynamic";
import React from "react";

const NavContainer = dynamic(() => import("@/components/shared/NavContainer"));

function MembershipPage() {
  return <NavContainer>MembershipPage</NavContainer>;
}

export default MembershipPage;
