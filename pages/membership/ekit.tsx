import { BlurImage } from "@/components/ui/BluerImage";
import dynamic from "next/dynamic";
import React from "react";

const NavContainer = dynamic(() => import("@/components/shared/NavContainer"));

function MembershipEkitPage() {
  return (
    <NavContainer>
      <BlurImage
        src="/member/membership_ekit.png"
        alt="transfer"
        width={1400}
        height={900}
        className="pb-4 w-full h-full object-contain"
      />
    </NavContainer>
  );
}

export default MembershipEkitPage;
