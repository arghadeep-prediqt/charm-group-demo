import { BlurImage } from "@/components/ui/BluerImage";
import dynamic from "next/dynamic";
import React from "react";

const BottomSection = dynamic(() => import("./BottomSection"));

function Tab2() {
  return (
    <div className="mt-[5%]">
      <BlurImage
        src={"https://holidays.clubmahindra.com/images/member/upcoming.svg"}
        alt="bookings"
        width={400}
        height={400}
        className="w-[480px] h-full object-cover mx-auto"
      />

      <BottomSection />
    </div>
  );
}

export default Tab2;
