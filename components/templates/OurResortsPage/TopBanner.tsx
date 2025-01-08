import { BlurImage } from "@/components/ui/BluerImage";
import dynamic from "next/dynamic";
import React from "react";

const Container = dynamic(() => import("@/components/shared/Container"));

interface PageProps {
  title: string;
  subTitle?: string;
  photo: string;
  isButton?: boolean;
}

function TopBanner({ photo, title, subTitle, isButton = false }: PageProps) {
  return (
    <div className="relative mb-6">
      <BlurImage
        src={photo}
        alt="background"
        width={1980}
        height={1080}
        className="w-full h-[50vh] object-cover object-center -z-10"
      />
      <Container
        className={`pb-4 px-[5%] ${
          isButton ? "pt-14" : "pt-4"
        } absolute w-full h-full  top-0 left-0 bg-gradient-to-r from-black/70 to-black/20 z-10 flex flex-col justify-center items-start`}
      >
        <h1 className="text-white text-[40px] font-medium leading-relaxed">
          {title}
        </h1>
        <p className="mt-1 text-white text-[18px] w-6/12 leading-relaxed">
          {subTitle}
        </p>

        {isButton && (
          <p className="bg-[#b0d23db3] mt-[6%] leading-relaxed px-6 py-2 rounded-lg text-[23px] font-medium text-white">
            0 Days Available
          </p>
        )}
      </Container>
    </div>
  );
}

export default TopBanner;
