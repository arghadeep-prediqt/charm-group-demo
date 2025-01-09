import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { BlurImage } from "@/components/ui/BluerImage";
import { navigationProfile } from "@/components/lib/rawData";

function LeftSideNav() {
  const router = useRouter();
  const pathname = usePathname();

  // console.log(pathname);
  return (
    <div className="min-h-[50vh]">
      {navigationProfile?.map((data, id) => (
        <React.Fragment key={id}>
          <button
            onClick={() => router.push(data?.link || "/user")}
            className={`${
              pathname === data?.link
                ? "ps-5 pe-3 py-2.5 bg-amber-50"
                : "ps-3 pe-3 py-2.5"
            } 
        mt-4 w-full flex justify-between rounded-full border border-amber-300 hover:bg-amber-100 active:opacity-80`}
          >
            <div className="flex justify-start items-center gap-x-3">
              <BlurImage
                src={data.icon}
                alt="dashboard"
                width={60}
                height={60}
                className="size-5 object-contain"
              />
              <p
                className={`${
                  pathname === data?.link ? "text-amber-600" : "text-amber-500"
                } text-p1-m capitalize text-start`}
              >
                {data.name}
              </p>
            </div>

            <ChevronRight
              className={`${
                pathname === data?.link
                  ? "text-amber-600"
                  : "text-gary-700 rotate-[90deg]"
              } size-5`}
            />
          </button>

          {data?.link === pathname && (
            <ContentRowSection data={data?.content} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default LeftSideNav;

interface ContentRowProps {
  data: {
    name?: string;
    link?: string;
  }[];
}

function ContentRowSection({ data }: ContentRowProps) {
  const [index, setIndex] = useState<number>(0);
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = ({ id, link }: { id: number; link: string }) => {
    setIndex(id);
    router.push(`${pathname}${link}`);
  };

  return (
    <div className="ps-8 mt-2">
      {data?.map((item, j) => (
        <button
          key={j}
          onClick={() => handleClick({ id: j, link: item?.link || "#" })}
          className={`${
            index === j
              ? "border-l-amber-500 text-amber-600"
              : "border-l-amber-100"
          } ps-4 pt-2.5 w-full text-p1-r text-start border-l-2 capitalize`}
        >
          {item?.name}
        </button>
      ))}
    </div>
  );
}
