import { BlurImage } from "@/components/ui/BluerImage";
import React from "react";

function ProfileBtn() {
  return (
    <div className="bg-gray-700 px-2 flex justify-start items-center gap-x-2">
      <BlurImage
        src={"/images/profile.jpg"}
        alt="profile"
        width={100}
        height={100}
        className="size-14 object-cover rounded-full border-2 border-yellow-300"
      />
      <div className="py-1 px-1 leading-relaxed">
        <p className="text-p2-b">Debosree Kar</p>
        <p className="text-p3-m text-[#ebb541] hover:underline hover:underline-offset-2">
          Day Available
        </p>
        <div className="text-p3-r">White Studio</div>
      </div>
    </div>
  );
}

export default ProfileBtn;
