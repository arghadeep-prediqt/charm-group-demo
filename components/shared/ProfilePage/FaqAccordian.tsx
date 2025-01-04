import { faqData } from "@/components/lib/rawData";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import React from "react";

function FaqAccordian() {
  return (
    <>
      {faqData?.map((item, id) => (
        <Disclosure
          key={id}
          as="div"
          className="border-b border-gray-200"
          defaultOpen={false}
        >
          <DisclosureButton className="text-start group w-full">
            <div className="py-2 flex w-full items-center justify-between group-data-[open]:text-sky-500 text-gray-500">
              <p className="w-10/12 text-p2-m capitalize leading-relaxed">
                {item.heading}
              </p>
              <ChevronDown className="size-4 group-data-[open]:rotate-180" />
            </div>
          </DisclosureButton>
          <DisclosurePanel as={"div"} className="py-1 ps-6 w-full border-b">
            <p className="text-p3-r">{item.description}</p>
          </DisclosurePanel>
        </Disclosure>
      ))}
    </>
  );
}

export default FaqAccordian;
