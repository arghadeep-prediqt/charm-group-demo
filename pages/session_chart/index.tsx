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
        photo="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Session Chart"
        subTitle="For Plan your Holidays with us."
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
        <React.Fragment key={id}>
          <div className="bg-yellow-100 py-2 px-8 my-6 flex justify-start items-center gap-x-4">
            <BlurImage
              src="https://img.icons8.com/external-bearicons-gradient-bearicons/100/000000/external-Resort-location-bearicons-gradient-bearicons.png"
              alt="green star"
              width={50}
              height={50}
              className="size-8 object-contain"
            />
            <h4 className="text-primary-600 leading-relaxed">{item}</h4>
          </div>

          <Container className="py-2">
            <Calendar />
          </Container>
        </React.Fragment>
      ))}
    </NavContainer>
  );
}

export default SessionChartPage;
