import dynamic from "next/dynamic";
import React from "react";

const MemberDropdown = dynamic(() => import("@/components/ui/MemberDropdown"));
const PeopleDropdown = dynamic(() => import("@/components/ui/PeopleDropdown"));
const TabCalendar = dynamic(
  () =>
    import(
      "@/components/shared/SingleResortPage/FeatureTabs/AvailablityTab/TabCalender"
    )
);

function ModifyRightView() {
  return (
    <div className="w-[70%] p-6 border border-gray-200 shadow-sm rounded-2xl">
      {/* Modify Booking Services */}
      <h3 className="pb-3 text-[22px] leading-tight capitalize border-b border-gray-400">
        Modify Booking
      </h3>

      <div className="pb-6 my-6 flex justify-between items-center gap-x-10">
        <div className="w-6/12 flex items-center justify-start gap-x-2">
          <p className="text-p2-r w-3/12">Who all are travelling</p>
          <div className="w-9/12">
            <PeopleDropdown />
          </div>
        </div>

        <div className="w-6/12 flex items-center justify-start gap-x-2">
          <p className="text-p2-r w-3/12">Person Travelling</p>
          <div className="w-9/12">
            <MemberDropdown isDisabled={true} />
          </div>
        </div>
      </div>

      <h3 className="pb-3 text-[22px] leading-tight capitalize border-b border-gray-400">
        Booking Calender
      </h3>
      <TabCalendar />
    </div>
  );
}

export default ModifyRightView;
