import { BlurImage } from "@/components/ui/BluerImage";
import dynamic from "next/dynamic";
import React from "react";

const Container = dynamic(() => import("@/components/shared/Container"));

function Tab2() {
  return (
    <Container className="mt-[3%]">
      <BlurImage
        src={"/images/no_bookings.svg"}
        alt="bookings"
        width={400}
        height={400}
        className="w-6/12 h-full object-cover drop-shadow-md mx-auto"
      />
      <div className="pt-2 w-full text-center">
        <p className="text-[21px] font-medium leading-relaxed">
          No trips planned yet.
        </p>
        <h3 className="text-center text-amber-400 drop-shadow-sm leading-relaxed">
          Start exploring and book your next vacation today!
        </h3>
        <button className="mt-4 py-2 px-6 text-p1-m text-amber-600 bg-amber-50 border border-amber-200 rounded-full shadow-sm active:opacity-65">
          Browse Resorts
        </button>
      </div>
    </Container>
  );
}

export default Tab2;
