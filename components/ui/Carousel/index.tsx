import { useEffect, useState } from "react";
import { BlurImage } from "../BluerImage";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter } from "next/router";

interface Slide {
  id: number;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: "/images/advartise1.png",
  },
  {
    id: 2,
    image: "/images/advertise2.png",
  },
  {
    id: 3,
    image: "/images/advertise3.png",
  },
];

const Carousel = () => {
  const router = useRouter();
  const autoSlideInterval = 5000;
  const [animating, setAnimating] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handlePrev = () => {
    if (animating) return; // Prevent click during animation
    setAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (animating) return; // Prevent click during animation
    setAnimating(true);
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (animating) return; // Prevent auto-slide during animation
      handleNext();
    }, autoSlideInterval);

    return () => clearInterval(interval); // Cleanup interval on component unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animating, currentIndex]);

  useEffect(() => {
    // Delay removing animation state after the transition ends
    const timer = setTimeout(() => {
      setAnimating(false);
    }, 500); // Match this time with the transition duration

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-[66vh] max-w-4xl mx-auto overflow-hidden">
      {/* Background Image */}
      <div className="-z-10 relative border h-full bg-gray-100 rounded-tl-[60px] rounded-br-[60px] shadow-sm">
        <BlurImage
          src={slides[currentIndex].image}
          alt={`${slides[currentIndex].id}`}
          width={500}
          height={900}
          className={`w-full h-full object-fill rounded-tl-[60px] rounded-br-[60px] 
           ${animating && "animate-slideCircular"}
            `}
        />
        <div className="absolute w-full h-full top-0 left-0 bg-black/10 rounded-tl-[60px] rounded-br-[60px]"></div>
      </div>

      <div className="absolute bottom-12 left-0 px-4 py-4 w-10/12 flex justify-between items-center bg-gray-100 rounded-br-full rounded-tr-full shadow-sm">
        <div className="w-7/12 pe-3 flex justify-start items-end">
          <div className="w-full pe-3">
            {/* Navigation Arrows */}
            <div className="flex justify-between items-center gap-x-2">
              <button
                className="bg-white p-2 rounded-full shadow-lg z-20 hover:opacity-70 active:opacity-50"
                onClick={handlePrev}
              >
                <ArrowLeft className="size-5" />
              </button>

              <h4 className="font-normal">
                <span className="font-bold">
                  {(currentIndex + 1).toLocaleString("en-US").padStart(2, "0")}
                </span>
                /{slides.length.toString().padStart(2, "0")}
              </h4>

              <button
                className="bg-white p-2 rounded-full shadow-lg z-20 hover:opacity-70 active:opacity-50"
                onClick={handleNext}
              >
                <ArrowRight className="size-5" />
              </button>
            </div>
            {/* Progress Bar */}
            <div className="mt-3 w-full bg-gray-300 h-2 rounded">
              <div
                className="bg-sky-500 h-2 rounded"
                style={{
                  width: `${((currentIndex + 1) / slides.length) * 100}%`,
                }}
              ></div>
            </div>
          </div>
        </div>
        {/* Content */}
        <button
          onClick={() =>
            router.push("/our_resorts/charm%20resort%20west%20lake")
          }
          className="w-5/12 px-6 py-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 z-10 text-p1-b leading-relaxed"
        >
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default Carousel;
