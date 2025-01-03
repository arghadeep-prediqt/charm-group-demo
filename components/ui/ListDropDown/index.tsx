import React from "react";
import { Poppins } from "next/font/google";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Link from "next/link";
import { BlurImage } from "../BluerImage";
import { ChevronDown } from "lucide-react";
import { MenuItemProps } from "@/components/@types/common";

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

interface PageProps {
  title: string;
  menuItems: MenuItemProps[];
}

function ListDropDown({ title, menuItems }: PageProps) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton
        as="button"
        className="text-p1-r flex justify-start items-center gap-x-1 capitalize"
      >
        {title}
        <ChevronDown className="text-[#ebb541] size-4" />
      </MenuButton>
      <MenuItems
        anchor="bottom"
        transition
        className="absolute right-0 z-10 mt-2 w-fit origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        {menuItems?.map((item, id) => (
          <MenuItem
            key={id}
            as="div"
            className={"flex justify-start items-center gap-x-2 px-4 py-2"}
          >
            <BlurImage
              src={item.icon}
              alt={item.title}
              width={100}
              height={100}
              className="size-6 object-cover"
            />
            <Link
              href={item.link}
              className={`${poppins.className} text-p1-m text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none capitalize`}
            >
              {item.title}
            </Link>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
}

export default ListDropDown;
