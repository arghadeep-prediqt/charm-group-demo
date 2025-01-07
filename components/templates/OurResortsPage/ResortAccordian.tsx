import { ResortsData } from "@/components/@types/pages";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";
import React from "react";

const Container = dynamic(() => import("@/components/shared/Container"));
const SingleResortCol = dynamic(
  () => import("@/components/shared/OurResortsPage/SingleResortCol")
);
interface PageProps extends ResortsData {
  isOpen: boolean;
}

function ResortAccordian({ data, title, isOpen }: PageProps) {
  return (
    <Disclosure as="div" className="mt-4" defaultOpen={isOpen}>
      <DisclosureButton className="text-start bg-gray-100 group w-full">
        <Container className="py-5 flex w-full items-center justify-between group-data-[open]:bg-amber-200">
          <p className="text-[18px] font-medium capitalize leading-relaxed">
            resorts in {title}
          </p>
          <ChevronDown className="size-6 group-data-[open]:rotate-180" />
        </Container>
      </DisclosureButton>
      <DisclosurePanel
        as={Container}
        className="mt-2 pt-2 w-full flex justify-start items-start flex-wrap"
      >
        {data?.map((item, id) => (
          <SingleResortCol key={id} {...item} />
        ))}
      </DisclosurePanel>
    </Disclosure>
  );
}

export default ResortAccordian;
