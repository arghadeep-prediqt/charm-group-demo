import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import React from "react";

interface PageProps {
  billingCycle: string;
}

const PriceCondition = ({ billingCycle }: PageProps) => {
  const date = new Date();

  const packageOne = [
    `1. Valid for 20 years ${date.getFullYear()} - ${date.getFullYear() + 20}`,
    "2. Discount of 10% on one-time full payment",
    "3. 6 EMI options available with NAM A Bank @ 0% interest rate",
    "4. Yearly Maintenance Fee wavier for 3 years",
    "5. RCI membership for 2 years free",
    "6. Dimond Members get golf course Membership of Vung tau Golf course free for 1 year.",
  ];

  const packageTwo = [
    `1. Valid for 20 years ${date.getFullYear()} - ${date.getFullYear() + 20}`,
    "2. Discount of 10% on one-time full payment",
    "3. 6 EMI options available with NAM A Bank @ 0% interest rate ",
    "4. RCI memberships for up to 2 years free ",
    "5. 20-year membership get golf course Membership of Vung tau Golf course free ",
    "6. Maintenance fee wavier available for higher years of membership",
    "7. Complimentary Breakfast available for higher years of membership ",
    "8. F&B vouchers available for higher years of membership",
  ];

  return (
    <div className={`bg-gray-50`}>
      <Disclosure as="div" defaultOpen={true}>
        <DisclosureButton className="text-start group w-full">
          <div className="pb-1 flex w-full items-center justify-between border-b-2 group-data-[open]:text-amber-500 group-data-[open]:border-none text-gray-700">
            <h4 className="w-10/12 text-inherit capitalize leading-relaxed">
              Conditions
            </h4>
            <ChevronDown className="size-6 group-data-[open]:rotate-180" />
          </div>
        </DisclosureButton>
        <DisclosurePanel
          as={"div"}
          className="p-6 w-full bg-white border rounded-2xl"
        >
          {/* Body */}
          {billingCycle === "one"
            ? packageOne?.map((item: string, id: number) => (
                <p key={id} className="mt-2 text-p1-r text-gray-700">
                  {item}
                </p>
              ))
            : packageTwo?.map((item: string, id: number) => (
                <p key={id} className="mt-2 text-p1-r text-gray-700">
                  {item}
                </p>
              ))}
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
};

export default PriceCondition;
