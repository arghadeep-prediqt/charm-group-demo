import dynamic from "next/dynamic";
import React from "react";

const NoEvents = dynamic(() => import("./NoEvents"));

function OngoingTab() {
  return (
    <div className="relative h-full">
      <div className="absolute top-0 left-10 w-[2px] h-full bg-gray-300"></div>
      <div className="ps-[35px] py-6 relative flex justify-start items-center">
        <div className="size-3 bg-emerald-400 rounded-full"></div>
        <h3 className="ps-6 font-medium">Ongoing Holidays</h3>
      </div>

      <NoEvents />
    </div>
  );
}

export default OngoingTab;
