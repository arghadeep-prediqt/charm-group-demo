import React from "react";
import dynamic from "next/dynamic";
import RefferalSection from "@/components/templates/Home/RefferalSection";

const ChatBot = dynamic(() => import("@/components/shared/ChatBot"));
const ExperienceSection = dynamic(
  () => import("@/components/templates/Home/ExperienceSection")
);
const TravelDiaries = dynamic(
  () => import("@/components/templates/Home/TravelDiaries")
);
const PrivilegsSection = dynamic(
  () => import("@/components/templates/Home/PrivilegsSection")
);
const Resorts = dynamic(() => import("@/components/templates/Home/Resorts"));
const HeroSection = dynamic(
  () => import("@/components/templates/Home/HeroSection")
);
const FirstHeroSection = dynamic(
  () => import("@/components/templates/Home/FirstHeroSection")
);
const NavContainer = dynamic(() => import("@/components/shared/NavContainer"));

function HomePage() {
  return (
    <NavContainer>
      <FirstHeroSection />
      <PrivilegsSection />

      <HeroSection />
      <Resorts />
      <TravelDiaries />
      <RefferalSection />

      <ExperienceSection />

      <ChatBot />
    </NavContainer>
  );
}

export default HomePage;
