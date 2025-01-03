import { useRouter } from "next/router";
import React from "react";

const sideNavData = [
  {
    section: "curated experiences",
    check: ["weekend gateways", "curated holidays", "religious festive"],
    children: [
      {
        title: "weekend gateways",
        path: "weekend%20gateways",
      },
      {
        title: "curated holidays",
        path: "curated%20holidays",
      },
      {
        title: "religious festive",
        path: "religious%20festive",
      },
    ],
  },
  {
    section: "horizons (inventory exchange)",
    check: ["international hotels", "domestic hotels"],
    children: [
      {
        title: "international hotels",
        path: "international%20hotels",
      },
      {
        title: "domestic hotels",
        path: "domestic%20hotels",
      },
    ],
  },
];

function LeftSection() {
  const router = useRouter();
  const section = String(router?.query?.section) || "";

  return (
    <div className="w-3/12 h-full flex flex-col justify-center items-start pb-2">
      {sideNavData?.map((nav, id) => (
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
                  ? "text-sky-500 text-p1-m"
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
