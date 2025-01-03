import dynamic from "next/dynamic";
import React from "react";

const TopBanner = dynamic(
  () => import("@/components/templates/OurResortsPage/TopBanner")
);
const NavContainer = dynamic(() => import("@/components/shared/NavContainer"));
const Container = dynamic(() => import("@/components/shared/Container"));

function OfferPage() {
  return (
    <NavContainer>
      <Container className="py-2">
        <TopBanner />
        {/* <FilterRow /> */}
      </Container>

      {/* <div className="py-4">
        {allResortsData?.map((item, id) => (
          <ResortAccordian key={id} isOpen={id === 0} {...item} />
        ))}
      </div> */}
    </NavContainer>
  );
}

export default OfferPage;
