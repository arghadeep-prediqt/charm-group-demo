import { travelDiaries } from "@/components/lib/rawData";
import { BlurImage } from "@/components/ui/BluerImage";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Container = dynamic(() => import("@/components/shared/Container"));

function TravelDiaries() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        handleNext();
      }, 4000); // Change slide every 8 seconds
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % travelDiaries.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? travelDiaries.length - 1 : prevIndex - 1
    );
  };

  const { heading, subHeading, description, image, id } =
    travelDiaries[currentIndex];

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 py-16">
      <Container className="relative">
        {/* Header with animated underline */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
            Vacation Tales
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto mt-3 rounded-full"></div>
          <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            Immerse yourself in authentic experiences shared by our community of
            travelers
          </p>
        </div>

        {/* Progress bar */}
        <div className="flex justify-center gap-2 mb-8">
          {travelDiaries.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="group"
            >
              <div
                className={`h-1 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "w-10 bg-gradient-to-r from-blue-500 to-teal-400"
                    : "w-6 bg-gray-300 group-hover:bg-gray-400"
                }`}
              ></div>
            </button>
          ))}
        </div>

        {/* Main content */}
        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden"
            >
              {/* Image section - changed height to h-full to match content height */}
              <div className="md:w-1/2 h-[300px] md:h-auto relative overflow-hidden">
                <motion.div
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="w-full h-full"
                >
                  <BlurImage
                    src={image}
                    alt={heading}
                    width={800}
                    height={800}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 md:hidden">
                  <h2 className="text-2xl font-bold text-white">{heading}</h2>
                  <p className="text-white/80 text-sm">
                    {subHeading?.split("on")[0]}
                    <span className="opacity-70">
                      {" "}
                      | {subHeading?.split("on")[1]}
                    </span>
                  </p>
                </div>
              </div>

              {/* Content section */}
              <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="hidden md:block">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent mb-2">
                      {heading}
                    </h2>
                    <p className="text-gray-500 mb-6">
                      {subHeading?.split("on")[0]}
                      <span className="opacity-70">
                        {" "}
                        | {subHeading?.split("on")[1]}
                      </span>
                    </p>
                  </div>

                  <div
                    className="prose prose-lg text-gray-700 mb-8 line-clamp-6 md:line-clamp-[10]"
                    dangerouslySetInnerHTML={{ __html: description }}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() =>
                      router.push(`/blog_story?index=${currentIndex}`)
                    }
                    className="px-6 py-3 rounded-full bg-white border-2 border-blue-500 text-blue-600 font-medium hover:bg-blue-50 transition-colors duration-300"
                  >
                    Read Full Story
                  </button>
                  <button
                    onClick={() => router.push(`/our_resorts/${id}`)}
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 text-white font-medium hover:from-blue-600 hover:to-teal-500 transition-colors duration-300 shadow-md"
                  >
                    Explore Resort
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-white transition-colors duration-300 z-10"
            onClick={handlePrev}
            aria-label="Previous story"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue-600"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-white transition-colors duration-300 z-10"
            onClick={handleNext}
            aria-label="Next story"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue-600"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>

          {/* Auto-play toggle */}
          <button
            className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-white transition-colors duration-300 z-10"
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            aria-label={isAutoPlaying ? "Pause auto-play" : "Start auto-play"}
          >
            {isAutoPlaying ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-600"
              >
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-600"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            )}
          </button>
        </div>
      </Container>
    </div>
  );
}

export default TravelDiaries;
