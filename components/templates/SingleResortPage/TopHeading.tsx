import React from "react";

interface PageProps {
  params: string;
  location: string;
}

function TopHeading({ params, location }: PageProps) {
  return (
    <React.Fragment>
      <div className="w-full flex justify-between items-end">
        <h1 className="w-8/12 capitalize text-gray-700 font-medium leading-relaxed">
          {params}
        </h1>

        <div className="w-4/12">
          <p className="text-end text-p1-r">
            <span className="text-amber-500 font-semibold">6° C</span>{" "}
            <span className="text-gray-600 uppercase">overcast clouds</span>
          </p>
          <p className="text-end text-p1-r text-gray-500">
            <span className="text-amber-500 font-semibold">70</span> kms{" | "}
            <span className="text-amber-500 font-semibold">2</span> hours{" "}
            <span className="text-amber-500 font-semibold">30</span> mins
          </p>
        </div>
      </div>
      <p className="text-p1-r text-primary-500">{location}</p>
    </React.Fragment>
  );
}

export default TopHeading;
