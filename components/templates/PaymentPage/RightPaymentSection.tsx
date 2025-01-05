import { BlurImage } from "@/components/ui/BluerImage";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React from "react";

const FaqAccordian = dynamic(
  () => import("@/components/shared/ProfilePage/FaqAccordian")
);

function RightPaymentSection() {
  const router = useRouter();

  return (
    <div className="py-3 px-4 bg-white h-full rounded-2xl">
      <h4 className="text-gray-700 text-[16px] mt-2 mb-6">Payment Details</h4>

      <div className="flex justify-between items-center">
        <p className="text-p2-r text-gray-600">Total Payable</p>
        <p className="text-p1-b">₹ 0</p>
      </div>

      <div className="mt-3 flex justify-between items-center">
        <p className="text-p2-r text-gray-600">Offer Applied</p>
        <p className="text-p1-b text-emerald-400">₹ 0</p>
      </div>

      <div className="my-3 flex justify-between items-center">
        <p className="text-p2-r text-gray-600">Referral Points Redeemed</p>
        <p className="text-p1-b text-emerald-400">₹ 0</p>
      </div>

      <hr />

      <div className="my-3 flex justify-between items-center">
        <p className="text-p2-b">Total Amount</p>
        <p className="text-p1-b">₹ 0</p>
      </div>

      <div className="mt-5 flex justify-center items-center">
        <button className="bg-gradient-to-l from-blue-400 to-sky-400  text-white py-3 w-9/12 rounded-full text-h4-semi-bold shadow-sm">
          Pay Now
        </button>
      </div>

      <div
        onClick={() => router.push("/profile/payment")}
        className="mt-4 cursor-pointer w-full h-[135px] p-3 rounded-xl flex flex-col justify-between items-start"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50%",
          backgroundSize: "cover",
          backgroundImage:
            "url('https://holidays.clubmahindra.com/images/payments/Card_bg.png')",
        }}
      >
        <div className="">
          <h4 className="text-[15px] text-white font-bold leading-relaxed">
            Auto debit option
          </h4>
          <p className="text-[12px] text-white">Status - Active</p>
        </div>

        <p className="border-t-[0.5px] border-gray-300 pt-1 text-[11px] text-white leading-normal">
          Clear dues to enjoy amazing new offers
        </p>
      </div>

      <button
        onClick={() => router.push("/profile/utilization")}
        className="mt-4 text-p2-m text-gray-600 w-full flex justify-start items-center gap-x-2 border border-gray-300 rounded-xl py-3 px-3 bg-gray-25 active:opacity-65"
      >
        <BlurImage
          src="https://holidays.clubmahindra.com/images/payments/Rs-icon.svg"
          alt="again"
          width={50}
          height={50}
          className="size-5 object-cover"
        />
        Holidays Utilization
      </button>

      <div className="mt-3 flex justify-between items-end">
        <p className="text-p1-b">FAQs</p>
        <button
          onClick={() => router.push("/faqs")}
          className="text-sky-500 text-p3-m hover:underline hover:underline-offset-1"
        >
          View All FAQs
        </button>
      </div>

      <div className="py-2 px-4 overflow-auto scrollbarY h-[32vh]">
        <FaqAccordian />
      </div>
    </div>
  );
}

export default RightPaymentSection;
