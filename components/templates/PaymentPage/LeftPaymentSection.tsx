import React from "react";
import { paymentDetails } from "@/components/lib/rawData";
import { useAppSelector } from "@/redux/hooks";

function LeftPaymentSection() {
  const userRole = useAppSelector((state) => state.user.role);

  return (
    <React.Fragment>
      <TableHeader />
      <div className="flex flex-col divide-y">
        {paymentDetails?.map((item, id) => (
          <RowTable
            key={id}
            title={`${userRole} - ${item.PaymentType} ${item.emiNumber} | ${item.InvoiceDate}`}
            dueDate={item?.InvoiceDuedate || ""}
            status={item?.emiStatusName || ""}
            amount={item?.netAmount?.toLocaleString("en-IN") || ""}
          />
        ))}
      </div>
    </React.Fragment>
  );
}

export default LeftPaymentSection;

function TableHeader() {
  return (
    <div className="mt-6 flex justify-start items-start">
      <div className="w-[60%] flex justify-start items-center gap-x-2">
        <input type="checkbox" />
        <p className="text-p2-b text-gray-600">Payment Statement</p>
      </div>
      <div className="w-[13%]">
        <p className="text-p2-b text-gray-600 text-center">Status</p>
      </div>
      <div className="w-[13%]">
        <p className="text-p2-b text-gray-600 text-center">Details</p>
      </div>
      <div className="w-[13%]">
        <p className="text-p2-b text-gray-600 text-center">Amount</p>
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
          <p className="text-p1-b leading-relaxed capitalize">{title}</p>
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
        <p className="uppercase w-fit px-2 text-[10px] font-semibold rounded-md border border-blue-400 text-blue-500 bg-blue-50">
          {status}
        </p>
      </div>
      <div className="w-[13%] flex justify-center items-center">
        <button className="text-p3-b text-center text-gray-500 underline underline-offset-1 ">
          Click Here
        </button>
      </div>
      <div className="w-[13%]">
        <p className="text-p2-b text-center">₹ {amount}</p>
      </div>
    </div>
  );
}
