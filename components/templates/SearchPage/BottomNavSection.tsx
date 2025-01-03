import { Compass, Map, MapPinHouse, Search } from "lucide-react";
import { useRouter } from "next/router";
import React from "react";

const navData = [
  {
    icon: <Search className="size-6" />,
    title: "Date & Destination",
    path: "/search",
  },
  {
    icon: <Map className="size-5" />,
    title: "Map View",
    path: "/mapsearch",
  },
  {
    icon: <Compass className="size-5" />,
    title: "Magic Compass",
    path: "/magic_compass",
  },
  {
    icon: <MapPinHouse className="size-6" />,
    title: "Circuit Booking",
    path: "/circuitSearch",
  },
];
function BottomNavSection() {
  const router = useRouter();

  return (
    <div className="w-fit py-5 pe-5 bg-white rounded-full flex justify-start items-center gap-x-4 divide-x-2 divide-gray-300 mx-auto shadow-sm">
      {navData?.map((item, id) => (
        <SingleNav
          key={id}
          icon={item.icon}
          title={item.title}
          link={item.path}
          isShowTitle={item.path === router.pathname}
        />
      ))}
    </div>
  );
}

export default BottomNavSection;

interface SingleNavProps {
  icon: React.ReactNode;
  title: string;
  isShowTitle: boolean;
  link: string;
}

function SingleNav({ icon, title, isShowTitle, link }: SingleNavProps) {
  const router = useRouter();

  return (
    <div className="flex justify-start items-center gap-x-2">
      <button
        onClick={() => router.push(link)}
        className={`text-start ps-5 ${
          isShowTitle ? "text-sky-500" : "text-gray-400"
        }`}
      >
        {icon}
      </button>
      {isShowTitle && <p className="text-p2-m text-sky-500">{title}</p>}
    </div>
  );
}
