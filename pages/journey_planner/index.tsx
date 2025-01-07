import { BlurImage } from "@/components/ui/BluerImage";
import dynamic from "next/dynamic";
import React from "react";

const NavContainer = dynamic(() => import("@/components/shared/NavContainer"));
const SearchTopTab = dynamic(
  () => import("@/components/templates/SearchPage/SearchTopTab")
);
function CircuitSearchPage() {
  return (
    <NavContainer>
      <section className="h-[87vh] relative w-screen">
        <div className="h-full flex justify-center items-center">
          <BlurImage
            src={
              "https://charm.vn/wp-content/uploads/2022/12/Charm-Resort-Ho-Tram-1.jpg"
            }
            alt="background"
            width={1500}
            height={900}
            className="h-full w-4/12 object-cover"
          />
          <BlurImage
            src={
              "https://charm.vn/wp-content/uploads/2022/12/Charm-Resort-Ho-Tram-12.jpg"
            }
            alt="background"
            width={1500}
            height={900}
            className="h-full w-4/12 object-cover"
          />
          <BlurImage
            src={
              "https://charm.vn/wp-content/uploads/2021/09/Charm-Diamond-2.jpg"
            }
            alt="background"
            width={1500}
            height={900}
            className="h-full w-4/12 object-cover object-right"
          />
        </div>

        <div className="absolute py-[10%] top-0 left-0 w-full h-full bg-black/65 flex flex-col justify-between items-center">
          <h3 className="mb-[3%] text-center text-[50px] leading-normal text-white font-medium mt-[4%]">
            Customize Your Stay Across Multiple <br />
            Charm Group Resorts
          </h3>
          <SearchTopTab placeholder="Select Circuit" />
        </div>
      </section>
    </NavContainer>
  );
}

export default CircuitSearchPage;
