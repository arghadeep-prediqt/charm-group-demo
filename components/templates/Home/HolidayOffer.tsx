import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React from "react";

const OfferCard = dynamic(
  () => import("@/components/shared/SingleResortPage/HolidaysOffer/OfferCard")
);
const Container = dynamic(() => import("@/components/shared/Container"));

function HolidayOffer() {
  const router = useRouter();

  return (
    <Container className="mt-[5%] my-[2%] py-2">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div className="w-10/12">
          <h1 className="text-[40px] leading-relaxed">Your Holiday Offers</h1>
          <p className="text-[18px] text-gray-700">
            Check out the offers that will make your holiday even better
          </p>
        </div>
        <div className="w-2/12 flex justify-end">
          <button
            onClick={() => router.push("/offer")}
            className="text-amber-600 text-[18px] font-semibold capitalize hover:underline hover:underline-offset-2"
          >
            view all
          </button>
        </div>
      </div>
      <div className="w-6/12">
        <OfferCard
          link="/our_resorts/club%20mahindra%20mussoorie%20resort"
          offerid="3960451"
          vaild="04 Dec 2025"
          photo="https://charm.vn/wp-content/uploads/2022/12/Charm-Resort-Ho-Tram-1.jpg"
        />
      </div>
    </Container>
  );
}

export default HolidayOffer;
