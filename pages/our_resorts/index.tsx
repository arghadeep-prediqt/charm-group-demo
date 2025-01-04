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
      <Container className="py-2">
        <TopBanner
          photo="https://holidays.clubmahindra.com/cmsimages/banners/Our Resort - Meember Site.jpg"
          title="My Offers"
          subTitle="Check out some of the hottest deals on our Resorts personalised for you."
        />
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
