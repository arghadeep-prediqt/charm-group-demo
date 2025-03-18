import { privilegesSideNav } from "@/components/lib/rawData";
import { useRouter } from "next/router";
import React from "react";

function LeftSection() {
  const router = useRouter();
  const section = String(router?.query?.section) || "";

  return (
    <div className="w-3/12 h-full flex flex-col justify-center items-start pb-2">
      {privilegesSideNav?.map((nav, id) => (
        <div key={id} className="my-2">
          <h4
            className={`capitalize mt-4 ${
              nav.check.includes(section) ? "text-primary-700" : "text-gray-400"
            }`}
          >
            {nav.section}
          </h4>
          {nav.children?.map((item, j) => (
            <button
              key={j}
              className={`ps-6 py-2 text-start w-full capitalize leading-relaxed ${
                section === item.title
                  ? "text-blue-600 text-p1-m"
                  : "text-gray-400 text-p1-r"
              }`}
              onClick={() => router.push(`/privilegs?section=${item.path}`)}
            >
              - {item.title}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default LeftSection;
