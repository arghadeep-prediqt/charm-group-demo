import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import clsx from "clsx";
import { CheckIcon, ChevronDown } from "lucide-react";
import React from "react";
import { SelectedProps } from "../@types/pages";

interface PageProps {
  selectedData: SelectedProps[];
  selected: SelectedProps;
  setSelected: React.Dispatch<React.SetStateAction<SelectedProps>>;
}

function SelectListBoxHigh({ selected, setSelected, selectedData }: PageProps) {
  return (
    <Listbox value={selected} onChange={setSelected}>
      <ListboxButton
        className={clsx(
          "relative block min-w-[92px] bg-white py-1.5 text-left text-p1-r text-slate-700",
          "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25"
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
          "w-fit rounded-xl border border-gray-200 bg-white p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none z-20",
          "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
        )}
      >
        {selectedData.map((person) => (
          <ListboxOption
            key={person.id}
            value={person}
            className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-black/10"
          >
            <CheckIcon className="invisible size-4 text-indigo-400 group-data-[selected]:visible" />
            <p className="text-p1-r text-nowrap group-data-[selected]:font-medium">
              {person.name}
            </p>
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
}

export default SelectListBoxHigh;
