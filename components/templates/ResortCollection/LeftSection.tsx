import React, { useState } from "react";
import { CurrentSectionProps } from "@/components/@types/pages";
import { ChevronDownCircle, ChevronUpCircle } from "lucide-react";
import { resortImage } from "@/components/lib/rawData";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

interface PageProps {
  currentImage: CurrentSectionProps;
}

function LeftSection({ currentImage }: PageProps) {
  const router = useRouter();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const increment = () => {
    if (currentImage?.id >= resortImage.length - 1) return;
    const next = resortImage[currentImage?.id + 1];
    router.push(
      `/resort_collection?section=${next.name.split(" ").join("%20")}`
    );
  };

  const decrement = () => {
    if (currentImage?.id < 0) return;
    const next = resortImage[currentImage?.id - 1];
    router.push(
      `/resort_collection?section=${next.name.split(" ").join("%20")}`
    );
  };

  const handleItemClick = (item: CurrentSectionProps) => {
    router.push(
      `/resort_collection?section=${item.name.split(" ").join("%20")}`
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="w-5/12 ps-[5%] relative py-2 h-[85%] flex justify-start items-end"
    >
      <div className="flex flex-col items-start justify-start gap-3 relative">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          disabled={currentImage?.id === 0}
          onClick={decrement}
          className="mb-4 text-white disabled:opacity-25 transition-all duration-300"
        >
          <ChevronUpCircle className="size-8" />
        </motion.button>

        <div className="relative">
          {resortImage?.map((item, id) => (
            <motion.div
              key={id}
              className="mb-4 relative"
              onHoverStart={() => setHoveredIndex(id)}
              onHoverEnd={() => setHoveredIndex(null)}
              onClick={() => handleItemClick(item)}
            >
              {item?.id === currentImage?.id ? (
                <motion.h2
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="w-full text-white font-medium text-start leading-normal capitalize cursor-pointer"
                >
                  {currentImage?.name || ""}
                </motion.h2>
              ) : (
                <div className="flex items-center group cursor-pointer">
                  <motion.div
                    className={`ms-1 size-4 rounded-full transition-all duration-300 ${
                      hoveredIndex === id ? "bg-blue-500" : "bg-blue-100"
                    }`}
                    whileHover={{ scale: 1.2 }}
                  >
                    &nbsp;
                  </motion.div>
                  <AnimatePresence>
                    {hoveredIndex === id && (
                      <motion.span
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="ml-3 text-white/80 text-sm capitalize"
                      >
                        {item.name}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={increment}
          disabled={currentImage?.id === resortImage.length - 1}
          className="mt-4 text-white disabled:opacity-25 transition-all duration-300"
        >
          <ChevronDownCircle className="size-8" />
        </motion.button>
      </div>
    </motion.div>
  );
}

export default LeftSection;
