import { travelDiaries } from "@/components/lib/rawData";
import { BlurImage } from "@/components/ui/BluerImage";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Container = dynamic(() => import("@/components/shared/Container"));

function TravelDiaries() {
  const router = useRouter();

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % travelDiaries.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? travelDiaries.length - 1 : prevIndex - 1
    );
  };

  const { heading, subHeading, description, image, resort } =
    travelDiaries[currentIndex];

  return (
    <Container className="mt-[5%] mb-[2%] py-2">
      {/* Header */}
      <h1 className="text-[40px] leading-relaxed">Travel Diaries</h1>
      <p className="text-[18px] text-gray-700">
        Read great vacation stories from our Members
      </p>

      <div className="my-[3%] h-[450px] relative travel_section">
        {/* Left Button */}
        <button className="border-none focus:outline-none" onClick={handlePrev}>
          <BlurImage
            src="https://holidays.clubmahindra.com/images/left-arrow.svg"
            alt="left-arrow"
            width={100}
            height={100}
            className="arrow -left-3"
          />
        </button>

        {/* Right Button  */}
        <button className="border-none focus:outline-none" onClick={handleNext}>
          <BlurImage
            src="https://holidays.clubmahindra.com/images/right-arrow.svg"
            alt="right-arrow"
            width={100}
            height={100}
            className="arrow -right-3"
          />
        </button>

        {/* Middle Div */}
        <div className="relative bg-[#faf7f7] h-full flex justify-between items-start">
          <div className="ps-16 pe-24 w-7/12 h-full flex flex-col justify-center items-start gap-4">
            <h2 className="leading-tight line-clamp-1">{heading}</h2>
            <p className="text-p1-m text-gray-700 leading-tight">
              {subHeading}
            </p>

            <p className="text-p2-r mt-6 leading-relaxed text-gray-600 line-clamp-6">
              {description}
            </p>

            <div className="mt-3 flex justify-start items-center gap-x-4">
              <button
                onClick={() => router.push(`/blog_story?index=${currentIndex}`)}
                className="px-4 py-2.5 text-[18px] font-semibold leading-relaxed bg-sky-400 border-2 border-sky-400 text-white rounded-full min-w-[200px] shadow-sm"
              >
                Read full Story
              </button>
              <button
                onClick={() =>
                  router.push(`/our_resorts/${resort.split(" ").join("%20")}`)
                }
                className="px-4 py-2 text-[18px] font-semibold leading-relaxed bg-white border-2 border-sky-400 text-sky-500 rounded-full min-w-[200px] shadow-sm"
              >
                Explore Resort
              </button>
            </div>
          </div>

          <div className="w-4/12 h-full">
            <BlurImage
              src={image}
              alt="image"
              width={400}
              height={500}
              className="w-full h-full object-cover bg-sky-200"
            />
          </div>

          <BlurImage
            src={image}
            alt="image"
            width={400}
            height={500}
            className="absolute top-[50%] -translate-y-[50%]  right-[20%] -translate-x-[20%] p-2.5 w-[300px] h-[350px] object-cover bg-white"
          />
        </div>
      </div>
    </Container>
  );
}

export default TravelDiaries;
