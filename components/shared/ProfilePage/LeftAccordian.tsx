import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import React from "react";

const data = [
  {
    title: "Membership Details",
    details: [
      { name: "Membership ID", value: "3060451" },
      { name: "Type Of Membership", value: "Individual" },
      { name: "Type Of Apartment", value: "Studio" },
      { name: "Membership Valid From", value: "01-Feb-2025" },
      { name: "Membership Valid Till", value: "31-Jan-2040" },
      { name: "ERCV", value: "7500.00" },
    ],
  },
  {
    title: "Personal Details",
    details: [
      { name: "Name", value: "Debosree Kar" },
      { name: "Gender", value: "Female" },
      { name: "DOB", value: "21-11-1969" },
      { name: "Marital Status", value: "Married" },
      { name: "Email", value: "kalyan_2000@yahoo.com" },
      { name: "Mobile Number", value: "+919830401772" },
      { name: "Alternate Mobile number", value: "+0" },
      { name: "Occupation", value: "Self-Employed Professional" },
      { name: "Preferred Mode Of Contact", value: "Email" },
      { name: "Service Location", value: "Kolkata" },
    ],
  },
  {
    title: "Designated Beneficiary",
    details: [
      { name: "Name", value: "Mr. KALYAN KAR" },
      { name: "Gender", value: "Male" },
      { name: "Mobile", value: "+919830402350" },
      { name: "DOB", value: "16-05-1966" },
      { name: "RelationWithMember", value: "Spouse" },
      { name: "Nationality", value: "INDIAN" },
    ],
  },
  {
    title: "Child Details",
    details: [
      { name: "Child 1 Name", value: "PRIYANKA KAR" },
      { name: "Child 1 Gender", value: "Female" },
      { name: "Child 1 DOB", value: "21-08-1994" },
      { name: "DOB", value: "16-05-1966" },
      { name: "Child 2 Name", value: "TANYA KAR" },
      { name: "Child 2 Gender", value: "Female" },
      { name: "Child 2 DOB", value: "21-08-1994" },
    ],
  },
];

function LeftAccordian() {
  return (
    <div className="mt-4 overflow-auto scrollbarY h-[50vh]">
      {data?.map((item, id) => (
        <Disclosure key={id} as="div" className="mt-2" defaultOpen={false}>
          <DisclosureButton className="text-start group w-full">
            <div className="py-1 px-3 flex w-full items-center justify-between border-b group-data-[open]:border-none">
              <p className="text-p1-m capitalize leading-relaxed text-gray-500">
                {item.title}
              </p>
              <ChevronDown className="size-4 group-data-[open]:rotate-180" />
            </div>
          </DisclosureButton>
          <DisclosurePanel as={"div"} className="py-1 ps-6 w-full border-b">
            {item?.details?.map((param, j) => (
              <TextAndValue key={j} title={param.name} value={param.value} />
            ))}
          </DisclosurePanel>
        </Disclosure>
      ))}
    </div>
  );
}

export default LeftAccordian;

interface TextAndValueProps {
  title: string;
  value: string;
}

function TextAndValue({ title, value }: TextAndValueProps) {
  return (
    <div className="py-2">
      <p className="text-p3-r">{title}</p>
      <p className="text-p2-m">{value}</p>
    </div>
  );
}
