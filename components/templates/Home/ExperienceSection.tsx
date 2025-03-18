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
    <section className="py-16 bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-30"></div>

      {/* Header */}
      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-blue-600 to-teal-500 bg-clip-text text-transparent">
            Craft Your Memories
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Indulge in hands-on activities and delightful moments with family
            and friends that will last a lifetime.
          </p>
        </div>
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
    </section>
  );
};

export default ExperienceSection;
