import { BlurImage } from "@/components/ui/BluerImage";
import { X } from "lucide-react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React from "react";

const BottomNavSection = dynamic(
  () => import("@/components/templates/SearchPage/BottomNavSection")
);
const SearchTopTab = dynamic(
  () => import("@/components/templates/SearchPage/SearchTopTab")
);
function CircuitSearchPage() {
  const router = useRouter();
  return (
    <section className="h-screen w-screen">
      <div className="h-full flex justify-center items-center">
        <BlurImage
          src={
            "https://holidays.clubmahindra.com/images/circuitimages/circuitresort1.jpg"
          }
          alt="background"
          width={1500}
          height={900}
          className="h-full w-4/12 object-cover"
        />
        <BlurImage
          src={
            "https://holidays.clubmahindra.com/images/circuitimages/circuitresort2.jpg"
          }
          alt="background"
          width={1500}
          height={900}
          className="h-full w-4/12 object-cover"
        />
        <BlurImage
          src={
            "https://holidays.clubmahindra.com/images/circuitimages/circuitresort3.jpg"
          }
          alt="background"
          width={1500}
          height={900}
          className="h-full w-4/12 object-cover"
        />
      </div>

      <div className="absolute py-[3%] top-0 left-0 w-full h-full bg-black/60 flex flex-col justify-between items-center">
        <SearchTopTab placeholder="Select Circuit" />

        <h1 className="text-center text-[50px] leading-tight text-white font-medium mt-[4%]">
          Plan your stay at more than one <br />
          Club Mahindra resort
        </h1>

        <div className="flex justify-center items-center gap-x-4">
          <BottomNavSection />
          <button
            onClick={() => router.push("/")}
            className="p-3 bg-white rounded-full border-none active:opacity-65"
          >
            <X className="size-7 text-sky-500" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default CircuitSearchPage;
