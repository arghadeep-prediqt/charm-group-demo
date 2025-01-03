import {
  firstFilter,
  secondFilter,
  thirdFilter,
} from "@/components/lib/rawData";
import { Calendar } from "lucide-react";
import dynamic from "next/dynamic";
import React from "react";

const SelectListBox = dynamic(() => import("@/components/ui/SelectListBox"));

function FilterRow() {
  return (
    <div className="px-2 flex justify-between items-end gap-x-4">
      <div className="flex flex-col justify-start items-start gap-4">
        <p className="text-p1-b">Filter By</p>

        <div className="flex justify-start items-center gap-x-4">
          <SelectListBox selectedData={firstFilter} />
          <SelectListBox selectedData={secondFilter} />
          <SelectListBox selectedData={thirdFilter} />
        </div>
      </div>

      <button className="py-2 text-p2-m text-sky-500 flex justify-start items-center gap-x-2 hover:underline hover:underline-offset-1 active:opacity-65">
        <Calendar className="size-4 text-sky-500" />
        View Season Chart
      </button>
    </div>
  );
}

export default FilterRow;
