import { membersReviewData } from "@/components/lib/rawData";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import React from "react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function MemberReview() {
  return (
    <Swiper
      pagination={{
        type: "fraction",
      }}
      navigation={true}
      modules={[Navigation, Autoplay]}
      slidesPerView={2.3}
      spaceBetween={24}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="mySwiper"
    >
      {membersReviewData?.map((item, id) => (
        <SwiperSlide key={id}>
          <MemberCard {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default MemberReview;

interface MemberCardProps {
  name: string;
  created: string;
  comment: string;
}

function MemberCard({ name, comment, created }: MemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full w-full p-2"
    >
      <div className="relative h-full bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 shadow-sm border border-blue-100">
        {/* Quote Icon */}
        <div className="absolute -top-3 -left-3">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-200 rounded-full blur-lg opacity-50" />
            <div className="relative bg-white p-2 rounded-full shadow-sm border border-blue-100">
              <Quote className="size-5 text-blue-500" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4">
          {/* User Info */}
          <div className="flex items-center gap-4">
            <div className="relative"></div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
              <p className="text-sm text-gray-500">{created}</p>
            </div>
          </div>

          {/* Review Text */}
          <div className="relative">
            <p className="text-gray-600 leading-relaxed line-clamp-[7] text-pretty">
              {comment}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
