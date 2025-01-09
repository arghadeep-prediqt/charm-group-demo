import { useRouter } from "next/navigation";
import React, { useState } from "react";

const pricingPlans = [
  {
    name: "Wanderer",
    price: 90000,
    yearly: 400000,
    description:
      "Perfect for solo travelers and small families looking to explore new destinations with flexibility.",
    isRecommended: false,
    buttonLabel: "Get Started",
  },
  {
    name: "Globetrotter",
    price: 180000,
    yearly: 540000,
    description:
      "Ideal for those who want a well-rounded travel experience with added perks.",
    isRecommended: true,
    buttonLabel: "Already Paid",
  },
  {
    name: "Voyager",
    price: 300000,
    yearly: 900000,
    description:
      "For families and groups that want to travel frequently and enjoy VIP benefits.",
    isRecommended: false,
    buttonLabel: "Get Started",
  },
];

const PricingTablle = () => {
  const router = useRouter();
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <div className={`flex flex-col items-center justify-center bg-gray-50`}>
      <h2 className="font-medium text-center mb-8">
        Choose the <span className="text-amber-500">travel plan</span> that fits
        your lifestyle <br />
        and embark on your dream vacations!
      </h2>

      {/* Billing Toggle */}
      <div className="relative mb-12 flex items-center space-x-2">
        <div className="flex items-center p-1 bg-gray-200 rounded-full">
          <button
            className={`px-6 py-2 rounded-full text-p2-m ${
              billingCycle === "monthly"
                ? "bg-amber-50 text-amber-600"
                : "text-gray-600"
            }`}
            onClick={() => setBillingCycle("monthly")}
          >
            Monthly
          </button>
          <button
            className={`px-6 py-2 rounded-full text-p2-m ${
              billingCycle === "yearly"
                ? "bg-amber-50 text-amber-600"
                : "text-gray-600"
            }`}
            onClick={() => setBillingCycle("yearly")}
          >
            Yearly
          </button>
        </div>
        <span className="ps-4 text-[#7732BB] text-p3-m">SAVE UP TO 30%</span>

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
                : "border-gray-100 rounded-xl hover:border-amber-300 hover:bg-amber-50 hover:shadow-2xl cursor-pointer"
            }  transition-shadow duration-300`}
          >
            {/* Recommended Badge */}
            {plan.isRecommended && (
              <div className="absolute w-full -top-4 left-1/2 transform -translate-x-1/2 bg-amber-300 text-gray-700 py-1 px-4 rounded-tr-lg rounded-tl-lg text-sm font-medium">
                You are using
              </div>
            )}

            <div className="flex flex-col justify-between h-full">
              <div className="body">
                <h3 className="text-[25px] font-medium mb-4 text-gray-800">
                  {plan.name}
                </h3>
                <p className="text-gray-500 mb-6">{plan.description}</p>
              </div>

              <div className="text-[35px] font-semibold text-gray-900 mb-6">
                <span className="text-[28x]">{"₫ "}</span>
                {billingCycle === "monthly"
                  ? plan.price?.toLocaleString("en-IN")
                  : plan.yearly?.toLocaleString("en-IN")}
                <span className="text-lg font-medium text-gray-600">
                  {" "}
                  / {billingCycle}
                </span>
              </div>

              <button
                disabled={plan.isRecommended}
                onClick={() => router.push("/mockpay")}
                className="hover:bg-amber-100 bg-amber-50 py-2 px-4 rounded-lg text-p1-m transition-colors border border-amber-300 text-amber-600 disabled:grayscale disabled:opacity-65"
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
