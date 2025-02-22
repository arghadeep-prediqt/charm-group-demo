import { navigationProfile } from "@/components/lib/rawData";
import { BlurImage } from "@/components/ui/BluerImage";
import { useAppSelector } from "@/redux/hooks";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { deleteCookie } from "cookies-next";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["italic", "normal"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

function ProfileBtn() {
  const router = useRouter();
  const userDetails = useAppSelector((state) => state.user);

  const signOut = () => {
    deleteCookie("authUser");
    router.reload();
  };
  return (
    <Menu as="div" className={`${poppins.className} text-white relative ps-6`}>
      <MenuButton
        as="button"
        className="relative flex justify-between items-center gap-x-2 bg-inherit focus:outline-none"
      >
        {userDetails?.image !== "" && (
          <BlurImage
            src={userDetails?.image}
            alt="profile"
            width={100}
            height={100}
            className="size-10 object-cover rounded-full border border-amber-300"
          />
        )}
        <div className="py-1 px-1 leading-relaxed text-start">
          {/* <p className="text-p2-b">Hồng Oanh</p> */}
          <p className="text-p2-b capitalize">
            {userDetails?.name?.split(" ")[0]}
          </p>
          <p className="uppercase text-p3-m text-amber-300 hover:underline hover:underline-offset-2">
            {userDetails?.role}
          </p>
        </div>
      </MenuButton>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-[180px] origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition divide-y divide-gray-200 focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        {navigationProfile?.map((item, id) => (
          <MenuItem key={id} as="div">
            <Link
              href={item.link}
              className="w-full flex justify-start items-center gap-x-3 px-3 py-2 text-p2-m text-gray-700 data-[focus]:bg-gray-100 hover:bg-sky-50"
            >
              <BlurImage
                src={item.icon}
                alt="user"
                height={50}
                width={50}
                className="size-5 text-gray-700"
              />
              {item.name}
            </Link>
          </MenuItem>
        ))}

        <MenuItem as="div">
          <button
            onClick={signOut}
            className="w-full flex justify-start items-center gap-x-2 px-4 py-2 border-none focus:outline-none text-start text-p2-m text-gray-700 data-[focus]:bg-gray-100 disabled:opacity-65"
          >
            <BlurImage
              src={
                "https://img.icons8.com/fluency-systems-filled/100/faa307/exit.png"
              }
              alt="logout"
              height={50}
              width={50}
              className="size-5 text-gray-700"
            />
            Sign out
          </button>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}

export default ProfileBtn;

// <div className="bg-gray-700 px-2 flex justify-start items-center gap-x-2">
// <BlurImage
//   src={"/images/profile.jpg"}
//   alt="profile"
//   width={100}
//   height={100}
//   className="size-14 object-cover rounded-full border-2 border-yellow-300"
// />
// <div className="py-1 px-1 leading-relaxed">
//   <p className="text-p2-b">Hồng Oanh</p>
//   <p className="text-p3-m text-[#ebb541] hover:underline hover:underline-offset-2">
//     Day Available
//   </p>
//   <div className="text-p3-r">White Studio</div>
// </div>
// </div>
