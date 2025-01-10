import { aminitiesData } from "@/components/lib/rawData";
import { BlurImage } from "@/components/ui/BluerImage";
import { Check, Info } from "lucide-react";
import React from "react";

function RightViewSection() {
  return (
    <div className="w-[70%] p-6 bg-white rounded-2xl">
      <Heading />

      {/* Additional Services */}
      <div className="mt-6 mb-3 flex justify-between items-center">
        <h4 className="font-medium leading-relaxed">Additional Services</h4>
      </div>

      <AdditionalServices />

      {/* Amenities Services */}
      <div className="mt-6 mb-3 flex justify-between items-center">
        <h4 className="font-medium leading-relaxed">Amenities</h4>
      </div>

      <AminitiesServices />

      {/* Amenities Services */}
      <div className="mt-6 mb-3 flex justify-start items-center gap-x-2">
        <h4 className="font-medium leading-relaxed">Travel Checklist</h4>
        <Info className="size-5 text-amber-600" />
      </div>

      <div className="p-6 border border-gray-200 flex flex-col gap-4">
        <ListPara para="Flip-flops. For the beach, in the shower, about the resort." />
        <ListPara para="Don't forgot your camera - You'll have loads of photo ops on this tour, that's for sure." />
        <ListPara para="Woolens, scarf/muffler, caps, jackets, etc." />
      </div>
    </div>
  );
}

export default RightViewSection;

function Heading() {
  return (
    <div className="border-b pb-3 border-gray-300 flex relative justify-between">
      <div className="pe-5 z-10 bg-white">
        <div className="text-p2-r text-gray-700 leading-relaxed ps-1">
          Check-In
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <h1 className="text-[50px] text-amber-500">08</h1>
          <div className="text-amber-500">
            <p className="text-p1-m">Feb</p>
            <p className="text-p1-m">Sat</p>
          </div>
        </div>
      </div>

      <div className="ps-5 z-10 bg-white">
        <div className="text-p2-r text-gray-700 leading-relaxed text-end pe-1">
          Check-out
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <h1 className="text-[50px] text-amber-500">10</h1>
          <div className="text-amber-500">
            <p className="text-p1-m">Feb</p>
            <p className="text-p1-m">Sat</p>
          </div>
        </div>
      </div>

      <div
        className="absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] w-full h-[1px]"
        style={{
          backgroundImage:
            "url('https://holidays.clubmahindra.com/images/line-dotted.png')",
        }}
      />
    </div>
  );
}

const data = [
  {
    photo:
      "https://mobcms.clubmahindra.com/sites/default/files/special_diet_33.png",
    title: "Special Diet",
  },
  {
    photo:
      "https://mobcms.clubmahindra.com/sites/default/files/wheel_chair_1.png",
    title: "Wheel Chair",
  },
  {
    photo:
      "https://mobcms.clubmahindra.com/sites/default/files/special_menu_35.png",
    title: "Special Menu",
  },
  {
    photo:
      "https://mobcms.clubmahindra.com/sites/default/files/extra_bed_1.png",
    title: "Extra Bed",
  },
];

function AdditionalServices() {
  return (
    <div className="pb-3 border-b border-gray-400 flex justify-start items-center gap-x-4">
      {data?.map((item, id) => (
        <div key={id} className="w-3/12 relative">
          <BlurImage
            src={item.photo}
            alt={item.title}
            width={100}
            height={100}
            className="w-full h-[100px] object-contain mx-auto"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 rounded-lg flex justify-start items-end px-3 py-2">
            <p className="text-p2-r text-white">{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function AminitiesServices() {
  return (
    <div className="pb-3 border-b border-gray-400 flex gap-x-4 overflow-auto scrollbarX">
      {aminitiesData?.map((item, id) => (
        <div
          key={id}
          className="min-w-[140px] p-3 flex-1 border border-gray-300 rounded-lg flex flex-col justify-center items-center bg-gray-50"
        >
          <BlurImage
            src={item.photo}
            alt={item.name}
            width={100}
            height={100}
            className="size-10"
          />
          <p className="mt-3 text-p2-r text-center">{item.name}</p>
        </div>
      ))}
    </div>
  );
}

function ListPara({ para }: { para: string }) {
  return (
    <div className="flex justify-start items-center gap-x-2">
      <Check className="size-5 text-amber-500" />
      <p className="text-p2-r">{para}</p>
    </div>
  );
}
