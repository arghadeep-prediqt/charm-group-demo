import { membersReviewData } from "@/components/lib/rawData";
import { BlurImage } from "@/components/ui/BluerImage";
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function MemberReview() {
  return (
    <Swiper
      pagination={{
        type: "fraction",
      }}
      navigation={true}
      modules={[Navigation]}
      slidesPerView={2.3}
      spaceBetween={0}
      // autoplay={{
      //   delay: 2500,
      //   disableOnInteraction: false,
      // }}
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

function MemberCard({ name, comment }: MemberCardProps) {
  return (
    <div className="h-full w-full z-10">
      <div className="w-[90%] mx-auto h-full border border-amber-200 bg-amber-50 -z-10 rounded-3xl ps-8 pe-4 pt-4 text-start">
        <div className="ps-4 pe-9">
          <div className="mt-[4%]">
            <BlurImage
              src="https://img.icons8.com/3d-fluency/100/user-male-circle.png"
              alt="user"
              width={100}
              height={100}
              className="size-16 object-cover rounded-full border border-gray-200 bg-white"
            />
            <h2 className="mt-2 font-normal text-[23px] leading-relaxed capitalize">
              {name}
            </h2>
          </div>

          <p className="text-p1-r line-clamp-[9] mt-[4%] text-justify">
            {comment}
          </p>
        </div>
      </div>
    </div>
  );
}
