import { BlurImage } from "@/components/ui/BluerImage";
import React from "react";

function ProfileCard() {
  return (
    <div className="relative flex justify-start items-center gap-x-1 border border-amber-200 px-3 rounded-xl bg-amber-50">
      <BlurImage
        src={""}
        alt="profile"
        width={55}
        height={55}
        className="rounded-full bg-amber-50 p-0.5 hover:grayscale"
      />

      <div className="w-full ps-4 py-2">
        <p className="text-p1-b text-start text-primary-600 leading-relaxed line-clamp-1">
          Hồng Oanh
        </p>

        <p className="text-p3-r text-gray-600 text-start leading-relaxed">
          White Studio
        </p>
      </div>
    </div>
  );
}

export default ProfileCard;
