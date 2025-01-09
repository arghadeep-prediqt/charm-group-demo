import { faqData } from "@/components/lib/rawData";
import Container from "@/components/shared/Container";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusIcon, PlusIcon } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";

const ChatBot = dynamic(() => import("@/components/shared/ChatBot"));

const TopBanner = dynamic(
  () => import("@/components/templates/OurResortsPage/TopBanner")
);
const NavContainer = dynamic(() => import("@/components/shared/NavContainer"));

function FAQsPage() {
  return (
    <NavContainer>
      <TopBanner
        photo="https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?q=80&w=3023&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Frequently Asked Questions"
        subTitle="Find answers to common questions about our resorts, bookings, and exclusive services."
      />

      <Container className="py-2 relative">
        <div className="px-[5%] pb-[10%] pt-8 flex flex-wrap justify-start items-center gap-[5%]">
          {faqData?.map((data, id) => (
            <div key={id} className="w-[45%]">
              <Accordian id={id} desc={data.description} title={data.heading} />
            </div>
          ))}
        </div>

        <div className="mb-[6%] px-[7%] mx-auto">
          <div className="py-4 px-8 bg-amber-50 border border-amber-300 rounded-2xl">
            <div className="flex justify-between items-center">
              <div className="w-10/12">
                <h3 className="text-gray-700">Still have question?</h3>
                <p className="mt-1 text-p1-r text-gray-600">
                  Can’t find the answer you’re looking for? Please chat to our
                  friendly team.
                </p>
              </div>
              <Link
                href={`mailto:support@charm.vn`}
                className="text-p1-m bg-amber-300 py-3 px-6 rounded-xl border-none focus:outline-none active:opacity-65"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
        <ChatBot />
      </Container>
    </NavContainer>
  );
}

export default FAQsPage;

interface AccordianProps {
  id: number;
  title: string;
  desc: string;
}
function Accordian({ id, desc, title }: AccordianProps) {
  return (
    <Disclosure defaultOpen={id === 0}>
      <DisclosureButton className="py-6 group flex w-full items-center justify-between border-b">
        <p className="w-10/12 ps-4 text-[18px] text-start font-semibold text-gray-700 group-data-[open]:text-amber-500">
          {title}
        </p>
        <div className="w-2/12">
          <PlusIcon className="size-6 group-data-[open]:hidden" />
          <MinusIcon className="size-6 text-amber-500 hidden group-data-[open]:block" />
        </div>
      </DisclosureButton>
      <DisclosurePanel className="py-4 px-2 text-p1-r text-[#00509da9]">
        {desc}
      </DisclosurePanel>
    </Disclosure>
  );
}
