import { allResortsData } from "@/components/lib/rawData";
import dynamic from "next/dynamic";
import React from "react";

const ResortAccordian = dynamic(
  () => import("@/components/templates/OurResortsPage/ResortAccordian")
);
const FilterRow = dynamic(
  () => import("@/components/templates/OurResortsPage/FilterRow")
);
const TopBanner = dynamic(
  () => import("@/components/templates/OurResortsPage/TopBanner")
);
const NavContainer = dynamic(() => import("@/components/shared/NavContainer"));
const Container = dynamic(() => import("@/components/shared/Container"));

function OurResortsPage() {
  return (
    <NavContainer>
      <TopBanner
        photo="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2939&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Our Resorts"
        subTitle="Check out some of the hottest deals on our Resorts personalised for you."
      />
      <Container className="py-2">
        <FilterRow />
      </Container>

      <div className="py-4">
        {allResortsData?.map((item, id) => (
          <ResortAccordian key={id} isOpen={id === 0} {...item} />
        ))}
      </div>
    </NavContainer>
  );
}

export default OurResortsPage;
