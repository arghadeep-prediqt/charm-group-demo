import {
  domesticData,
  monthsData,
  regionData,
  secondFilter,
  thirdFilter,
  yearData,
} from "@/components/lib/rawData";
import Container from "@/components/shared/Container";
import Calendar from "@/components/shared/SessionCalender/Calender";
import { BlurImage } from "@/components/ui/BluerImage";
import dynamic from "next/dynamic";
import React from "react";

const SelectListBox = dynamic(() => import("@/components/ui/SelectListBox"));
const NavContainer = dynamic(() => import("@/components/shared/NavContainer"));
const TopBanner = dynamic(
  () => import("@/components/templates/OurResortsPage/TopBanner")
);

function SessionChartPage() {
  const resortData = [
    "CHARM RESORT HỒ TRÀM",
    "CHARM RESORT LONG HẢI",
    "CHARM DIAMOND",
    "Charm Heritage Village Dalat",
  ];
  return (
    <NavContainer>
      <TopBanner
        photo="https://images.unsplash.com/photo-1516700675895-b2e35cae333c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Plan Your Vacation by Season"
        subTitle="Tailor your holidays to the perfect time of year with our seasonal availability chart."
      />
      <Container className="py-2">
        <div className="my-5 flex justify-start items-center gap-x-[2%]">
          <div className="w-2/12">
            <SelectListBox selectedData={domesticData} />
          </div>
          <div className="w-2/12">
            <SelectListBox selectedData={regionData} />
          </div>
          <div className="w-2/12">
            <SelectListBox selectedData={secondFilter} />
          </div>
          <div className="w-2/12">
            <SelectListBox selectedData={thirdFilter} />
          </div>
          <div className="w-2/12">
            <SelectListBox selectedData={monthsData} />
          </div>
          <div className="w-2/12">
            <SelectListBox selectedData={yearData} />
          </div>
          <div className="w-2/12">
            <SelectListBox selectedData={thirdFilter} />
          </div>
        </div>
        <div className="flex justify-center items-center gap-x-6">
          <button className="text-p1-m text-white bg-yellow-500 px-4 py-1.5 rounded-lg min-w-[100px] active:opacity-65 hover:bg-yellow-300">
            Search
          </button>
          <button className="text-p1-m text-white bg-yellow-500 px-4 py-1.5 rounded-lg min-w-[100px] active:opacity-65 hover:bg-yellow-300">
            Clear
          </button>
        </div>
      </Container>

      {resortData?.map((item, id) => (
        <Container key={id}>
          <div className="py-2 px-2 my-6 border-b border-gray-400 flex justify-start items-center gap-x-2">
            <BlurImage
              src="https://img.icons8.com/external-bearicons-glyph-bearicons/100/00509d/external-Resort-location-bearicons-glyph-bearicons.png"
              alt="green star"
              width={50}
              height={50}
              className="size-6 object-contain"
            />
            <h4 className="text-primary-600 leading-relaxed">{item}</h4>
          </div>

          <div className="py-2">
            <Calendar />
          </div>
        </Container>
      ))}

      <div className="sticky bottom-0 w-full py-2 bg-amber-50">
        <Container className="flex justify-between items-center">
          <div className="flex justify-start items-center gap-x-2">
            <p className="size-4 rounded-full bg-blue-400">&nbsp;</p>
            <p className="text-p1-m">Available Dates</p>
          </div>

          <div className="flex justify-start items-center gap-x-2">
            <p className="size-4 rounded-full bg-red-400">&nbsp;</p>
            <p className="text-p1-m">Unavailable Dates</p>
          </div>

          <div className="flex justify-start items-center gap-x-2">
            <p className="size-4 rounded-full bg-purple-400">&nbsp;</p>
            <p className="text-p1-m">Special Offers</p>
          </div>

          <div className="flex justify-start items-center gap-x-2">
            <p className="size-4 rounded-full bg-gray-400">&nbsp;</p>
            <p className="text-p1-m">Past Dates</p>
          </div>
        </Container>
      </div>
    </NavContainer>
  );
}

export default SessionChartPage;
