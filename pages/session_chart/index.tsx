import {
  domesticData,
  monthsData,
  regionData,
  secondFilter,
  thirdFilter,
  yearData,
} from "@/components/lib/rawData";
import { BlurImage } from "@/components/ui/BluerImage";
import { Info } from "lucide-react";
import dynamic from "next/dynamic";
import React from "react";

const Tooltip = dynamic(() => import("@/components/ui/Tooltip"));
const Container = dynamic(() => import("@/components/shared/Container"));
const Calendar = dynamic(
  () => import("@/components/shared/SessionCalender/Calender")
);
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

          <div className="pt-2 pb-5">
            <Calendar />
          </div>
        </Container>
      ))}

      <div className="sticky bottom-0 w-full py-2 bg-[#ecffeb]">
        <Container className="flex justify-between items-center">
          <Tooltip message="Off-Peak Seasons">
            <div className="flex justify-start items-center gap-x-2">
              <p className="size-4 rounded-full bg-[#008080]">&nbsp;</p>
              <p className="text-p1-m">Dewdrop Seasons</p>
              <Info className="size-4 text-gray-700" />
            </div>
          </Tooltip>

          <Tooltip message="Peak Seasons">
            <div className="flex justify-start items-center gap-x-2">
              <p className="size-4 rounded-full bg-[#FF69B4]">&nbsp;</p>
              <p className="text-p1-m">Blossom Season</p>
              <Info className="size-4 text-gray-700" />
            </div>
          </Tooltip>

          <Tooltip message="High Demand (Festive Period)">
            <div className="flex justify-start items-center gap-x-2">
              <p className="size-4 rounded-full bg-[#FF4500]">&nbsp;</p>
              <p className="text-p1-m">Aurora Seasons</p>
              <Info className="size-4 text-gray-700" />
            </div>
          </Tooltip>

          <Tooltip message="Before / After Peak Seasons">
            <div className="flex justify-start items-center gap-x-2">
              <p className="size-4 rounded-full bg-[#87CEFA]">&nbsp;</p>
              <p className="text-p1-m">Breeze Season</p>
              <Info className="size-4 text-gray-700" />
            </div>
          </Tooltip>

          <div className="flex justify-start items-center gap-x-2">
            <p className="size-4 rounded-full bg-transparent border-2 border-blue-500">
              &nbsp;
            </p>
            <p className="text-p1-m">Members Only</p>
          </div>
        </Container>
      </div>
    </NavContainer>
  );
}

export default SessionChartPage;
