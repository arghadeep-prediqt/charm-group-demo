import dynamic from "next/dynamic";
import React from "react";

const NavContainer = dynamic(() => import("@/components/shared/NavContainer"));

function UtilizationPage() {
  return <NavContainer>utilization</NavContainer>;
}

export default UtilizationPage;
