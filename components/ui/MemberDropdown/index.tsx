import { cn } from "@/components/lib/utils";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Radio,
  RadioGroup,
} from "@headlessui/react";
import { User } from "lucide-react";
import { Poppins } from "next/font/google";
import React, { useState } from "react";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

function MemberDropdown() {
  const [selected, setSelected] = useState(plans[0]);

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
          {selected}
        </p>
      </PopoverButton>

      <PopoverPanel
        anchor="bottom"
        className="w-[var(--button-width)] origin-top-right rounded-xl border border-black/5 bg-white p-1 text-sm/6 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
      >
        <RadioGroup
          value={selected}
          onChange={setSelected}
          aria-label="Server size"
          className="flex flex-col divide-y"
        >
          {plans?.map((plan, id) => (
            <Radio
              key={id}
              value={plan}
              className={cn(
                `${poppins.className}`,
                "group p-3 flex justify-between items-center gap-x-2 cursor-pointer"
              )}
            >
              <p className="text-p2-r group-data-[checked]:text-sky-500 group-data-[checked]:font-medium">
                {plan}
              </p>
              <div className="flex p-0.5 items-center justify-center rounded-full border border-sky-400 bg-gary-100 ">
                <span className="invisible size-3 rounded-full bg-sky-400 group-data-[checked]:visible" />
              </div>
            </Radio>
          ))}
        </RadioGroup>
      </PopoverPanel>
    </Popover>
  );
}

export default MemberDropdown;

const plans = ["Startup", "Business", "Enterprise"];
