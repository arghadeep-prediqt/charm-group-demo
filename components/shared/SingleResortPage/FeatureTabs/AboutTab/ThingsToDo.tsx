import { toDoResortData } from "@/components/lib/rawData";
import { BlurImage } from "@/components/ui/BluerImage";
import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function ThingsToDoSection() {
  return (
    <Swiper
      pagination={{
        type: "fraction",
      }}
      navigation={true}
      modules={[Navigation, Autoplay]}
      slidesPerView={2.4}
      spaceBetween={0}
      // autoplay={{
      //   delay: 2500,
      //   disableOnInteraction: false,
      // }}
      className="mySwiper"
    >
      {toDoResortData?.map((item, id) => (
        <SwiperSlide key={id} className="relative">
          <BlurImage
            src={item.photo}
            alt="image"
            width={1200}
            height={700}
            className="w-full h-full object-cover"
          />
          <div className="p-4 absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/50 to-black/10 flex flex-col justify-end items-start">
            <h3 className="mb-3 text-start text-white">{item.title}</h3>
            <p className="text-start text-p2-r text-white">
              {item.description}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ThingsToDoSection;
