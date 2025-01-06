import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import dynamic from "next/dynamic";

const Tab1 = dynamic(() => import("@/components/layouts/Home/Tab1"));
const Tab2 = dynamic(() => import("@/components/layouts/Home/Tab2"));
const Tab3 = dynamic(() => import("@/components/layouts/Home/Tab3"));

function TabSection() {
  const tabCategories = [
    { name: "Recommendations", component: <Tab1 /> },
    { name: "upcoming bookings", component: <Tab2 /> },
    { name: "payment status", component: <Tab3 /> },
  ];
  return (
    <TabGroup>
      <TabList className="flex justify-between items-end gap-4 border-b bg-gray-100 border border-300 rounded-full p-2">
        {tabCategories?.map((item, id) => (
          <Tab
            key={id}
            className="px-[3%] py-2 text-p1-m  leading-relaxed text-pretty capitalize data-[selected]:text-sky-700 data-[selected]:bg-sky-100 data-[selected]:border border-sky-300 rounded-full focus:outline-none"
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
  );
}

export default TabSection;
