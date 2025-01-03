import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React from "react";

const RefferalSection = dynamic(
  () => import("@/components/templates/Home/RefferalSection")
);
const SectionTab = dynamic(
  () => import("@/components/templates/SingleResortPage/SectionTab")
);
const TopHeading = dynamic(
  () => import("@/components/templates/SingleResortPage/TopHeading")
);
const Container = dynamic(() => import("@/components/shared/Container"));
const TopCarousel = dynamic(
  () => import("@/components/templates/SingleResortPage/TopCarousel")
);
const NavContainer = dynamic(() => import("@/components/shared/NavContainer"));

function SingleResortPage() {
  const router = useRouter();
  const params = router?.query?.single_resort;

  return (
    <NavContainer>
      <TopCarousel />
      <Container className="py-2">
        <TopHeading params={String(params)} />
      </Container>

      <SectionTab name={String(params)} />

      <RefferalSection />
    </NavContainer>
  );
}

export default SingleResortPage;
