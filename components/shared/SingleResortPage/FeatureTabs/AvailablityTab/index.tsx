import dynamic from "next/dynamic";
import React from "react";

const TopHeading = dynamic(
  () => import("@/components/templates/SingleResortPage/TopHeading")
);
const RightSideWaitlist = dynamic(() => import("./RightSideWaitlist"));
const TabCalendar = dynamic(() => import("./TabCalender"));

interface PageProps {
  name: string;
}

function AvailablityTab({ name }: PageProps) {
  return (
    <div className="mb-[5%] flex justify-start items-start">
      <div className="w-9/12 pe-12">
        <TopHeading params={name} />
        <TabCalendar />
      </div>
      <div className="w-3/12 pt-6">
        <RightSideWaitlist name={name} />
      </div>
    </div>
  );
}

export default AvailablityTab;
