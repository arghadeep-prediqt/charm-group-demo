import { BlurImage } from "@/components/ui/BluerImage";
import dynamic from "next/dynamic";
import React from "react";

const Container = dynamic(() => import("@/components/shared/Container"));

interface PageProps {
  title: string;
  subTitle?: string;
  photo: string;
}

function TopBanner({ photo, title, subTitle }: PageProps) {
  return (
    <div className="relative mb-6">
      <BlurImage
        src={photo}
        alt="background"
        width={1980}
        height={1080}
        className="w-full h-[50vh] object-cover object-center -z-10 transition-transform duration-500 hover:scale-105"
      />
      <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-r from-black/70 to-black/40 z-10">
        <Container
          className={`pb-4 px-[5%] pt-4 w-full h-full flex flex-col justify-center  text-left`}
        >
          <h1 className="text-white text-[48px] font-bold leading-tight capitalize drop-shadow-lg">
            {title}
          </h1>
          <p className="mt-2 text-white text-[20px] w-8/12 leading-relaxed drop-shadow-md">
            {subTitle}
          </p>
        </Container>
      </div>
    </div>
  );
}

export default TopBanner;
