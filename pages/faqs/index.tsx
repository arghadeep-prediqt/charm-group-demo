import dynamic from "next/dynamic";
import React from "react";

const NavContainer = dynamic(() => import("@/components/shared/NavContainer"));

function FAQsPage() {
  return <NavContainer>FAQsPage</NavContainer>;
}

export default FAQsPage;
