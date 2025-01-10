import { BlurImage } from "@/components/ui/BluerImage";
import dynamic from "next/dynamic";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { experiences } from "@/components/lib/rawData";

const Container = dynamic(() => import("@/components/shared/Container"));

const ExperienceSection: React.FC = () => {
  return (
    <React.Fragment>
      {/* Header */}
      <Container className="py-2 mt-3">
        <h1 className="text-[40px] leading-relaxed">Craft Your Memories</h1>
        <p className="text-p1-m text-gray-500 leading-relaxed">
          Indulge in hands-on activities and delightful moments with family and
          friends.
        </p>
      </Container>

      <Container className="">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 1,
            stretch: 50,
            depth: 50,
            modifier: 10,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="customSwiper"
        >
          {experiences.map((experience, index) => (
            <SwiperSlide key={index}>
              <BlurImage
                src={experience.image}
                alt={`${index}`}
                width={1200}
                height={100}
                className="w-full h-full object-cover rounded-xl bg-gray-100 "
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/65 to-transparent rounded-xl flex justify-start items-end px-6 py-6">
                <h1 className="text-white">{experience.title}</h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </React.Fragment>
  );
};

export default ExperienceSection;
