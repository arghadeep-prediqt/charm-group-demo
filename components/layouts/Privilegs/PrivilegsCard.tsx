import { cn } from "@/components/lib/utils";
import { BlurImage } from "@/components/ui/BluerImage";
import { motion } from "framer-motion";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import { useRouter } from "next/router";
import React, { useEffect, useState, createContext } from "react";

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

export const PrivilegsCardCarousel = ({
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
      <div className="relative pt-6 w-full">
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
          className="absolute top-0 right-16  z-20 rounded-full bg-[#00509d] active:opacity-70 disabled:opacity-30 disabled:grayscale disabled:shadow-none shadow-sm"
          onClick={scrollLeft}
          disabled={!canScrollLeft}
        >
          <ArrowLeftCircle className="size-10 text-white" />
        </button>
        <button
          className="absolute top-0 right-4  z-20 rounded-full bg-[#00509d] active:opacity-70 disabled:opacity-30 disabled:grayscale disabled:shadow-none shadow-sm"
          onClick={scrollRight}
          disabled={!canScrollRight}
        >
          <ArrowRightCircle className="size-10 text-white" />
        </button>
      </div>
    </CarouselContext.Provider>
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
  // console.log(index);
  return (
    <motion.button
      layoutId={layout ? `card-${card.title}` : undefined}
      onClick={() => router.push(`/privilegs?section=${card.path}`)}
      className="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-80 w-56 md:h-[45vh] md:w-[26vw] overflow-hidden flex flex-col items-start justify-start relative z-10"
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
