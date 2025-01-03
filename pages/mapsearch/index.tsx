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
function MapSearchPage() {
  const router = useRouter();
  return (
    <section className="h-screen w-screen">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15533.091685385403!2d106.67464609656203!3d10.779603717638652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f00d25b83c9%3A0x6b52973e200562be!2zQ8O0bmcgVHkgQ-G7lSBQaOG6p24gQ2hhcm0gR3JvdXA!5e0!3m2!1sen!2sin!4v1735129654938!5m2!1sen!2sin"
        width="100%"
        height="100%"
        loading="lazy"
        className="border-none"
      ></iframe>

      <div className="absolute py-[3%] top-0 left-0 w-full h-full bg-black/10 flex flex-col justify-between items-center">
        <div className="">
          <SearchTopTab />
          <p className="ml-[3%] mt-3 w-fit p-3 font-medium bg-white rounded-lg text-p1-m">
            Please search for your preferred by Resort Name/Terrain/Experiences
          </p>
        </div>

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

export default MapSearchPage;
