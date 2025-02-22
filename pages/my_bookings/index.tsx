import ProfileContext from "@/contextAPI/ProfileContext";
import { useGetAllBookingsQuery } from "@/redux/services/resortApi";
import dynamic from "next/dynamic";
import React, { useContext, useMemo } from "react";

const CancelledTab = dynamic(
  () => import("@/components/templates/MyBookingsPage/CancelledTab")
);
const CompletedTab = dynamic(
  () => import("@/components/templates/MyBookingsPage/CompletedTab")
);
const OngoingTab = dynamic(
  () => import("@/components/templates/MyBookingsPage/OngoingTab")
);
const UpcomingTab = dynamic(
  () => import("@/components/templates/MyBookingsPage/UpcomingTab")
);
const TopBanner = dynamic(
  () => import("@/components/templates/OurResortsPage/TopBanner")
);
const NavContainer = dynamic(() => import("@/components/shared/NavContainer"));

const LeftSideNav = dynamic(
  () => import("@/components/shared/ProfilePage/LeftSideNav")
);

function MyBookings() {
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

  const cancelledData = useMemo(() => {
    if (isSuccess) {
      return data?.filter(
        (item: { status: string }) => item?.status === "CANCELLED"
      );
    }
    return [];
  }, [data, isSuccess]);

  const tabCategories = [
    {
      name: "Upcoming",
      component: <UpcomingTab upcomingData={upcommingData} />,
    },
    { name: "Ongoing", component: <OngoingTab /> },
    { name: "Completed", component: <CompletedTab /> },
    {
      name: "Cancelled",
      component: <CancelledTab cancelledData={cancelledData} />,
    },
  ];

  return (
    <NavContainer>
      <TopBanner
        photo="https://images.unsplash.com/photo-1529316275402-0462fcc4abd6?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Your Holiday Dashboard"
        subTitle="Access your upcoming, ongoing, and past holidays. Manage bookings, explore exclusive offers, or check cancellation policies with ease."
      />
      <div className="px-4 relative flex justify-start items-start">
        <div className="w-[20vw] p-4 sticky top-14">
          <LeftSideNav />
        </div>

        <div className="pe-6 pt-6 ps-12 w-[80vw]">
          {tabCategories?.map((item, id) => (
            <React.Fragment key={id}>{item.component}</React.Fragment>
          ))}
        </div>
      </div>
    </NavContainer>
  );
}

export default MyBookings;
