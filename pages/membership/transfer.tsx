import { BlurImage } from "@/components/ui/BluerImage";
import dynamic from "next/dynamic";
import React from "react";

const Container = dynamic(() => import("@/components/shared/Container"));
const NavContainer = dynamic(() => import("@/components/shared/NavContainer"));

function MembershipTransferPage() {
  return (
    <NavContainer>
      <BlurImage
        src="/member/transfer_membership.png"
        alt="transfer"
        width={1400}
        height={900}
        className="pb-4 w-full h-full object-contain"
      />
      <Container className="py-2">
        <div className="mb-3 ps-10">
          <button className="bg-yellow-400 py-2 px-8 rounded-lg text-p1-m active:opacity-65">
            Confirm
          </button>
        </div>
      </Container>
    </NavContainer>
  );
}

export default MembershipTransferPage;
