import { useRouter } from "next/router";
import React from "react";

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
        <p className="text-p1-b text-amber-400">₹ 0</p>
      </div>

      <div className="my-3 flex justify-between items-center">
        <p className="text-p2-r text-gray-600">Referral Points Redeemed</p>
        <p className="text-p1-b text-amber-400">₹ 0</p>
      </div>

      <hr />

      <div className="my-3 flex justify-between items-center">
        <p className="text-p2-b">Total Amount</p>
        <p className="text-p1-b">₹ 0</p>
      </div>

      <div className="mt-5 flex justify-center items-center">
        <button
          onClick={() => router.push("/mockpay")}
          className="text-amber-600 bg-amber-50 border border-amber-300 py-3 w-9/12 rounded-full text-h4-semi-bold shadow-sm"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}

export default RightPaymentSection;
