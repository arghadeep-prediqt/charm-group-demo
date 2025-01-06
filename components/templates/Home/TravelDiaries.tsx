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
            src="https://img.icons8.com/ios/100/facc15/circled-left--v1.png"
            alt="left-arrow"
            width={100}
            height={100}
            className="arrow -left-3"
          />
        </button>
        {/* Right Button  */}
        <button className="border-none focus:outline-none" onClick={handleNext}>
          <BlurImage
            src="https://img.icons8.com/ios/100/facc15/circled-right--v1.png"
            alt="right-arrow"
            width={100}
            height={100}
            className="arrow -right-3"
          />
        </button>
        {/* Middle Div */}.
        <div className="relative bg-[#faf7f7] h-full px-20 py-10 rounded-2xl flex justify-between items-start">
          <div className="w-5/12 h-full flex flex-col justify-center items-start gap-4">
            <div className="mt-3 prose-2xl text-gray-700 prose-p:text-[18px] prose-p:leading-relaxed prose-ul:list-disc w-full">
              <div
                className="line-clamp-6"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>

            <div className="mt-5 flex justify-start items-center gap-x-4">
              <button
                onClick={() => router.push(`/blog_story?index=${currentIndex}`)}
                className="px-4 py-2.5 text-[18px] font-medium leading-relaxed bg-yellow-100 border border-yellow-300 text-yellow-600 rounded-full min-w-[200px] shadow-sm"
              >
                Read full Story
              </button>
              <button
                onClick={() =>
                  router.push(`/our_resorts/${resort.split(" ").join("%20")}`)
                }
                className="px-4 py-2 text-[18px] font-medium leading-relaxed bg-yellow-300 border-2 border-yellow-200 text-gray-600 rounded-full min-w-[200px] shadow-sm"
              >
                Explore Resort
              </button>
            </div>
          </div>

          <div className="w-6/12 h-full">
            <h2 className="text-end leading-relaxed line-clamp-1">{heading}</h2>
            <p className="mb-5 text-end text-p1-m text-gray-700 leading-relaxed">
              {subHeading?.split("on")[0]}
              <span className="font-normal">
                | {subHeading?.split("on")[1]}
              </span>
            </p>

            <BlurImage
              src={image}
              alt="image"
              width={400}
              height={500}
              className="w-full h-full object-cover bg-sky-200 rounded-2xl shadow-sm border-2 border-gray-200"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default TravelDiaries;
