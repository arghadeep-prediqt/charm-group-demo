import { BlurImage } from "@/components/ui/BluerImage";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const Container = dynamic(() => import("@/components/shared/Container"));

const slides = [
  {
    heading: "An Oasis in the Desert",
    subHeading: "Shared By Pallavi Swami on 13 June 2024",
    description:
      "Our recent stay at Club Mahindra Nature Resort in Jaipur was nothing short of exceptional. This green oasis in the heart of the desert truly lives up to its reputation, always making guests feel like they are at home. From the moment we arrived, the ...",
    image:
      "https://clubmahindra.gumlet.io/community/storage/storyimage/WhatsApp%20Image%202024-06-13%20at%207.08.49%20PM%20(2)_1718288379_thumbnail.png",
  },
  {
    heading: "Majestic Hills and Valleys",
    subHeading: "Shared By Rohan Sharma on 10 May 2024",
    description:
      "Our journey to the Club Mahindra Munnar Resort was magical. Nestled among the lush green hills, the property offers breathtaking views of the valleys. The hospitality and food were amazing. A must-visit for anyone seeking peace and natural beauty.",
    image:
      "https://clubmahindra.gumlet.io/community/storage/storyimage/vjVK4AeE7erHbdB_4128_thumbnail.png?q=75&w=547",
  },
  {
    heading: "Beachside Bliss",
    subHeading: "Shared By Neha Verma on 20 April 2024",
    description:
      "The serene beauty of Club Mahindra Goa Resort left us mesmerized. From relaxing by the beach to indulging in local cuisines, everything was perfect. A delightful experience that we would cherish forever.",
    image:
      "https://clubmahindra.gumlet.io/community/storage/storyimage/isOAT6285Rpchjk_4201_thumbnail.png?q=75&w=547",
  },
];

function TravelDiaries() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const { heading, subHeading, description, image } = slides[currentIndex];

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
            <h2>{heading}</h2>
            <p className="text-p1-m">{subHeading}</p>

            <p className="text-[19px] mt-6 leading-relaxed text-gray-700">
              {description}
            </p>

            <div className="mt-3 flex justify-start items-center gap-x-4">
              <button className="px-4 py-2.5 text-[18px] font-semibold leading-relaxed bg-sky-400 border-2 border-sky-400 text-white rounded-full min-w-[200px] shadow-sm">
                Read full Story
              </button>
              <button className="px-4 py-2 text-[18px] font-semibold leading-relaxed bg-white border-2 border-sky-400 text-sky-500 rounded-full min-w-[200px] shadow-sm">
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
