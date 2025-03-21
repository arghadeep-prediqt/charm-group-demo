import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import clsx from "clsx";
import { CheckIcon, ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { SelectedProps } from "../@types/pages";

interface PageProps {
  selectedData: SelectedProps[];
}

function SelectListBox({ selectedData }: PageProps) {
  const [selected, setSelected] = useState<SelectedProps>(selectedData[0]);
  return (
    <Listbox value={selected} onChange={setSelected}>
      <ListboxButton
        className={clsx(
          "relative block w-full min-w-[160px] rounded-full bg-blue-50 ps-4 pe-3 py-1.5 text-left text-primary-600 text-p1-r border border-blue-200 shadow-sm",
          "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-blue-300"
        )}
      >
        {selected.name}
        <ChevronDown
          className="group pointer-events-none absolute top-2.5 right-2.5 size-4"
          aria-hidden="true"
        />
      </ListboxButton>
      <ListboxOptions
        anchor="bottom"
        transition
        className={clsx(
          "w-fit rounded-xl border border-blue-200 bg-gray-100 p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none z-20",
          "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
        )}
      >
        {selectedData.map((person) => (
          <ListboxOption
            key={person.id}
            value={person}
            className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-black/10"
          >
            <CheckIcon className="invisible size-4 text-primary-700 group-data-[selected]:visible" />
            <p className="text-p1-r text-nowrap group-data-[selected]:font-medium">
              {person.name}
            </p>
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
}

export default SelectListBox;
