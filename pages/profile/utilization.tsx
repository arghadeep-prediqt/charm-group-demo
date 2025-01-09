import { BlurImage } from "@/components/ui/BluerImage";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";
import React from "react";

const Container = dynamic(() => import("@/components/shared/Container"));
const NavContainer = dynamic(() => import("@/components/shared/NavContainer"));

function UtilizationPage() {
  return (
    <NavContainer>
      <div className="bg-gray-100 pt-[5%]">
        <Container className="w-10/12 py-10 bg-white rounded-2xl">
          <AccordianSection />
        </Container>

        <div className="mt-[5%] bg-white">
          <div className="container mx-auto px-20 py-16">
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
    </NavContainer>
  );
}

export default UtilizationPage;

const accordianData = [
  { name: "Holiday Entitled", link: "/member/accordian_member.png" },
  { name: "Holiday Booked", link: "/member/accordian_member.png" },
  { name: "Holiday Cancelled", link: "/member/accordian_member.png" },
  { name: "Holiday Lapsed", link: "/member/accordian_member.png" },
  {
    name: "Holiday Debit Due to Amendment",
    link: "/member/accordian_member.png",
  },
];

function AccordianSection() {
  return (
    <>
      {accordianData?.map((item, id) => (
        <Disclosure key={id} as="div" defaultOpen={id === 1}>
          <DisclosureButton className="text-start group w-full">
            <div className="py-5 flex w-full items-center justify-between border-b-2 group-data-[open]:text-sky-500 group-data-[open]:border-none text-gray-700">
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
            <BlurImage
              src={item.link}
              alt={item.name}
              width={1200}
              height={600}
              className="w-full h-full object-contain"
            />
          </DisclosurePanel>
        </Disclosure>
      ))}
    </>
  );
}
