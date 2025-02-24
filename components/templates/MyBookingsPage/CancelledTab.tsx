import { SingleBookingHistoryProps } from "@/components/@types/resortapi";
import dynamic from "next/dynamic";
import React from "react";

const NoEvents = dynamic(() => import("./NoEvents"));
const SingleBookingStatusCard = dynamic(
  () => import("./SingleBookingStatusCard")
);

interface PageProps {
  cancelledData: SingleBookingHistoryProps[];
}

function CancelledTab({ cancelledData }: PageProps) {
  return (
    <div id="cancelled" className="relative h-full">
      <div className="absolute top-0 left-10 w-[2px] h-full bg-gray-300"></div>
      <div className="ps-[35px] py-6 relative flex justify-start items-center">
        <div className="size-3 border-2 border-red-500 bg-white rounded-full"></div>
        <h3 className="ps-6 font-medium">Cancelled</h3>
      </div>
      {cancelledData?.length !== 0 ? (
        cancelledData?.map((item, id) => (
          <div key={id} className="pt-3 pb-5">
            <SingleBookingStatusCard
              _id={item?._id}
              status={item?.status}
              title={item?.resortId?.name}
              photo={item?.resortId?.photo}
              startDate={new Date(item?.bookings?.[0]?.date).toLocaleDateString(
                "en-US",
                { day: "2-digit", month: "short", year: "numeric" }
              )}
              totalDays={item?.bookings?.length}
            />
          </div>
        ))
      ) : (
        <NoEvents title="For every cancelled plan, a better adventure awaits. Let’s craft your next getaway." />
      )}
    </div>
  );
}

export default CancelledTab;
