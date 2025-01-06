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
            "https://images.unsplash.com/photo-1630809718582-2bc0a1b7b296?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          link: "/privilegs?section=domestic%20hotels",
        },
        {
          title: "International Hotels",
          photo:
            "https://images.unsplash.com/photo-1601972888880-3ad2df3ee0a0?q=80&w=2108&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          link: "/privilegs?section=international%20hotels",
        },
      ],
    },
    {
      name: "referral program",
      title: "Charm Group Rewards",
      description:
        "Refer your loved ones and earn holiday benefits and exciting rewards.",
      link: "#!",
      component: [
        {
          title: "Redeem Points",
          photo:
            "https://common-booking-engine.gumlet.io/cmsimages/privilege/Iphone.jpg",
          link: "https://www.clubmahindra.com/refer-a-friend/user/dashboard",
        },
        {
          title: "Refer Now",
          photo:
            "https://common-booking-engine.gumlet.io/cmsimages/privilege/Size_ 321.39x353.3 px_Happy Family.jpg",
          link: "https://www.clubmahindra.com/refer-a-friend/user/dashboard",
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
          link: "https://www.visa.co.in",
        },
        {
          title: "Weekend Gateway",
          photo:
            "https://images.unsplash.com/photo-1504457047772-27faf1c00561?q=80&w=2147&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          link: "/privilegs?section=weekend%20gateways",
        },
        {
          title: "Curated Holidays",
          photo:
            "https://images.unsplash.com/photo-1522034477175-d97f456a4873?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          link: "/privilegs?section=curated%20holidays",
        },
        {
          title: "Festive and Religious Experiences",
          photo:
            "https://images.unsplash.com/photo-1526139334526-f591a54b477c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          link: "/privilegs?section=religious%20festive",
        },
      ],
    },
  ];

  return (
    <section id="privilegs" className="bg-orange-100 mt-[5%] mb-[2%] pb-[3%]">
      <Container className="py-2">
        <div className="mt-[3%] flex justify-start items-end gap-x-[2%]">
          <h1 className="text-[46px]">Privileges</h1>
          <p className="text-p1-r text-gray-700">
            Enjoy exclusive membership benefits curated just for you
          </p>
        </div>

        <TabGroup
          className={"flex items-center gap-x-4 overflow-auto scrollbarX"}
        >
          <TabList className="mt-[4%] flex flex-col justify-center items-start gap-4 sticky left-0 z-20">
            {tabCategories?.map((item, id) => (
              <Tab
                key={id}
                as="button"
                className="min-w-[276px] px-8 py-4 rounded-xl text-[20px] font-medium text-yellow-300 leading-relaxed text-pretty capitalize bg-primary-600 data-[selected]:bg-yellow-300 data-[selected]:shadow-sm  focus:outline-none data-[selected]:text-primary-700 hover:bg-yellow-300 hover:text-primary-600 active:opacity-65"
              >
                {item.name}
              </Tab>
            ))}
          </TabList>
          <TabPanels>
            {tabCategories?.map((item, id) => (
              <TabPanel
                key={id}
                className="mt-[3%] flex justify-start items-end gap-x-4"
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
