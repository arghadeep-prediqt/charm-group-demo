import { BlurImage } from "@/components/ui/BluerImage";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/react";
import { useRouter } from "next/router";
import React from "react";

const tabCategories = [
  {
    name: "Recommendations",
    component: (
      <p className="text-p1-b mt-4">
        Sorry, no offers are available for you right now. Please check again
        later.
      </p>
    ),
  },
  {
    name: "upcoming bookings",
    component: (
      <p className="text-p1-b mt-4">
        Sorry, no offers are available for you right now. Please check again
        later.
      </p>
    ),
  },
];

function LeftProfileSection() {
  const router = useRouter();

  return (
    <div className="p-3">
      <h4>My Account</h4>

      <div className="mt-5 flex justify-start items-start gap-x-4">
        <div
          onClick={() => router.push("/membership")}
          className="cursor-pointer w-[240px] h-[130px] p-3 rounded-xl flex flex-col justify-between items-start"
          style={{
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50%",
            backgroundSize: "cover",
            backgroundImage:
              "url('https://holidays.clubmahindra.com/images/membership.png')",
          }}
        >
          <div className="">
            <h4 className="text-[15px] text-white font-bold leading-relaxed">
              Membership
            </h4>
            <p className="text-[12px] text-white">White Studio</p>
          </div>

          <p className="border-t-[0.5px] border-gray-300 pt-1 text-[11px] text-white leading-normal">
            Upgrade membership and holiday in all seasons
          </p>
        </div>

        <div
          onClick={() => router.push("/profile/payment")}
          className="cursor-pointer w-[240px] h-[130px] p-3 rounded-xl flex flex-col justify-between items-start"
          style={{
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50%",
            backgroundSize: "cover",
            backgroundImage:
              "url('https://holidays.clubmahindra.com/images/profile-payment.png')",
          }}
        >
          <div className="">
            <h4 className="text-[15px] text-white font-bold leading-relaxed">
              Payments
            </h4>
            <p className="text-[12px] text-white">Total Payable - ₹ 2,86,656</p>
          </div>

          <p className="border-t-[0.5px] border-gray-300 pt-1 text-[11px] text-white leading-normal">
            Clear dues to enjoy amazing new offers
          </p>
        </div>
      </div>

      <h4 className="mt-8">My Wallet</h4>

      <div className="mt-5 flex justify-start items-start gap-x-3">
        <div className="w-[32%] h-[130px] bg-[#1dade3] p-3 rounded-xl flex flex-col justify-between items-start">
          <div className="flex justify-start items-start gap-x-2">
            <BlurImage
              src={
                "https://holidays.clubmahindra.com/images/payments/mwc-icon.svg"
              }
              alt="tree"
              width={100}
              height={100}
              className="size-12"
            />
            <div className="">
              <h4 className="text-[15px] text-white font-bold leading-relaxed">
                Holiday Balance
              </h4>
              <p className="text-[12px] text-white">Days Available</p>
            </div>
          </div>

          <p className="border-t-[0.5px] border-gray-300 pt-2 text-[11px] text-white leading-normal">
            Plan your dream family holidays
          </p>
        </div>

        <div className="w-[32%] h-[130px] bg-[#A5CF51] p-3 rounded-xl flex flex-col justify-between items-start">
          <div className="flex justify-start items-start gap-x-2">
            <BlurImage
              src={
                "https://holidays.clubmahindra.com/images/payments/hfrpPoint-icon_large.svg"
              }
              alt="coin"
              width={100}
              height={100}
              className="size-12"
            />
            <div className="">
              <h4 className="text-[15px] text-white font-bold leading-relaxed">
                Resort Credit Points
              </h4>
            </div>
          </div>

          <p className="border-t-[0.5px] border-gray-300 pt-2 text-[11px] text-white leading-normal">
            Click here to view statement
          </p>
        </div>

        <div className="w-[32%] h-[130px] bg-[#F4982E] p-3 rounded-xl flex flex-col justify-between items-start">
          <div className="flex justify-start items-start gap-x-2">
            <BlurImage
              src={
                "https://holidays.clubmahindra.com/images/payments/hfrpPoint-icon_large.svg"
              }
              alt="coin"
              width={100}
              height={100}
              className="size-12"
            />
            <div className="">
              <h4 className="text-[15px] text-white font-bold leading-relaxed">
                Referral Points
              </h4>
              <p className="text-[12px] text-white">0 Points</p>
            </div>
          </div>

          <p className="border-t-[0.5px] border-gray-300 pt-2 text-[11px] text-white leading-normal">
            Reffer now and earn points
          </p>
        </div>
      </div>

      <TabGroup>
        <TabList className="flex justify-start items-end gap-4 border-b mt-5">
          {tabCategories?.map((item, id) => (
            <Tab
              key={id}
              className="px-2 py-2 text-p2-r text-gray-700 leading-relaxed text-pretty capitalize border-b-2 border-white data-[selected]:border-sky-300 focus:outline-none data-[selected]:text-p2-m data-[selected]:text-sky-500"
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
    </div>
  );
}

export default LeftProfileSection;
