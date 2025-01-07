import { BlurImage } from "@/components/ui/BluerImage";
import dynamic from "next/dynamic";
import React from "react";

const Container = dynamic(() => import("@/components/shared/Container"));

function Tab3() {
  return (
    <Container className="mt-[3%]">
      <BlurImage
        src={"/images/Payment.svg"}
        alt="bookings"
        width={400}
        height={400}
        className="w-4/12 h-full object-cover drop-shadow-md mx-auto"
      />
      <div className="py-2 w-full text-center">
        <p className="mt-5 text-[21px] font-medium">
          Great News! You have no pending payments
        </p>
        <h3 className="my-4 text-center text-amber-400 drop-shadow-sm">
          Plan ahead by making your payment in advance.
        </h3>
        <button className="py-2 px-6 text-p1-m text-amber-600 bg-amber-50 border border-amber-200 rounded-full shadow-sm active:opacity-65">
          Check Upcoming Payments
        </button>
      </div>
    </Container>
  );
}

export default Tab3;
