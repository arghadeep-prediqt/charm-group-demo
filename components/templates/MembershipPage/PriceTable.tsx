import React, { useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import SelectListBoxText from "@/components/ui/SelectListBoxText";

interface PageProps {
  billingCycle: string;
  setBillingCycle: React.Dispatch<React.SetStateAction<string>>;
}

const listData = [
  { id: 1, name: "01 Year" },
  { id: 2, name: "02 Year" },
  { id: 3, name: "03 Year" },
  { id: 4, name: "04 Year" },
  { id: 5, name: "05 Year" },
  { id: 10, name: "10 Year" },
  { id: 15, name: "15 Year" },
  { id: 20, name: "20 Year" },
];

const PricingTablle = ({ billingCycle, setBillingCycle }: PageProps) => {
  const router = useRouter();
  const role = useAppSelector((state) => state.user.role);
  const pricingPlans = [
    {
      name: "Silver",
      price: 15000,
      yearly: 700,
      description:
        "For independent travelers and small families eager to uncover hidden gems with ease and flexibility.",
      isRecommended: role === "silver",
      buttonLabel: role === "silver" ? "Already Paid" : "Choose Silver",
    },
    {
      name: "Gold",
      price: 25000,
      yearly: 1400,
      description:
        "For those who seek balanced travel experiences, with enhanced perks and tailored benefits to elevate every journey.",
      isRecommended: role === "gold",
      buttonLabel: role === "gold" ? "Already Paid" : "Choose Gold",
    },
    {
      name: "Diamond",
      price: 50000,
      yearly: 3500,
      description:
        "For families and groups who travel often and want exclusive VIP privileges for an unparalleled vacation experience.",
      isRecommended: role === "diamond",
      buttonLabel: role === "diamond" ? "Already Paid" : "Begin Your Diamond",
    },
  ];

  return (
    <div className={`flex flex-col items-center justify-center bg-gray-50`}>
      <h2 className="font-medium text-center mb-8">
        Choose the <span className="text-blue-500">travel plan</span> that fits
        your lifestyle <br />
        and embark on your dream vacations!
      </h2>

      {/* Billing Toggle */}
      <div className="relative mb-12 flex items-center space-x-2">
        <div className="flex items-center p-1 bg-gray-200 rounded-full">
          <button
            className={`px-6 py-2 rounded-full text-p2-m ${
              billingCycle === "one"
                ? "bg-blue-50 text-blue-600"
                : "text-gray-600"
            }`}
            onClick={() => setBillingCycle("one")}
          >
            Package 1
          </button>
          <button
            className={`px-6 py-2 rounded-full text-p2-m ${
              billingCycle === "two"
                ? "bg-blue-50 text-blue-600"
                : "text-gray-600"
            }`}
            onClick={() => setBillingCycle("two")}
          >
            Package 2
          </button>
        </div>
        <span className="ps-4 text-[#7732BB] text-p3-m">
          10% OFF ONE-TIME <br /> FULL PAYMENT
        </span>

        {/* Curved Arrow */}
        <div className="absolute right-20 -bottom-6">
          <svg
            width="62"
            height="25"
            viewBox="0 0 62 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 14.5L2.07864 19.8863L5.70402 15.393L0 14.5ZM61.037 0.811352C58.4643 7.12607 50.4557 15.7799 39.9021 20.5339C29.3824 25.2727 16.3955 26.1115 3.79948 16.9239L3.21018 17.7318C16.153 27.1724 29.5344 26.301 40.3129 21.4457C51.0575 16.6056 59.2771 7.78133 61.963 1.18865L61.037 0.811352Z"
              fill="#0B2110"
            />
          </svg>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="mt-5 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 w-full max-w-6xl px-4">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`relative bg-white shadow-lg p-8 text-center border ${
              plan.isRecommended
                ? "bg-transparent rounded-br-xl rounded-bl-xl cursor-not-allowed"
                : "border-gray-100 rounded-xl hover:border-blue-300 hover:bg-blue-50 hover:shadow-2xl cursor-pointer"
            }  transition-shadow duration-300`}
          >
            {/* Recommended Badge */}
            {plan.isRecommended && (
              <div className="absolute w-full -top-4 left-1/2 transform -translate-x-1/2 bg-blue-300 text-gray-700 py-1 px-4 rounded-tr-lg rounded-tl-lg text-sm font-medium">
                You are using
              </div>
            )}

            <div className="flex flex-col justify-between h-full">
              <div className="body">
                <h3 className="text-[25px] font-medium mb-4 text-gray-800">
                  {plan.name}
                </h3>
                <div className="h-[130px] mb-6 flex justify-center items-center">
                  <p className="text-gray-500">{plan.description}</p>
                </div>
              </div>

              {/* Pricing */}

              <PricingSecion billingCycle={billingCycle} plan={plan} />

              <button
                disabled={plan.isRecommended}
                onClick={() => router.push("/mockpay")}
                className="hover:bg-blue-100 bg-blue-50 py-2 px-4 rounded-lg text-p1-m transition-colors border border-blue-300 text-blue-600 disabled:grayscale disabled:opacity-65"
              >
                {plan.buttonLabel}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTablle;

interface PricingSectionProps {
  billingCycle: string;
  plan: {
    name: string;
    price: number;
    yearly: number;
    description: string;
    isRecommended: boolean;
    buttonLabel: string;
  };
}

function PricingSecion({ billingCycle, plan }: PricingSectionProps) {
  const [selected, setSelected] = useState(listData[0]);

  return (
    <div className="text-[28px] font-semibold text-gray-900 mb-6 flex justify-center items-center">
      <div className="text-[28x]">{"$ "}</div>
      {billingCycle === "one"
        ? plan.price?.toLocaleString("en-IN")
        : (plan.yearly * selected.id)?.toLocaleString("en-IN")}
      {billingCycle === "two" && (
        <div className="text-lg font-medium text-gray-600 flex justify-start items-center">
          &nbsp;/&nbsp;
          <SelectListBoxText
            selected={selected}
            setSelected={setSelected}
            selectedData={listData}
          />
        </div>
      )}
    </div>
  );
}
