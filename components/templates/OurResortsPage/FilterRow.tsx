import {
  firstFilter,
  secondFilter,
  thirdFilter,
} from "@/components/lib/rawData";
import { Calendar } from "lucide-react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React from "react";

const SelectListBox = dynamic(() => import("@/components/ui/SelectListBox"));

function FilterRow() {
  const router = useRouter();
  return (
    <div className="px-2 flex justify-between items-end gap-x-4">
      <div className="flex flex-col justify-start items-start gap-4">
        <p className="text-p1-m">Filter By</p>

        <div className="flex justify-start items-center gap-x-4">
          <SelectListBox selectedData={firstFilter} />
          <SelectListBox selectedData={secondFilter} />
          <SelectListBox selectedData={thirdFilter} />
        </div>
      </div>

      <button
        onClick={() => router.push("/session_chart")}
        className="py-2 px-4 text-p2-m text-blue-600 bg-blue-50 flex justify-start items-center gap-x-2 hover:underline hover:underline-offset-1 active:opacity-65 rounded-lg border border-blue-200 shadow-sm"
      >
        <Calendar className="size-4 text-blue-600" />
        Seasonal Calendar
      </button>
    </div>
  );
}

export default FilterRow;
