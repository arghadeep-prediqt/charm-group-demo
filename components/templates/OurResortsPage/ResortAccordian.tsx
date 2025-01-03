import { ResortsData } from "@/components/@types/pages";
import Container from "@/components/shared/Container";
import SingleResortCol from "@/components/shared/OurResortsPage/SingleResortCol";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import React from "react";

interface PageProps extends ResortsData {
  isOpen: boolean;
}

function ResortAccordian({ data, title, isOpen }: PageProps) {
  return (
    <Disclosure as="div" className="mt-4" defaultOpen={isOpen}>
      <DisclosureButton className="text-start bg-gray-100 group w-full">
        <Container className="py-5 flex w-full items-center justify-between group-data-[open]:text-sky-500">
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
