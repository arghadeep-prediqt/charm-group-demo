import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { toDoResortData } from "@/components/lib/rawData";
import { BlurImage } from "@/components/ui/BluerImage";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function ThingsToDoSection() {
  return (
    <Swiper
      pagination={{
        type: "fraction",
      }}
      effect="fade"
      navigation={true}
      modules={[Navigation, Autoplay, EffectFade]}
      slidesPerView={2.4}
      spaceBetween={24}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="mySwiper rounded-2xl overflow-hidden"
    >
      {toDoResortData?.map((item, id) => (
        <SwiperSlide key={id} className="relative group">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-xl"
          >
            <BlurImage
              src={item.photo}
              alt="image"
              width={1200}
              height={700}
              className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300" />

            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-2xl font-semibold text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-200 text-sm leading-relaxed mb-4">
                {item.description}
              </p>
              <button className="flex items-center gap-2 text-white/80 hover:text-white group/btn">
                <span>Learn More</span>
                <ArrowRight className="size-4 transform group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ThingsToDoSection;
