import { BlurImage } from "@/components/ui/BluerImage";
import React from "react";

function SearchDiv() {
  return (
    <div className="py-2 px-3 rounded-full flex justify-start items-center gap-x-3 bg-primary-600">
      <BlurImage
        src={"https://img.icons8.com/ios/100/0ec1eb/search--v1.png"}
        alt="search"
        width={100}
        height={100}
        className="size-4 object-cover"
      />
      <input
        type="text"
        placeholder="Book Now"
        className="w-full bg-transparent focus:border-none focus:outline-none placeholder:text-gray-100 text-p3-r"
      />
    </div>
  );
}

export default SearchDiv;
