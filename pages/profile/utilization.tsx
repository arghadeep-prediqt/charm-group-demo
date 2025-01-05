import { BlurImage } from "@/components/ui/BluerImage";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Calendar, ChevronDown, Download, Printer } from "lucide-react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React from "react";

const Container = dynamic(() => import("@/components/shared/Container"));
const NavContainer = dynamic(() => import("@/components/shared/NavContainer"));

function UtilizationPage() {
  const router = useRouter();
  return (
    <NavContainer>
      <div className="bg-gray-100">
        <div className="pb-3 flex justify-start items-start">
          <div className="w-6/12 px-20 bg-white rounded-tr-2xl rounded-br-2xl">
            <BlurImage
              src="/member/member1.png"
              alt="membership"
              width={400}
              height={600}
              className="mt-[10%] w-[320px] h-full mx-auto object-contain"
            />
            <BlurImage
              src="/member/member2.png"
              alt="membership"
              width={400}
              height={600}
              className="mt-[5%] w-[320px] h-full mx-auto object-contain"
            />
            <button
              onClick={() => router.push("/session_chart")}
              className="my-[5%] mx-auto w-7/12 flex justify-center items-center gap-x-3 text-sky-500 border border-sky-500 bg-white px-6 py-2.5 rounded-xl active:opacity-65"
            >
              <Calendar className="size-4" />
              <p className="text-p2-r">View Season Details</p>
            </button>
          </div>
          <div className="w-6/12 ps-16 pe-24">
            <div className="mt-[5%] flex justify-between items-start">
              <div className="capitalize">
                <p className="text-p2-m leading-relaxed">
                  Usage Summary (in days)
                </p>
                <p className="text-p3-r leading-relaxed italic">
                  Maximum Balance*
                </p>
              </div>

              <div className="flex justify-start items-center gap-x-4">
                <p className="text-p2-m leading-relaxed">All Details</p>
                <button className="active:opacity-65 border-none focus:outline-none">
                  <Download className="size-5" />
                </button>
                <button className="active:opacity-65 border-none focus:outline-none">
                  <Printer className="size-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <Container className="w-10/12 mt-[5%] py-10 bg-white rounded-2xl">
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
