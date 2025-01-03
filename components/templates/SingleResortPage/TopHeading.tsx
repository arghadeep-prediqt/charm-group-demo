import React from "react";
import { Dot, Heart, Share2 } from "lucide-react";

interface PageProps {
  params: string;
}

function TopHeading({ params }: PageProps) {
  return (
    <React.Fragment>
      <div className="w-8/12 flex justify-between items-center">
        <h1 className="capitalize font-medium leading-relaxed">{params}</h1>
        <div className="flex justify-end items-center gap-x-3">
          <button className="p-2 border-2 border-sky-300 rounded-full active:opacity-65">
            <Share2 className="size-5 text-sky-400" />
          </button>

          <button className="p-2 border-2 border-sky-300 rounded-full active:opacity-65">
            <Heart className="size-5 text-sky-400" />
          </button>
        </div>
      </div>
      <p className="text-p1-r text-gray-500">Dharamshala, Himachal Pradesh</p>
      <div className="mt-5 flex justify-start items-center gap-x-1">
        <button className="border-none text-p3-m text-sky-500">
          15 Photos
        </button>
        <Dot className="size-7 text-gray-400" />
        <button className="border-none text-p3-m text-sky-500">2 Videos</button>
      </div>
    </React.Fragment>
  );
}

export default TopHeading;
