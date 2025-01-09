import { BlurImage } from "@/components/ui/BluerImage";
import dynamic from "next/dynamic";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow } from "swiper/modules";

const Container = dynamic(() => import("@/components/shared/Container"));

type Experience = {
  id: number;
  title: string;
  image: string;
};

const experiences: Experience[] = [
  {
    id: 0,
    title: "Hiking & Trekking",
    image:
      "https://images.unsplash.com/photo-1484264883846-eb04404af310?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 1,
    title: "Snorkeling",
    image:
      "https://images.unsplash.com/photo-1708487864802-a85aa984c93a?q=80&w=1929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Safari",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Zip Lining",
    image:
      "https://images.unsplash.com/photo-1648853070657-6d58398bee93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Historical Tours ",
    image:
      "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "Heritage Villages",
    image:
      "https://images.unsplash.com/photo-1706612625425-3f14f487e548?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    title: "Spa & Wellness Retreats",
    image:
      "https://images.unsplash.com/photo-1491510736257-3ad769ff47b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    title: "Yacht Cruises",
    image:
      "https://images.unsplash.com/photo-1598695643539-f47d01094dee?q=80&w=2115&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    title: "Hot Air Ballooning",
    image:
      "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

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
