import {
  domesticData,
  monthsData,
  regionData,
  secondFilter,
  thirdFilter,
  yearData,
} from "@/components/lib/rawData";
import { BlurImage } from "@/components/ui/BluerImage";
import dynamic from "next/dynamic";
import React from "react";

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
      <Container className="py-4">
        <div className="bg-white rounded-xl shadow-md p-5 border border-gray-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
            <div className="transition-all duration-300 hover:translate-y-[-2px]">
              <label className="text-xs text-gray-500 font-medium mb-1 block">
                Country
              </label>
              <SelectListBox selectedData={domesticData} />
            </div>
            <div className="transition-all duration-300 hover:translate-y-[-2px]">
              <label className="text-xs text-gray-500 font-medium mb-1 block">
                Region
              </label>
              <SelectListBox selectedData={regionData} />
            </div>
            <div className="transition-all duration-300 hover:translate-y-[-2px]">
              <label className="text-xs text-gray-500 font-medium mb-1 block">
                Category
              </label>
              <SelectListBox selectedData={secondFilter} />
            </div>
            <div className="transition-all duration-300 hover:translate-y-[-2px]">
              <label className="text-xs text-gray-500 font-medium mb-1 block">
                Type
              </label>
              <SelectListBox selectedData={thirdFilter} />
            </div>
            <div className="transition-all duration-300 hover:translate-y-[-2px]">
              <label className="text-xs text-gray-500 font-medium mb-1 block">
                Month
              </label>
              <SelectListBox selectedData={monthsData} />
            </div>
            <div className="transition-all duration-300 hover:translate-y-[-2px]">
              <label className="text-xs text-gray-500 font-medium mb-1 block">
                Year
              </label>
              <SelectListBox selectedData={yearData} />
            </div>
          </div>

          <div className="flex justify-center items-center gap-4">
            <button className="text-p1-m text-white bg-blue-600 px-6 py-2 rounded-lg min-w-[120px] shadow-sm transition-all duration-300 hover:shadow-md hover:bg-primary-700 active:scale-95">
              Search
            </button>
            <button className="text-p1-m text-primary-600 bg-white border border-primary-600 px-6 py-2 rounded-lg min-w-[120px] shadow-sm transition-all duration-300 hover:bg-gray-50 active:scale-95">
              Clear
            </button>
          </div>
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

      <div className="sticky bottom-0 w-full py-3 bg-gradient-to-r from-blue-50 to-green-50 backdrop-blur-sm border-t border-gray-200 shadow-lg">
        <Container>
          <div className="flex flex-col sm:flex-row justify-center items-center">
            <h5 className="text-primary-600 font-medium mb-2 sm:mb-0 sm:mr-6">
              Membership Tiers:
            </h5>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <div className="flex items-center group transition-all duration-300 hover:scale-105">
                <div className="relative">
                  <div className="size-5 rounded-full bg-[#D3D3D3] ring-2 ring-gray-300 ring-offset-1"></div>
                  <div className="absolute -top-1 -right-1 size-2 bg-white rounded-full opacity-70"></div>
                </div>
                <p className="ml-2 text-p1-m font-medium text-gray-700 group-hover:text-primary-600">
                  Silver
                </p>
              </div>

              <div className="flex items-center group transition-all duration-300 hover:scale-105">
                <div className="relative">
                  <div className="size-5 rounded-full bg-[#FFD966] ring-2 ring-yellow-300 ring-offset-1"></div>
                  <div className="absolute -top-1 -right-1 size-2 bg-white rounded-full opacity-70"></div>
                </div>
                <p className="ml-2 text-p1-m font-medium text-gray-700 group-hover:text-primary-600">
                  Gold
                </p>
              </div>

              <div className="flex items-center group transition-all duration-300 hover:scale-105">
                <div className="relative">
                  <div className="size-5 rounded-full bg-[#2F5597] ring-2 ring-blue-600 ring-offset-1"></div>
                  <div className="absolute -top-1 -right-1 size-2 bg-white rounded-full opacity-70"></div>
                </div>
                <p className="ml-2 text-p1-m font-medium text-gray-700 group-hover:text-primary-600">
                  Diamond
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </NavContainer>
  );
}

export default SessionChartPage;
