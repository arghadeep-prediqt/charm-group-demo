import dynamic from "next/dynamic";
import React from "react";

const ChatBot = dynamic(() => import("@/components/shared/ChatBot"));

const TopBanner = dynamic(
  () => import("@/components/templates/OurResortsPage/TopBanner")
);
const Container = dynamic(() => import("@/components/shared/Container"));
const NavContainer = dynamic(() => import("@/components/shared/NavContainer"));

function MembershipTransferPage() {
  return (
    <NavContainer>
      <TopBanner
        photo="https://images.unsplash.com/photo-1693745199505-72a44e1dbccc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Membership Transfer"
        subTitle="We're excited to help you transition your membership with ease. Let’s get started."
      />

      <Container className="py-2">
        <ChatBot />
      </Container>
    </NavContainer>
  );
}

export default MembershipTransferPage;
