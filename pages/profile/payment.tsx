import dynamic from "next/dynamic";
import React from "react";

const NavContainer = dynamic(() => import("@/components/shared/NavContainer"));

function PaymentPage() {
  return <NavContainer></NavContainer>;
}

export default PaymentPage;
