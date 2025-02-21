import dynamic from "next/dynamic";
import React from "react";

const InformationSection = dynamic(
  () => import("@/components/shared/UserProfile/InformationSection")
);
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
