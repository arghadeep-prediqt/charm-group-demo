import { BlurImage } from "@/components/ui/BluerImage";
import { motion } from "framer-motion";
import { ArrowRightCircle } from "lucide-react";
import { useRouter } from "next/router";
import React, {
  useEffect,
  useState,
  createContext,
  useRef,
  useId,
} from "react";

interface CarouselProps {
  items: React.JSX.Element[];
  initialScroll?: number;
}

type Card = {
  src: string;
  title: string;
  path: string;
  category: string;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const PrivilegsCardCarousel = ({ items }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const id = useId();

  const handlePreviousClick = () => {
    const previous = currentIndex - 1;
    setCurrentIndex(previous < 0 ? items.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = currentIndex + 1;
    setCurrentIndex(next === items.length ? 0 : next);
  };

  const handleSlideClick = (index: number) => {
    if (currentIndex !== index) {
      setCurrentIndex(index);
    }
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleSlideClick, currentIndex }}
    >
      <div className="relative pt-6 w-full">
        {/* Carousel Container */}
        <div className="relative mx-20  my-10">
          <div className="mt-[3%] max-w-3xl mb-12 mx-8">
            <h1 className="text-7xl font-bold bg-gradient-to-r from-[#2089ff] to-[#00509d] bg-clip-text text-transparent leading-tight mb-4">
              Tailored Experiences
            </h1>

            <p className="text-p1-m text-gray-600 leading-relaxed max-w-2xl">
              Relish the curated advantages that make your membership truly
              extraordinary. Discover exclusive privileges designed for your
              lifestyle.
            </p>
          </div>
          <div className="h-[70vmin] relative">
            <ul
              className="absolute flex transition-transform duration-1000 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / items.length)
                }%)`,
              }}
              aria-labelledby={`carousel-heading-${id}`}
            >
              {items.map((item, index) => (
                <PrivilegsSlide
                  key={index}
                  item={item}
                  index={index}
                  current={currentIndex}
                  handleSlideClick={handleSlideClick}
                />
              ))}
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex justify-center w-full mt-8">
            <button
              className="w-10 h-10 flex items-center mx-2 justify-center bg-white shadow-md border-3 border-transparent rounded-full focus:border-[#00509d] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 rotate-180"
              title="Go to previous slide"
              onClick={handlePreviousClick}
            >
              <ArrowRightCircle className="text-blue-600 size-6" />
            </button>
            <button
              className="w-10 h-10 flex items-center mx-2 justify-center bg-white shadow-md border-3 border-transparent rounded-full focus:border-[#00509d] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200"
              title="Go to next slide"
              onClick={handleNextClick}
            >
              <ArrowRightCircle className="text-blue-600  size-6" />
            </button>
          </div>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

interface SlideProps {
  item: React.ReactNode;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

const PrivilegsSlide = ({
  item,
  index,
  current,
  handleSlideClick,
}: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);
  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      const x = xRef.current;
      const y = yRef.current;

      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
      <li
        ref={slideRef}
        className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[70vmin] h-[70vmin] mx-[4vmin] z-10"
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform:
            current !== index
              ? "scale(0.98) rotateX(8deg)"
              : "scale(1) rotateX(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full rounded-[1%] overflow-hidden transition-all duration-150 ease-out"
          style={{
            transform:
              current === index
                ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
                : "none",
          }}
        >
          {item}
        </div>
      </li>
    </div>
  );
};

export const PrivilegsCard = ({
  card,
  layout = false,
}: {
  card: Card;
  index?: number;
  layout?: boolean;
}) => {
  const router = useRouter();

  return (
    <motion.button
      layoutId={layout ? `card-${card.title}` : undefined}
      onClick={() => router.push(`/privilegs?section=${card.path}`)}
      className="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-full w-full overflow-hidden flex flex-col items-start justify-start relative z-10"
    >
      <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent z-30 pointer-events-none" />
      <div className="relative z-40 p-8 w-full h-full rounded-lg flex flex-col justify-end">
        <motion.p
          layoutId={layout ? `title-${card.title}` : undefined}
          className={`text-white text-h3-semi-bold max-w-xs text-left [text-wrap:balance] leading-snug mt-2 capitalize`}
        >
          {card.title}
        </motion.p>
        <motion.p
          layoutId={layout ? `category-${card.category}` : undefined}
          className="mt-2 text-white text-p1-r leading-snug text-left"
        >
          {card.category}
        </motion.p>
      </div>
      <BlurImage
        src={card.src}
        alt={card.title}
        fill
        className="object-cover absolute z-10 inset-0 rounded-3xl"
      />
    </motion.button>
  );
};
