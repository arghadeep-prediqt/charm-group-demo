import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React from "react";

const SectionTab = dynamic(
  () => import("@/components/templates/SingleResortPage/SectionTab")
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
      <Container className="py-2">
        <TopCarousel />
      </Container>

      <SectionTab name={String(params)} />
    </NavContainer>
  );
}

export default SingleResortPage;
