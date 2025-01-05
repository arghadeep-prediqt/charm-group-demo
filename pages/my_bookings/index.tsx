import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/react";
import dynamic from "next/dynamic";
import React from "react";

const BlockedTab = dynamic(
  () => import("@/components/templates/MyBookingsPage/BlockedTab")
);
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
const Container = dynamic(() => import("@/components/shared/Container"));

function MyBookings() {
  const tabCategories = [
    { name: "Upcoming", component: <UpcomingTab /> },
    { name: "Ongoing", component: <OngoingTab /> },
    { name: "Blocked", component: <BlockedTab /> },
    { name: "Completed", component: <CompletedTab /> },
    { name: "Cancelled", component: <CancelledTab /> },
  ];

  return (
    <NavContainer>
      <Container className="py-2">
        <TopBanner
          isButton={true}
          title="My Holidays"
          photo="https://common-booking-engine.gumlet.io/cmsimages/banners/all-resort-banner.jpg"
          subTitle="View your upcoming, ongoing and past holidays, modify bookings, find pre-book offers and cancellation options."
        />

        <TabGroup>
          <TabList className="flex justify-start items-end gap-4 border-b">
            {tabCategories?.map((item, id) => (
              <Tab
                key={id}
                className="px-4 py-2 text-p1-m text-gray-700 leading-relaxed text-pretty capitalize data-[selected]:border-b-[3px] border-sky-300 focus:outline-none data-[selected]:text-sky-500"
              >
                {item.name}
              </Tab>
            ))}
          </TabList>
          <TabPanels>
            {tabCategories?.map((item, id) => (
              <TabPanel key={id}>{item.component}</TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </Container>
    </NavContainer>
  );
}

export default MyBookings;
