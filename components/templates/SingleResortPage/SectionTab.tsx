import React from "react";
import dynamic from "next/dynamic";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

const FloaterChecker = dynamic(() => import("./FloaterChecker"));
const AboutTab = dynamic(
  () => import("@/components/shared/SingleResortPage/FeatureTabs/AboutTab")
);
const AvailablityTab = dynamic(
  () =>
    import("@/components/shared/SingleResortPage/FeatureTabs/AvailablityTab")
);
const Container = dynamic(() => import("@/components/shared/Container"));

interface PageProps {
  name: string;
}

function SectionTab({ name }: PageProps) {
  const tabCategories = [
    { name: "about the resort", component: <AboutTab name={name} /> },
    { name: "check availablity", component: <AvailablityTab name={name} /> },
  ];

  return (
    <TabGroup>
      <TabList className="mt-2 mb-4 border-y-2 border-gray-200">
        <Container className="relative flex justify-start items-end gap-4">
          {tabCategories?.map((item, id) => (
            <Tab
              key={id}
              as="button"
              className="px-[3%] py-4 text-p1-r text-gray-600 leading-relaxed text-pretty capitalize data-[selected]:border-b-4 border-sky-300 focus:outline-none data-[selected]:text-sky-500 data-[selected]:text-p1-b"
            >
              {item.name}
            </Tab>
          ))}
          <FloaterChecker name={name} />
        </Container>
      </TabList>
      <TabPanels>
        <Container>
          {tabCategories?.map((item, id) => (
            <TabPanel key={id} as="div">
              {item.component}
            </TabPanel>
          ))}
        </Container>
      </TabPanels>
    </TabGroup>
  );
}

export default SectionTab;
