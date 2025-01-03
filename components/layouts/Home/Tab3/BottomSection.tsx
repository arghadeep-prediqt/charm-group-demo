import React from "react";

function BottomSection() {
  return (
    <div className="bg-[#fad24c] py-4 px-6 flex justify-between items-center gap-x-4 rounded-bl-2xl rounded-br-2xl">
      <p className="text-p1-b text-slate-700">
        Yay! No payment is due. <br />
        Make your payment in advance.
      </p>

      <button className="py-2 px-4 bg-white border border-white text-sky-500 text-p1-m rounded-full">
        View Upcoming Payments
      </button>
    </div>
  );
}

export default BottomSection;
