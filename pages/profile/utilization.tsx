import { BlurImage } from "@/components/ui/BluerImage";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";
import React from "react";

const HolidayBookings = dynamic(
  () => import("@/components/templates/MembershipPage/HolidaysBooking")
);
const TopBanner = dynamic(
  () => import("@/components/templates/OurResortsPage/TopBanner")
);
const LeftSideNav = dynamic(
  () => import("@/components/shared/ProfilePage/LeftSideNav")
);
const NavContainer = dynamic(() => import("@/components/shared/NavContainer"));

function UtilizationPage() {
  return (
    <NavContainer>
      <TopBanner
        title="Holiday Usage"
        photo="https://images.unsplash.com/photo-1541971875076-8f970d573be6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subTitle="View your upcoming, ongoing and past holidays, modify bookings, find pre-book offers and cancellation options."
      />
      <div
        id="holidays"
        className="px-4 mb-12 relative flex justify-start items-start"
      >
        <div className="w-[20vw] p-4 sticky top-14">
          <LeftSideNav />
        </div>
        <div className="ps-12 w-[80vw]">
          <AccordianSection />

          <div id="cancellation" className="pt-[5%] bg-white">
            <div className="container mx-auto py-16">
              <BlurImage
                src="/member/member_footer.png"
                alt="footer"
                width={1400}
                height={600}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 pt-[5%]"></div>
    </NavContainer>
  );
}

export default UtilizationPage;

const accordianData = [
  { name: "Eligible Holidays", link: "/member/accordian_member.png" },
  { name: "Confirmed Stays", link: "/member/accordian_member.png" },
  { name: "Cancelled Reservations", link: "/member/accordian_member.png" },
  { name: "Expired Holidays", link: "/member/accordian_member.png" },
  {
    name: "Adjustments & Deductions",
    link: "/member/accordian_member.png",
  },
];

function AccordianSection() {
  return (
    <>
      {accordianData?.map((item, id) => (
        <Disclosure key={id} as="div" defaultOpen={id === 0}>
          <DisclosureButton className="text-start group w-full">
            <div className="py-5 flex w-full items-center justify-between border-b-2 group-data-[open]:text-amber-500 group-data-[open]:border-none text-gray-700">
              <p className="w-10/12 text-p1-b capitalize leading-relaxed">
                {item.name}
              </p>
              <ChevronDown className="size-6 group-data-[open]:rotate-180" />
            </div>
          </DisclosureButton>
          <DisclosurePanel
            as={"div"}
            className="py-1 px-6 w-full border rounded-2xl"
          >
            <HolidayBookings />
          </DisclosurePanel>
        </Disclosure>
      ))}
    </>
  );
}
