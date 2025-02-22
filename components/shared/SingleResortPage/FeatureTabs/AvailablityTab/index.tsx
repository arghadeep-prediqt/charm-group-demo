import ProfileContext from "@/contextAPI/ProfileContext";
import dynamic from "next/dynamic";
import React, { useContext } from "react";

const TopHeading = dynamic(
  () => import("@/components/templates/SingleResortPage/TopHeading")
);
const RightSideWaitlist = dynamic(() => import("./RightSideWaitlist"));
const TabCalendar = dynamic(() => import("./TabCalender"));

interface PageProps {
  id: string;
  name: string;
  location: string;
}

function AvailablityTab({ id, name, location }: PageProps) {
  const { cookieToken } = useContext(ProfileContext);

  return (
    <div className="mb-[5%] flex justify-start items-start">
      <div className="w-9/12 pe-12">
        <TopHeading params={name} location={location} />
        <TabCalendar resort_id={id} token={cookieToken} />
      </div>
      <div className="w-3/12 pt-6">
        <RightSideWaitlist
          name={name}
          location={location}
          resort_id={id}
          token={cookieToken}
        />
      </div>
    </div>
  );
}

export default AvailablityTab;
