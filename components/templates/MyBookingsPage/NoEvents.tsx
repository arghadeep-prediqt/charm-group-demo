import { BlurImage } from "@/components/ui/BluerImage";
import { useRouter } from "next/router";
import React from "react";

function NoEvents() {
  const router = useRouter();

  return (
    <div className="py-[5%]">
      <BlurImage
        src={"/images/no_bookings.svg"}
        alt="bookings"
        width={400}
        height={400}
        className="w-[480px] drop-shadow-md h-full object-cover mx-auto"
      />

      <p className="text-p1-r text-center mt-4">
        We are excited to help you plan your next Magical Holiday
      </p>

      <div className="flex justify-center items-center mt-5">
        <button
          onClick={() => router.push("/our_resorts")}
          className="px-8 py-2 border border-amber-300 bg-amber-50 rounded-full text-p1-b text-amber-600"
        >
          Explore More
        </button>
      </div>
    </div>
  );
}

export default NoEvents;
