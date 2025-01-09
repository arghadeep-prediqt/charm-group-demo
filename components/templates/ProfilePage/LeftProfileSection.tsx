import InformationSection from "@/components/shared/UserProfile/InformationSection";
import dynamic from "next/dynamic";
import React from "react";

const ConnectedAppSection = dynamic(
  () => import("@/components/shared/UserProfile/ConnectedAppSection")
);

const SigninMethod = dynamic(
  () => import("@/components/shared/UserProfile/SigninMethod")
);

function LeftProfileSection() {
  return (
    <>
      <InformationSection />
      <SigninMethod />
      <ConnectedAppSection />
    </>
  );
}

export default LeftProfileSection;
