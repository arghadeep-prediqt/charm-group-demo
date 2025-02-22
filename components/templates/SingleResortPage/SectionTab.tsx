import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Share2 } from "lucide-react";

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
  resortId: string;
  location: string;
}

function SectionTab({ name, location, resortId }: PageProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const tabCategories = [
    {
      name: "Resort Highlights",
      component: (
        <AboutTab
          name={name}
          location={location}
          setActiveIndex={setActiveIndex}
        />
      ),
    },
    {
      name: "Book Your Stay",
      component: (
        <AvailablityTab id={resortId} name={name} location={location} />
      ),
    },
  ];

  return (
    <TabGroup selectedIndex={activeIndex} onChange={(e) => setActiveIndex(e)}>
      <TabList className="mt-2 mb-4 ">
        <Container className="relative">
          <div className="w-9/12 flex justify-between items-center gap-4 pe-10">
            <div className="flex justify-start items-center gap-x-4">
              {tabCategories?.map((item, id) => (
                <Tab
                  key={id}
                  as="button"
                  className="px-2 py-2 text-p1-r text-gray-600 leading-relaxed text-pretty capitalize data-[selected]:border-b-2 border-yellow-400 focus:outline-none data-[selected]:text-p1-m"
                >
                  {item.name}
                </Tab>
              ))}
            </div>
            <button className="p-2 border-2 border-yellow-300 bg-yellow-50 rounded-full active:opacity-65">
              <Share2 className="size-5 text-yellow-500" />
            </button>
          </div>
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
