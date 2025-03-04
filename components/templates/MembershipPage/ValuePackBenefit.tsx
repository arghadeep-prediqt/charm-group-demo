import { BlurImage } from "@/components/ui/BluerImage";
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

function ValuePackBenefit({ billingCycle }: PageProps) {
  return (
    <div className={`bg-gray-50`}>
      <MembershipSeasonalWeeks billingCycle={billingCycle} />
      {(billingCycle === "one" && <PackageOne />) ||
        (billingCycle === "two" && <PackageTwo />)}
    </div>
  );
}

export default ValuePackBenefit;

const weekGrouping = [
  {
    tire: "silver",
    week: "9, 10, 11, 14, 15, 17, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50",
  },
  {
    tire: "gold",
    week: "2, 3, 6, 7, 8, 12, 13, 16, 19,, 20, 21, 22, 23, 24, 38, 39, 51",
  },
  {
    tire: "diamond",
    week: "1, 4, 5, 18, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 52",
  },
];
const membershipTire = [
  {
    membership: "1-Bedroom (All Floors)",
    occupency: "2 adults + 1 child",
    fee: "$15,000",
  },
  {
    membership: "2-Bedroom (Ocean View)",
    occupency: "4 adults + 2 children",
    fee: "$25,000",
  },
  {
    membership: "3-Bedroom (President Suite)",
    occupency: "6 adults + 2 children",
    fee: "$50,000",
  },
  {
    membership: "Villa (Full)",
    occupency: "8 adults + 4 children",
    fee: "$50,000",
  },
];

interface MembershipSeasonalWeeksProps {
  billingCycle: string;
}

function MembershipSeasonalWeeks({
  billingCycle,
}: MembershipSeasonalWeeksProps) {
  return (
    <Disclosure as="div" className="mb-6" defaultOpen={true}>
      <DisclosureButton className="pb-1 text-start group w-full">
        <div className="pb-2 flex w-full items-center justify-between border-b-2 group-data-[open]:text-amber-500 group-data-[open]:border-none text-gray-700">
          <h4 className="w-10/12 text-inherit capitalize leading-relaxed">
            Membership Tiers & Seasonal Weeks
          </h4>
          <ChevronDown className="size-6 group-data-[open]:rotate-180" />
        </div>
      </DisclosureButton>

      <DisclosurePanel
        as={"div"}
        className="w-full border pb-6 pt-3 px-6 bg-white rounded-2xl"
      >
        <p className="text-p1-b border-b border-gray-200 px-3 py-2 rounded-lg mb-2">
          Seasonal Week Groupings
        </p>
        <div className="px-6 pt-6 pb-3 bg-amber-100 rounded-xl">
          <div className="pb-3 flex justify-between border-b border-b-gray-300">
            <p className="px-3 w-4/12 text-p1-m">Membership Tier</p>
            <p className="w-8/12 text-p1-m">Weeks Included</p>
          </div>

          <div className="flex flex-col divide-y divide-gray-300">
            {weekGrouping?.map((item, id) => (
              <div key={id} className="py-3 flex justify-between">
                <p className="px-3 w-4/12 text-p2-r capitalize">
                  {item.tire} Plan
                </p>
                <p className="w-8/12 text-p2-r">{item.week}</p>
              </div>
            ))}
          </div>
        </div>

        {billingCycle === "one" && (
          <React.Fragment>
            <p className="text-p1-b border-b border-gray-200 px-3 py-2 rounded-lg mt-4 mb-2">
              Membership Types
            </p>
            <div className="px-6 pt-6 pb-3 bg-amber-100 rounded-xl">
              <div className="pb-2 flex justify-between border-b border-b-gray-300">
                <p className="px-3 w-4/12 text-p1-m">Membership</p>
                <p className="w-4/12 text-p1-m">Occupancy</p>
                <p className="w-4/12 text-p1-m">Membership Fee</p>
              </div>

              <div className="flex flex-col divide-y divide-gray-300">
                {membershipTire?.map((item, id) => (
                  <div key={id} className="py-3 flex justify-between">
                    <p className="px-3 w-4/12 text-p2-r capitalize">
                      {item.membership}
                    </p>
                    <p className="w-4/12 text-p2-r capitalize">
                      {item.occupency}
                    </p>
                    <p className="w-4/12 text-p2-r">{item.fee}</p>
                  </div>
                ))}
              </div>
            </div>
          </React.Fragment>
        )}
      </DisclosurePanel>
    </Disclosure>
  );
}

function PackageOne() {
  return (
    <Disclosure as="div" className="mt-6" defaultOpen={true}>
      <DisclosureButton className="pb-1 text-start group w-full">
        <div className="pb-2 flex w-full items-center justify-between border-b-2 group-data-[open]:text-amber-500 group-data-[open]:border-none text-gray-700">
          <h4 className="w-10/12 text-inherit capitalize leading-relaxed">
            Value Pack Overview
          </h4>
          <ChevronDown className="size-6 group-data-[open]:rotate-180" />
        </div>
      </DisclosureButton>

      <DisclosurePanel
        as={"div"}
        className="w-full border py-3 px-6 bg-white rounded-2xl"
      >
        <BlurImage
          src={"/images/package1.png"}
          alt="package1"
          width={1900}
          height={800}
          className="w-full object-cover"
        />
      </DisclosurePanel>
    </Disclosure>
  );
}

const allPlansDetails = [
  { plan: "silver", photo: "/images/silver21.png" },
  { plan: "gold", photo: "/images/gold22.png" },
  { plan: "diamond", photo: "/images/diamond23.png" },
];

function PackageTwo() {
  return (
    <Disclosure as="div" className="mt-6" defaultOpen={true}>
      <DisclosureButton className="pb-1 text-start group w-full">
        <div className="pb-2 flex w-full items-center justify-between border-b-2 group-data-[open]:text-amber-500 group-data-[open]:border-none text-gray-700">
          <h4 className="w-10/12 text-inherit capitalize leading-relaxed">
            Value Pack Overview
          </h4>
          <ChevronDown className="size-6 group-data-[open]:rotate-180" />
        </div>
      </DisclosureButton>

      <DisclosurePanel
        as={"div"}
        className="w-full border pb-6 px-6 bg-white rounded-2xl"
      >
        {allPlansDetails?.map((item, id) => (
          <React.Fragment key={id}>
            <p className="text-p1-b border-b border-gray-200 pe-3 py-2 rounded-lg my-3 capitalize">
              {item.plan} Plan
            </p>
            <BlurImage
              src={item.photo}
              alt={item.plan}
              width={1900}
              height={800}
              className="w-full object-cover"
            />
          </React.Fragment>
        ))}
      </DisclosurePanel>
    </Disclosure>
  );
}
