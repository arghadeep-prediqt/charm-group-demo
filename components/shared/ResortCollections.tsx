import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import React, { useEffect, useState, createContext } from "react";
import { BlurImage } from "../ui/BluerImage";
import { cn } from "../lib/utils";
import { useRouter } from "next/router";

interface CarouselProps {
  items: React.JSX.Element[];
  initialScroll?: number;
}

type CardProps = {
  id: string;
  src: string;
  title: string;
  category: string;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const AppleCardCarousel = ({
  items,
  initialScroll = 0,
}: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
      const gap = isMobile() ? 4 : 8;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return window && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-[68vw]">
        {/* Body */}
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto py-10 scroll-smooth [scrollbar-width:none]"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div
            className={cn(
              "absolute right-0  z-[1000] h-auto  w-[5%] overflow-hidden bg-gradient-to-l"
            )}
          ></div>

          <div
            className={cn(
              "flex flex-row justify-start gap-4 px-4",
              "mx-auto" // remove max-w-4xl if you want the carousel to span the full width of its container
            )}
          >
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                    once: true,
                  },
                }}
                key={"card" + index}
                className="rounded-3xl"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <button
          className="absolute -left-[50px] top-[50%] -translate-y-[50%]  z-20 p-2 rounded-full bg-blue-400 flex items-center justify-center active:opacity-70 disabled:opacity-70 disabled:grayscale"
          onClick={scrollLeft}
          disabled={!canScrollLeft}
        >
          <ArrowLeft className="size-6 text-gray-100" />
        </button>
        <button
          className="absolute right-[20px] top-[50%] -translate-y-[50%]  z-20 p-2 rounded-full bg-blue-400 flex items-center justify-center active:opacity-70 disabled:opacity-70 disabled:grayscale"
          onClick={scrollRight}
          disabled={!canScrollRight}
        >
          <ArrowRight className="size-6 text-gray-100" />
        </button>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  // index = 0,
  layout = false,
}: {
  card: CardProps;
  index: number;
  layout?: boolean;
}) => {
  const router = useRouter();
  // console.log(index);
  return (
    <motion.button
      layoutId={layout ? `card-${card.title}` : undefined}
      onClick={() => router.push(`/our_resorts/${card.id}`)}
      className="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-80 w-56 md:h-[45vh] md:w-[20vw] overflow-hidden flex flex-col items-start justify-start relative z-10"
    >
      <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-transparent to-black/90 z-30 pointer-events-none" />
      <div className="relative z-40 p-8 w-full h-full rounded-lg flex flex-col justify-end">
        <motion.p
          layoutId={layout ? `title-${card.title}` : undefined}
          className={`text-white text-[24px] font-medium max-w-xs text-left [text-wrap:balance] mt-2`}
        >
          {card.title}
        </motion.p>
        <motion.p
          layoutId={layout ? `category-${card.category}` : undefined}
          className="mt-1 text-white text-p1-r text-left flex items-center gap-x-1"
        >
          <MapPin className="size-4" />
          {card.category}
        </motion.p>
      </div>
      <BlurImage
        src={card.src}
        alt={card.title}
        fill
        className="object-cover absolute z-10 inset-0"
      />
    </motion.button>
  );
};
