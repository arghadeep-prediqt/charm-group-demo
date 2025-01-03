import { cn } from "@/components/lib/utils";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { Minus, Plus, User } from "lucide-react";
import React, { useState } from "react";

function PeopleDropdown() {
  const [adult, setAdult] = useState<number>(2);
  const [children, setChildren] = useState<number>(1);
  const [infants, setInfants] = useState<number>(1);

  return (
    <Popover>
      <PopoverButton
        as="button"
        className={cn(
          "w-full px-2 py-4 bg-white rounded-xl",
          "flex justify-start items-center gap-x-3",
          "focus:outline-none"
        )}
      >
        <User className="size-6 text-sky-400" />

        <p className="text-gray-700 text-p2-r text-wrap break-words">
          {adult > 0 && `${String(adult).padStart(2, "0")} Adult`}
          {children > 0 && `, ${String(children).padStart(2, "0")} Children`}
          {infants > 0 && `, ${String(infants).padStart(2, "0")} Infafnts`}
        </p>
      </PopoverButton>

      <PopoverPanel
        anchor="bottom"
        className="w-[var(--button-width)] origin-top-right rounded-xl border border-black/5 bg-white p-1 text-sm/6 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
      >
        <div className="p-3 flex justify-start items-center gap-x-2">
          <div className="w-7/12">
            <p className="text-p1-r">Adult</p>
            <p className="text-p3-r">Ages 12 and above</p>
          </div>
          <div className="w-5/12 flex justify-between items-center gap-x-2">
            <button
              className="p-1 border-2 border-sky-400 rounded-full"
              onClick={() => adult > 0 && setAdult(adult - 1)}
            >
              <Minus className="size-4 text-sky-400" />
            </button>
            <p className="text-p1-m text-sky-400">{adult}</p>
            <button
              className="p-1 border-2 border-sky-400 rounded-full"
              onClick={() => setAdult(adult + 1)}
            >
              <Plus className="size-4 text-sky-400" />
            </button>
          </div>
        </div>

        <div className="p-3 flex justify-start items-center gap-x-2">
          <div className="w-7/12">
            <p className="text-p1-r">Child</p>
            <p className="text-p3-r">Ages 5 - 12</p>
          </div>
          <div className="w-5/12 flex justify-between items-center gap-x-2">
            <button
              className="p-1 border-2 border-sky-400 rounded-full"
              onClick={() => adult > 0 && setChildren(children - 1)}
            >
              <Minus className="size-4 text-sky-400" />
            </button>
            <p className="text-p1-m text-sky-400">{children}</p>
            <button
              className="p-1 border-2 border-sky-400 rounded-full"
              onClick={() => setChildren(children + 1)}
            >
              <Plus className="size-4 text-sky-400" />
            </button>
          </div>
        </div>

        <div className="p-3 flex justify-start items-center gap-x-2">
          <div className="w-7/12">
            <p className="text-p1-r">Infants</p>
            <p className="text-p3-r">Under 5</p>
          </div>
          <div className="w-5/12 flex justify-between items-center gap-x-2">
            <button
              className="p-1 border-2 border-sky-400 rounded-full"
              onClick={() => adult > 0 && setInfants(infants - 1)}
            >
              <Minus className="size-4 text-sky-400" />
            </button>
            <p className="text-p1-m text-sky-400">{infants}</p>
            <button
              className="p-1 border-2 border-sky-400 rounded-full"
              onClick={() => setInfants(infants + 1)}
            >
              <Plus className="size-4 text-sky-400" />
            </button>
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  );
}

export default PeopleDropdown;
