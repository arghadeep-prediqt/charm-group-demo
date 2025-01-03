import React from "react";
import { BlurImage } from "@/components/ui/BluerImage";
import dynamic from "next/dynamic";
import Link from "next/link";
import { X } from "lucide-react";
import { useRouter } from "next/router";

const BottomNavSection = dynamic(
  () => import("@/components/templates/SearchPage/BottomNavSection")
);
const SearchTopTab = dynamic(
  () => import("@/components/templates/SearchPage/SearchTopTab")
);

function SearchPage() {
  const router = useRouter();

  return (
    <section className="h-screen w-screen">
      <BlurImage
        src={
          "https://common-booking-engine.gumlet.io/images/searchPageBanner.jpg?q=70&w=1920"
        }
        alt="background"
        width={1500}
        height={900}
        className="h-full w-full object-cover"
      />

      <div className="absolute py-[3%] top-0 left-0 w-full h-full bg-black/60 flex flex-col justify-between items-center">
        <div className="">
          <SearchTopTab />
          <h2 className="mt-[3%] text-white font-medium text-center">
            Not sure where you want to holiday? Check out our{" "}
            <Link href="/" className="text-sky-400">
              recommendations
            </Link>
          </h2>
        </div>

        <h1 className="text-center text-[50px] leading-tight text-white font-medium mt-[4%]">
          Plan your dream family holiday <br />
          with us
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

export default SearchPage;
