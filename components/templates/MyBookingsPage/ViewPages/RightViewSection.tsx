import { aminitiesData, experiences } from "@/components/lib/rawData";
import { BlurImage } from "@/components/ui/BluerImage";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const SideDrawer = dynamic(() => import("@/components/ui/SideDrawer"));

interface PageProps {
  startDate: string;
  endDate: string;
  totalDay: number;
}

function RightViewSection({ endDate, startDate, totalDay }: PageProps) {
  const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  return (
    <div className="w-[70%] p-6 border border-gray-200 shadow-sm rounded-2xl">
      <h3 className="pb-3 text-[22px] leading-tight capitalize border-b border-gray-400">
        Your Stay Overview
      </h3>
      <Heading end={endDate} start={startDate} total={totalDay} />

      {/* Additional Services */}
      <div className="flex justify-between items-end mt-10 mb-3 pb-3 border-b border-gray-400">
        <h3 className="text-[22px] leading-tight capitalize">
          Explore Your Itinerary
        </h3>

        <button
          onClick={() => setDrawerOpen(true)}
          className="text-white text-p2-m bg-[#00509df9] py-1.5 px-4 rounded-lg active:opacity-65"
        >
          Add Activity
        </button>
      </div>
      <AdditionalServices />

      {/* Experience */}
      <h3 className="mt-10 mb-3 pb-3 text-[22px] leading-tight capitalize border-b border-gray-400">
        Enhance Your Experience
      </h3>

      <div className="w-full mt-6 px-10 flex justify-between items-center">
        {experienceService?.map((photo, id) => (
          <BlurImage
            key={id}
            src={photo}
            alt={`Image ${id}`}
            width={100}
            height={100}
            className="w-24 object-cover"
          />
        ))}
      </div>

      {/* Amenities Services */}
      <h3 className="mt-10 mb-3 pb-3 text-[22px] leading-tight capitalize border-b border-gray-400">
        Included Resort Facilities
      </h3>

      <AminitiesServices />

      <SideDrawer
        isOpen={isDrawerOpen}
        title="Explore Our Itinerary"
        onClose={toggleDrawer}
        paraBody={<SingleItineraryCard setOpen={setDrawerOpen} />}
      />
    </div>
  );
}

export default RightViewSection;

interface HeadingProps {
  start: string;
  end: string;
  total: number;
}

function Heading({ end, start, total }: HeadingProps) {
  const startDate = new Date(start);
  const endDate = new Date(end);
  return (
    <div className="my-5 flex relative justify-between items-start">
      <div className="pe-5 z-10 bg-white">
        <BlurImage
          src="https://img.icons8.com/ios-filled/100/00509d/hotel-check-in.png"
          alt="checkin"
          width={50}
          height={50}
          className="size-16"
        />
      </div>

      <div className="mt-6 w-10/12">
        <div className="flex justify-between items-start gap-x-[3%]">
          <div className="w-[38%]">
            <BlurImage
              src="/icons/left-line.svg"
              alt="checkin"
              width={50}
              height={50}
              className="w-full h-full object-contain"
            />

            <div className="w-full mt-1 pe-2 flex justify-end items-center gap-x-4">
              <h1 className="text-[50px] text-[#00509df9]">
                {startDate?.toLocaleDateString("en-IN", { day: "2-digit" })}
              </h1>
              <div className="text-gray-500">
                <p className="text-p1-b">
                  {startDate?.toLocaleDateString("en-IN", { month: "long" })}
                </p>
                <p className="text-p2-m">
                  {startDate?.toLocaleDateString("en-IN", { weekday: "long" })}
                </p>
              </div>
            </div>
          </div>

          <div className="w-[24%] flex justify-between items-center">
            <p className="text-p1-m text-gray-700 text-nowrap">{total} Days</p>
            <div className="size-4 rounded-full bg-gray-300">&nbsp;</div>
            <p className="text-p1-m text-gray-700 text-nowrap">2 Adults</p>
          </div>

          <div className="w-[38%]">
            <BlurImage
              src="/icons/right-line.svg"
              alt="checkin"
              width={50}
              height={50}
              className="w-full h-full object-contain"
            />

            <div className="w-full  mt-1 ps-2 flex justify-start items-center gap-x-4">
              <div className="text-gray-500">
                <p className="text-p1-b text-end">
                  {" "}
                  {endDate?.toLocaleDateString("en-IN", { month: "long" })}
                </p>
                <p className="text-p2-m text-end">
                  {" "}
                  {endDate?.toLocaleDateString("en-IN", { weekday: "long" })}
                </p>
              </div>
              <h1 className="text-[50px] text-[#00509df9]">
                {endDate?.toLocaleDateString("en-IN", { day: "2-digit" })}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="ps-5 z-10 bg-white">
        <BlurImage
          src="https://img.icons8.com/ios-filled/100/00509d/hotel-chekc-out.png"
          alt="checkin"
          width={50}
          height={50}
          className="size-16"
        />
      </div>
    </div>
  );
}

const experienceService = [
  "/icons/food.svg",
  "/icons/cook.svg",
  "/icons/wheel_chair.svg",
  "/icons/bed_plus.svg",
];

function AdditionalServices() {
  return (
    <div className="pb-3 mt-5 flex justify-start items-center gap-x-4 overflow-auto scrollbarX">
      {experiences?.map(
        (item, id) =>
          id <= 1 && (
            <div
              key={id}
              className="min-w-[250px] max-w[250px] h-[150px] relative"
            >
              <BlurImage
                src={item.image}
                alt={item.title}
                width={100}
                height={100}
                className="w-full h-full object-cover rounded-xl  mx-auto"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/90 to-transparent rounded-xl flex justify-start items-end px-3 py-2">
                <p className="pb-1 text-p1-b leading-relaxed text-white">
                  {item.title}
                </p>
              </div>
            </div>
          )
      )}
    </div>
  );
}

function SingleItineraryCard({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="pb-16 flex flex-wrap justify-between items-start gap-y-6 gap-x-4">
      {experiences?.map(
        (item, id) =>
          id >= 2 && (
            <div key={id} className="w-[48%] h-[200px] relative">
              <BlurImage
                src={item.image}
                alt={item.title}
                width={200}
                height={200}
                className="w-full h-full object-cover bg-gray-300 rounded-xl shadow-sm"
              />
              <div className="p-4 absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/90 to-black/30 flex flex-col justify-between items-start rounded-xl border-2 border-gray-200 shadow-sm">
                <button
                  onClick={() => setOpen(false)}
                  className="mt-1 text-p3-b leading-relaxed bg-yellow-300 py-1 px-3 active:opacity-65 rounded-md"
                >
                  Add Activity
                </button>
                <p
                  className="text-white text-p1-b leading-relaxed line-clamp-1"
                  style={{ textShadow: "0 3px 6px #000" }}
                >
                  {item.title}
                </p>
              </div>
            </div>
          )
      )}
    </div>
  );
}

function AminitiesServices() {
  return (
    <div className="pb-3 border-b border-gray-400 flex gap-x-4 overflow-auto scrollbarX">
      {aminitiesData?.map((item, id) => (
        <div
          key={id}
          className="min-w-[140px] p-3 flex-1 border border-amber-300 rounded-lg flex flex-col justify-center items-center bg-amber-50"
        >
          <BlurImage
            src={item.photo}
            alt={item.name}
            width={100}
            height={100}
            className="size-10"
          />
          <p className="mt-3 text-p2-r text-amber-600 text-center">
            {item.name}
          </p>
        </div>
      ))}
    </div>
  );
}
