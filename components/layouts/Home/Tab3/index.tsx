import { BlurImage } from "@/components/ui/BluerImage";
import dynamic from "next/dynamic";
import React from "react";

const BottomSection = dynamic(() => import("./BottomSection"));

function Tab3() {
  return (
    <div className="mt-[5%]">
      <BlurImage
        src={"https://holidays.clubmahindra.com/images/member/booking.svg"}
        alt="bookings"
        width={400}
        height={400}
        className="w-[400px] h-full object-cover mx-auto"
      />

      <BottomSection />
    </div>
  );
}

export default Tab3;
