import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { BlurImage } from "@/components/ui/BluerImage";
import {
  CalendarDays,
  ChevronRightCircle,
  MapPin,
  Star,
  ArrowRight,
} from "lucide-react";
import { useRouter } from "next/router";
import { resortImage } from "@/components/lib/rawData";
import { motion } from "framer-motion";

const Container = dynamic(() => import("@/components/shared/Container"));

function Resorts() {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate featured resorts
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % Math.min(4, resortImage.length));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-16 bg-gradient-to-b from-white to-blue-50">
      <Container>
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 py-1.5 px-3 bg-blue-50 text-blue-600 rounded-full mb-4"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Star className="size-4 fill-blue-500 text-blue-500" />
              <span className="text-sm font-medium">
                Handpicked Destinations
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Extraordinary{" "}
              <span className="bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
                Getaways
              </span>
            </h1>

            <p className="text-lg text-gray-600">
              Discover handpicked resorts set in stunning locations, designed to
              make your getaways unforgettable and create memories that last a
              lifetime.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.button
              onClick={() =>
                router.push("/resort_collection?section=unexplored%20paradises")
              }
              className="group flex items-center gap-2 py-3 px-6 bg-white text-blue-600 border border-blue-200 rounded-full shadow-sm hover:bg-blue-50 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="font-medium">Explore All Destinations</span>
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>

        {/* Featured Resort */}
        <motion.div
          className="mb-12 relative rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="relative aspect-[21/9] overflow-hidden">
            <BlurImage
              src={
                resortImage[activeIndex].featuredImage ||
                resortImage[activeIndex].image
              }
              alt={resortImage[activeIndex].name}
              width={1920}
              height={820}
              className="w-full h-full object-cover transition-transform duration-10000 ease-out hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
                <div className="flex items-center gap-2 text-white/90 mb-3">
                  <MapPin className="size-5" />
                  <span className="text-lg">
                    {resortImage[activeIndex].location || "Exclusive Location"}
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {resortImage[activeIndex].name}
                </h2>

                <p className="text-white/90 text-lg max-w-2xl mb-6">
                  {resortImage[activeIndex].description ||
                    "Experience luxury and comfort in this stunning resort, offering breathtaking views and world-class amenities."}
                </p>

                <motion.button
                  onClick={() =>
                    router.push(
                      `/resort_collection?section=${resortImage[
                        activeIndex
                      ].name
                        .split(" ")
                        .join("%20")
                        .toLocaleLowerCase()}`
                    )
                  }
                  className="flex items-center gap-2 py-3 px-6 bg-white text-blue-600 rounded-full shadow-md hover:bg-blue-50 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="font-medium">Discover Resort</span>
                  <ChevronRightCircle className="size-5" />
                </motion.button>
              </div>
            </div>
          </div>

          {/* Resort Selector Dots */}
          <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex gap-2">
            {resortImage.slice(0, 4).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`size-3 rounded-full transition-all ${
                  activeIndex === idx
                    ? "bg-white scale-110"
                    : "bg-white/50 hover:bg-white/70"
                }`}
                aria-label={`View resort ${idx + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.button
            onClick={() => router.push("/session_chart")}
            className="flex items-center gap-3 py-3 px-6 bg-blue-50 text-blue-600 border border-blue-200 rounded-full shadow-sm hover:bg-blue-100 transition-colors"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 4px 12px rgba(59, 130, 246, 0.15)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <CalendarDays className="size-5" />
            <span className="font-medium">
              Seasonal Calendar for Holiday Planning
            </span>
          </motion.button>
        </motion.div>
      </Container>
    </div>
  );
}

export default Resorts;
