import React, { useCallback, useState } from "react";
import dynamic from "next/dynamic";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";

const Tab1 = dynamic(() => import("@/components/layouts/Home/Tab1"));
const Tab2 = dynamic(() => import("@/components/layouts/Home/Tab2"));
const Tab3 = dynamic(() => import("@/components/layouts/Home/Tab3"));

function TabSection() {
  const [current, setCurrent] = useState<number>(0);
  const tabCategories = [
    { name: "Recommended", component: <Tab1 /> },
    { name: "upcoming bookings", component: <Tab2 /> },
    { name: "payment status", component: <Tab3 /> },
  ];

  const increment = useCallback(() => {
    if (current < tabCategories.length - 1) {
      setCurrent(current + 1);
    }
  }, [current, tabCategories.length]);

  const decrement = useCallback(() => {
    if (current >= 1) setCurrent(current - 1);
  }, [current]);

  return (
    <React.Fragment>
      <div className="p-3 flex justify-between items-center gap-x-16 border-b-2 border-gray-300">
        <h2 className="text-gray-700 capitalize">
          {tabCategories[current]?.name}
        </h2>
        <div className="flex items-center justify-start gap-x-2">
          <button
            disabled={current === 0}
            onClick={decrement}
            className="bg-[#00509d] text-white rounded-full disabled:opacity-25"
          >
            <ArrowLeftCircle className="size-8" />
          </button>
          <button
            onClick={increment}
            disabled={current === tabCategories.length - 1}
            className="bg-[#00509d] text-white rounded-full disabled:opacity-25"
          >
            <ArrowRightCircle className="size-8" />
          </button>
        </div>
      </div>

      {tabCategories[current]?.component}
    </React.Fragment>
  );
}

export default TabSection;
