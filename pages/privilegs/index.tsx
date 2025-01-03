import React, { memo } from "react";
import dynamic from "next/dynamic";

const LeftSection = dynamic(
  () => import("@/components/templates/PrivilegsPage/LeftSection")
);
const RightSection = dynamic(
  () => import("@/components/templates/PrivilegsPage/RightSection")
);
const NavContainer = dynamic(() => import("@/components/shared/NavContainer"));
const Container = dynamic(() => import("@/components/shared/Container"));

function PrivilegsPage() {
  if (typeof window !== undefined)
    return (
      <NavContainer>
        <Container className="py-2 flex justify-start items-start h-[85vh]">
          <LeftSection />
          <RightSection />
        </Container>
      </NavContainer>
    );
}

export default memo(PrivilegsPage);
