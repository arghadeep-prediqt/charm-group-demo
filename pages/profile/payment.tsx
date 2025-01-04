import dynamic from "next/dynamic";
import React from "react";

const RightPaymentSection = dynamic(
  () => import("@/components/templates/PaymentPage/RightPaymentSection")
);
const LeftPaymentSection = dynamic(
  () => import("@/components/templates/PaymentPage/LeftPaymentSection")
);
const Container = dynamic(() => import("@/components/shared/Container"));
const NavContainer = dynamic(() => import("@/components/shared/NavContainer"));

function PaymentPage() {
  return (
    <NavContainer>
      <Container className="flex h-screen bg-gray-100">
        <div className="w-9/12 h-full p-3">
          <LeftPaymentSection />
        </div>
        <div className="w-3/12 h-full py-3 px-2">
          <RightPaymentSection />
        </div>
      </Container>
    </NavContainer>
  );
}

export default PaymentPage;
