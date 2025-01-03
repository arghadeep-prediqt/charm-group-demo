import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { BlurImage } from "@/components/ui/BluerImage";
import { singleResortData } from "@/components/lib/rawData";

function TopCarousel() {
  return (
    <Swiper
      pagination={{
        type: "fraction",
      }}
      navigation={true}
      modules={[Navigation, Autoplay]}
      slidesPerView={1.2}
      spaceBetween={10}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {singleResortData?.map((photo, id) => (
        <SwiperSlide key={id}>
          <BlurImage
            src={photo}
            alt="image"
            width={1400}
            height={600}
            className="w-full h-full object-cover block"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default TopCarousel;
