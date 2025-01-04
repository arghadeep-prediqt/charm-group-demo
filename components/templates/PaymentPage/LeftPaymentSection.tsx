import { paymentDetails } from "@/components/lib/rawData";
import { Download, Printer } from "lucide-react";
import React, { useState } from "react";

function LeftPaymentSection() {
  const [selected, setSelected] = useState<number>(0);

  return (
    <div className="p-6 bg-white h-full rounded-2xl">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="text-gray-700">Payments</h3>
        <div className="flex justify-start items-start gap-x-6">
          <button className="border-none active:opacity-65">
            <Download className="size-5" />
          </button>

          <button className="border-none active:opacity-65">
            <Printer className="size-5" />
          </button>
        </div>
      </div>

      <div className="mt-12 cursor-pointer flex justify-start items-start gap-x-3 divide-x divide-gray-300">
        <div onClick={() => setSelected(0)} className=" w-3/12 ">
          <p
            className={selected === 0 ? "text-p2-b text-sky-400" : "text-p2-r"}
          >
            All Payments
          </p>
          <p
            className={`pb-2 text-p1-b ${
              selected === 0
                ? "border-b-2 border-sky-400 text-sky-400"
                : "border-b-2 border-white"
            }`}
          >
            ₹ 0
          </p>
        </div>
        <div onClick={() => setSelected(1)} className="px-4 w-3/12">
          <p
            className={selected === 1 ? "text-p2-b text-sky-400" : "text-p2-r"}
          >
            EMI
          </p>
          <p
            className={`pb-2 text-p1-b ${
              selected === 1
                ? "border-b-2 border-sky-400 text-sky-400"
                : "border-b-2 border-white"
            }`}
          >
            ₹ 0
          </p>
        </div>
        <div onClick={() => setSelected(2)} className="px-4 w-3/12">
          <p
            className={selected === 2 ? "text-p2-b text-sky-400" : "text-p2-r"}
          >
            ASF
          </p>
          <p
            className={`pb-2 text-p1-b ${
              selected === 2
                ? "border-b-2 border-sky-400 text-sky-400"
                : "border-b-2 border-white"
            }`}
          >
            ₹ 0
          </p>
        </div>
        <div onClick={() => setSelected(3)} className="px-4 w-3/12">
          <p
            className={selected === 3 ? "text-p2-b text-sky-400" : "text-p2-r"}
          >
            Other Payments
          </p>
          <p
            className={`pb-2 text-p1-b ${
              selected === 3
                ? "border-b-2 border-sky-400 text-sky-400"
                : "border-b-2 border-white"
            }`}
          >
            ₹ 0
          </p>
        </div>
      </div>
      {/* Body */}
      <TableHeader />

      <div className="h-[72vh] overflow-auto scrollbarY flex flex-col divide-y">
        {paymentDetails?.map((item, id) => (
          <RowTable
            key={id}
            title={`White Studio - ${item.PaymentType} ${item.emiNumber} | ${item.InvoiceDate}`}
            dueDate={item?.InvoiceDuedate || ""}
            status={item?.emiStatusName || ""}
            amount={item?.netAmount?.toLocaleString("en-IN") || ""}
          />
        ))}
      </div>
    </div>
  );
}

export default LeftPaymentSection;

function TableHeader() {
  return (
    <div className="mt-6 flex justify-start items-start">
      <div className="w-[60%] flex justify-start items-center gap-x-2">
        <input type="checkbox" />
        <p className="text-p3-b">Payment details</p>
      </div>
      <div className="w-[13%]">
        <p className="text-p3-b text-center">Status</p>
      </div>
      <div className="w-[13%]">
        <p className="text-p3-b text-center">Action</p>
      </div>
      <div className="w-[13%]">
        <p className="text-p3-b text-center">Amount</p>
      </div>
    </div>
  );
}

interface RowTableInterface {
  title: string;
  status: string;
  dueDate: string;
  amount: string;
}
function RowTable({ dueDate, amount, status, title }: RowTableInterface) {
  const date = new Date(dueDate);

  return (
    <div className="py-4 flex justify-start items-center">
      <div className="w-[60%] flex justify-start items-center gap-x-3">
        <input type="checkbox" className="size-4" />
        <div className="">
          <p className="text-p1-b leading-relaxed">{title}</p>
          <p className="text-p3-r leading-relaxed">
            Due -{" "}
            {date.toLocaleDateString("en-IN", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
      </div>
      <div className="w-[13%] flex justify-center items-center">
        <p className="uppercase w-fit px-2 text-[10px] font-semibold rounded-md border border-emerald-400 text-emerald-500 bg-emerald-50">
          {status}
        </p>
      </div>
      <div className="w-[13%] flex justify-center items-center">
        <button className="text-p3-b text-center text-gray-500 underline underline-offset-1 ">
          View Details
        </button>
      </div>
      <div className="w-[13%]">
        <p className="text-p2-b text-center">₹ {amount}</p>
      </div>
    </div>
  );
}
