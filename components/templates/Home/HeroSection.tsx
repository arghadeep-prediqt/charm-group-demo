import dynamic from "next/dynamic";
import React from "react";
import { BlurImage } from "@/components/ui/BluerImage";

const Carousel = dynamic(() => import("@/components/ui/Carousel"));
const TabSection = dynamic(
  () => import("@/components/templates/Home/TabSection")
);
const Container = dynamic(() => import("@/components/shared/Container"));

function HeroSection() {
  return (
    <Container className="flex justify-start items-start gap-x-2">
      {/* Left Side */}
      <div className="w-7/12 py-2 pe-[2%]">
        {/* Top Heading */}
        <div className="mt-[2%] flex justify-start items-center gap-x-3">
          <BlurImage
            src={"/images/profile.jpg"}
            alt="profile"
            width={100}
            height={100}
            className="size-[75px] object-cover rounded-full border-[3px] border-yellow-400"
          />
          <div className="py-1 px-1 leading-relaxed">
            <h1>Hello Debosree Kar!</h1>
            <p className="text-p1-m">
              Here are the details to help you plan your next holiday
            </p>
          </div>
        </div>

        {/* Bottom Tabs */}
        <div className="mt-[4%] w-full">
          <TabSection />
        </div>
      </div>

      {/* Right Side */}
      <div className="w-5/12">
        <Carousel />
      </div>
    </Container>
  );
}

export default HeroSection;
