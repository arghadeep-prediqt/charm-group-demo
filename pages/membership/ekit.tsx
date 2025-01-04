import dynamic from "next/dynamic";
import React from "react";

const NavContainer = dynamic(() => import("@/components/shared/NavContainer"));

function MembershipEkitPage() {
  return <NavContainer>MembershipEkitPage</NavContainer>;
}

export default MembershipEkitPage;
