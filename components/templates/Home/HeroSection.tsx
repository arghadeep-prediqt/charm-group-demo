import dynamic from "next/dynamic";
import React from "react";
import { BlurImage } from "@/components/ui/BluerImage";
import { useAppSelector } from "@/redux/hooks";

const TabSection = dynamic(
  () => import("@/components/templates/Home/TabSection")
);
const Container = dynamic(() => import("@/components/shared/Container"));

function HeroSection() {
  const user = useAppSelector((state) => state.user);

  return (
    <div id="hero" className="relative">
      <Container className="pt-10 flex justify-start items-start gap-x-2">
        {/* Left Side */}
        <div className="w-full py-2 pe-[2%]">
          {/* Top Heading */}
          <div className="mt-[2%] flex justify-start items-center gap-x-3">
            <BlurImage
              src={user?.image}
              alt="profile"
              width={200}
              height={200}
              className="size-[75px] object-cover rounded-full border-[3px] border-yellow-400"
            />
            <div className="py-1 px-1 leading-relaxed">
              <h2 className="font-medium capitalize">Hello, {user.name}!</h2>
              <p className="text-p1-r">
                Here are the details to help you plan your next holiday
              </p>
            </div>
          </div>

          {/* Bottom Tabs */}
          <div className="mt-[4%] w-full">
            <TabSection />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HeroSection;
