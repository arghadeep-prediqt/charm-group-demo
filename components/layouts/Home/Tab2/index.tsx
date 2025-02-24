import { BlurImage } from "@/components/ui/BluerImage";
import ProfileContext from "@/contextAPI/ProfileContext";
import { useGetAllBookingsQuery } from "@/redux/services/resortApi";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useContext, useMemo } from "react";

const Container = dynamic(() => import("@/components/shared/Container"));
const UpcomingTab = dynamic(
  () => import("@/components/templates/MyBookingsPage/UpcomingTab")
);

function Tab2() {
  const { cookieToken } = useContext(ProfileContext);
  const { data, isSuccess } = useGetAllBookingsQuery({ token: cookieToken });

  const upcommingData = useMemo(() => {
    if (isSuccess) {
      return data?.filter(
        (item: { status: string }) => item?.status === "CONFIRMED"
      );
    }
    return [];
  }, [data, isSuccess]);

  return (
    <React.Fragment>
      {isSuccess && upcommingData?.length !== 0 ? (
        <Container>
          <UpcomingTab upcomingData={upcommingData} />
        </Container>
      ) : (
        <NoPlanndedTrip />
      )}
    </React.Fragment>
  );
}

export default Tab2;

export function NoPlanndedTrip() {
  const router = useRouter();

  return (
    <Container className="mt-[5%]">
      <BlurImage
        src={"/images/no_bookings.svg"}
        alt="bookings"
        width={400}
        height={400}
        className="w-6/12 h-full object-cover drop-shadow-md mx-auto"
      />
      <div className="pt-2 w-full text-center">
        <p className="text-[21px] font-medium leading-relaxed">
          No trips planned yet.
        </p>
        <h3 className="text-center text-amber-400 drop-shadow-sm leading-relaxed">
          Start exploring and book your next vacation today!
        </h3>
        <button
          onClick={() => router.push("/our_resorts")}
          className="mt-4 py-2 px-6 text-p1-m text-amber-600 bg-amber-50 border border-amber-200 rounded-full shadow-sm active:opacity-65"
        >
          Browse Resorts
        </button>
      </div>
    </Container>
  );
}
