import { offerCardData } from "@/components/lib/rawData";
import dynamic from "next/dynamic";
import React from "react";

const OfferCard = dynamic(
  () => import("@/components/shared/SingleResortPage/HolidaysOffer/OfferCard")
);
const FilterRow = dynamic(
  () => import("@/components/templates/OurResortsPage/FilterRow")
);
const TopBanner = dynamic(
  () => import("@/components/templates/OurResortsPage/TopBanner")
);
const NavContainer = dynamic(() => import("@/components/shared/NavContainer"));
const Container = dynamic(() => import("@/components/shared/Container"));

function OfferPage() {
  return (
    <NavContainer>
      <TopBanner
        photo="https://holidays.clubmahindra.com/images/Mask%20Group%20400.png"
        title="My Offers"
        subTitle="Check out some of the hottest deals on our Resorts personalised for you"
      />
      <Container className="py-2">
        <FilterRow />

        <div className="pb-6 flex flex-wrap justify-start items-start gap-6">
          {offerCardData?.map((item, id) => (
            <div key={id} className="w-[48%]">
              <OfferCard
                link={`/our_resorts/Charm%20Resort%20Hồ%20Tràm`}
                offerid={item.offerid}
                vaild={item.valid}
                photo={item.photo}
              />
            </div>
          ))}
        </div>
      </Container>
    </NavContainer>
  );
}

export default OfferPage;
