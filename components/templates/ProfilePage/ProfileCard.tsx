import { BlurImage } from "@/components/ui/BluerImage";
import React from "react";

function ProfileCard() {
  return (
    <div className="relative h-[25vh] z-10">
      <BlurImage
        src={"/images/profile.jpg"}
        alt="profile"
        width={80}
        height={80}
        className="rounded-full bg-white p-1 mx-auto border-b-2 border-gray-200 hover:grayscale"
      />

      <div className="absolute bottom-0 left-0 w-full h-[80%] pt-10 bg-gray-50 rounded-xl border-2 border-gray-200 -z-10">
        <h4 className="mt-2 text-[21px] text-center text-primary-600 leading-relaxed">
          Debosree Kar
        </h4>

        <p className="mb-4 text-p2-m text-gray-600 text-center leading-relaxed">
          White Studio
        </p>

        <hr />

        <p className="mt-2.5 text-p2-b text-center text-primary-600">
          Member ID -3060451
        </p>
      </div>
    </div>
  );
}

export default ProfileCard;
