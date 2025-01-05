import { BlurImage } from "@/components/ui/BluerImage";
import { useRouter } from "next/router";
import React from "react";

function NoEvents() {
  const router = useRouter();

  return (
    <div className="py-[5%]">
      <BlurImage
        src={"https://holidays.clubmahindra.com/images/member/upcoming.svg"}
        alt="bookings"
        width={400}
        height={400}
        className="w-[480px] h-full object-cover mx-auto"
      />

      <p className="text-p1-r text-center mt-4">
        We are excited to help you plan your next Magical Holiday
      </p>

      <div className="flex justify-center items-center mt-5">
        <button
          onClick={() => router.push("/our_resorts")}
          className="px-8 py-2 bg-sky-400 rounded-full text-p1-b text-white"
        >
          Explore More
        </button>
      </div>
    </div>
  );
}

export default NoEvents;
