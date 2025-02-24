import { SingleBookingHistoryProps } from "@/components/@types/resortapi";
import dynamic from "next/dynamic";
import React from "react";

const NoEvents = dynamic(() => import("./NoEvents"));
const SingleBookingStatusCard = dynamic(
  () => import("./SingleBookingStatusCard")
);

interface PageProps {
  upcomingData: SingleBookingHistoryProps[];
}

function UpcomingTab({ upcomingData }: PageProps) {
  // console.log(data, isSuccess);
  return (
    <div id="upcoming" className="relative h-full">
      <div className="absolute top-0 left-10 w-[2px] h-full bg-gray-300"></div>
      <div className="ps-[35px] py-6 relative flex justify-start items-center">
        <div className="size-3 bg-emerald-400 rounded-full"></div>
        <h3 className="ps-6 font-medium">Upcoming</h3>
      </div>

      {upcomingData?.length !== 0 ? (
        upcomingData?.map((item, id) => (
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
        <NoEvents title="Start exploring and book your next vacation today!" />
      )}
    </div>
  );
}

export default UpcomingTab;
