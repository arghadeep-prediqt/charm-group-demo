import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import dynamic from "next/dynamic";
import React from "react";

const PrivilegsCard = dynamic(
  () => import("@/components/layouts/Privilegs/PrivilegsCard")
);
const PrivilegsImgCard = dynamic(
  () => import("@/components/layouts/Privilegs/PrivilegsImgCard")
);
const Container = dynamic(() => import("@/components/shared/Container"));

function PrivilegsSection() {
  const tabCategories = [
    {
      name: "horizons",
      title: "Horizons Inventory Exchange Program",
      description:
        "Exchange your room nights for a stay in 300+ hotels and resorts worldwide.",
      link: "/privilegs?section=international%20hotels",
      component: [
        {
          title: "Domestic Hotels",
          photo:
            "https://common-booking-engine.gumlet.io/cmsimages/privilege/1724847814-Domestic%20hotel%20fortune.jpg",
          link: "/privilegs?section=domestic%20hotels",
        },
        {
          title: "International Hotels",
          photo:
            "https://common-booking-engine.gumlet.io/cmsimages/privilege/International%20hotels%20koh%20lanta.jpg",
          link: "/privilegs?section=international%20hotels",
        },
      ],
    },
    {
      name: "referral program",
      title: "Club M Rewards",
      description:
        "Refer your loved ones and earn holiday benefits and exciting rewards.",
      link: "#!",
      component: [
        {
          title: "Redeem Points",
          photo:
            "https://common-booking-engine.gumlet.io/cmsimages/privilege/Iphone.jpg",
          link: "/",
        },
        {
          title: "Refer Now",
          photo:
            "https://common-booking-engine.gumlet.io/cmsimages/privilege/Size_ 321.39x353.3 px_Happy Family.jpg",
          link: "/",
        },
      ],
    },
    {
      name: "experiences",
      title: "Experiences",
      description:
        "Indulge in immersive experiences making holidays memorable.",
      link: "/privilegs?section=weekend%20gateways",
      component: [
        {
          title: "Visa Services",
          photo:
            "https://common-booking-engine.gumlet.io/cmsimages/privilege/NonMembersBanner_15Percentage.png",
          link: "/",
        },
        {
          title: "Weekend Gateway",
          photo:
            "https://common-booking-engine.gumlet.io/cmsimages/privilege/CLIENT_Beautiful%20Evening%20Villa%20View_Lonavala_%20512x608%20px.jpg",
          link: "/privilegs?section=weekend%20gateways",
        },
        {
          title: "Curated Holidays",
          photo:
            "https://common-booking-engine.gumlet.io/cmsimages/privilege/Curated%20holidays.jpg",
          link: "/privilegs?section=curated%20holidays",
        },
        {
          title: "Festive and Religious Experiences",
          photo:
            "https://common-booking-engine.gumlet.io/cmsimages/privilege/9S1A9817_rann%20utsav_%20512x608%20px.jpg",
          link: "/privilegs?section=religious%20festive",
        },
      ],
    },
  ];

  return (
    <section id="privilegs" className="bg-black mt-[5%] mb-[2%] pb-[3%]">
      <Container className="py-2">
        <div className="mt-[3%] flex justify-start items-end gap-x-[2%]">
          <h1 className="text-[46px] text-white">Privileges</h1>
          <p className="text-p1-r text-gray-300">
            Enjoy exclusive membership benefits curated just for you
          </p>
        </div>

        <TabGroup>
          <TabList className="mt-[4%] flex justify-start items-end gap-4">
            {tabCategories?.map((item, id) => (
              <Tab
                key={id}
                className="min-w-[276px] px-8 py-4 rounded-lg text-[20px] font-medium text-gray-300 leading-relaxed text-pretty capitalize bg-primary-600 data-[selected]:bg-[#f5992f]  focus:outline-none data-[selected]:text-white hover:bg-orange-400 hover:text-white active:opacity-65"
              >
                {item.name}
              </Tab>
            ))}
          </TabList>
          <TabPanels>
            {tabCategories?.map((item, id) => (
              <TabPanel
                key={id}
                className="mt-[3%] flex justify-start items-end gap-x-4 overflow-auto scrollbarX"
              >
                <PrivilegsCard
                  title={item.title}
                  description={item.description}
                  link={item.link}
                />
                {item.component?.map((card, j) => (
                  <PrivilegsImgCard
                    key={j}
                    title={card.title}
                    photo={card.photo}
                    link={card.link}
                  />
                ))}
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </Container>
    </section>
  );
}

export default PrivilegsSection;
