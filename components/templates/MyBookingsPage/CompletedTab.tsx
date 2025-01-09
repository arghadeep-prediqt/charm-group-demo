import dynamic from "next/dynamic";
import React from "react";

const NoEvents = dynamic(() => import("./NoEvents"));

function CompletedTab() {
  return (
    <div id="completed" className="relative h-full">
      <div className="absolute top-0 left-10 w-[2px] h-full bg-gray-300"></div>
      <div className="ps-[35px] py-6 relative flex justify-start items-center">
        <div className="size-3 border-2 border-gray-500 bg-white rounded-full"></div>
        <h3 className="ps-6 font-medium">Completed</h3>
      </div>

      <NoEvents title="Thank you for traveling with us! Relive your cherished memories and start planning your next adventure." />
    </div>
  );
}

export default CompletedTab;
