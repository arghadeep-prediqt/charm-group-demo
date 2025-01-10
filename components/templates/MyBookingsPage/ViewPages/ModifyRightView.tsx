import dynamic from "next/dynamic";
import { useRouter } from "next/router";
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
  const route = useRouter();

  return (
    <div className="w-[70%] p-6 bg-white rounded-2xl">
      {/* Modify Booking Services */}
      <div className="mt-6 mb-3 flex justify-between items-center">
        <h4 className="leading-relaxed">Modify Booking</h4>
        <button
          onClick={() => route.push("/my_bookings")}
          className="text-p2-m text-amber-600 underline-offset-2 hover:underline"
        >
          Back to My Stays
        </button>
      </div>

      <div className="border-b border-gray-300 pb-6 mb-6 flex justify-between items-center gap-x-10">
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

      <TabCalendar />
    </div>
  );
}

export default ModifyRightView;
