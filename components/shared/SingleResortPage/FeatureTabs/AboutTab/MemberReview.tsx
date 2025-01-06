import { membersReviewData } from "@/components/lib/rawData";
import { BlurImage } from "@/components/ui/BluerImage";
import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function MemberReview() {
  return (
    <Swiper
      pagination={{
        type: "fraction",
      }}
      navigation={true}
      modules={[Navigation, Autoplay]}
      slidesPerView={3}
      spaceBetween={5}
      //   autoplay={{
      //     delay: 2500,
      //     disableOnInteraction: false,
      //   }}
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

function MemberCard({ name, created, comment }: MemberCardProps) {
  return (
    <div className="relative h-full z-10">
      <BlurImage
        src="https://holidays.clubmahindra.com/images/userStaticImage.jpg"
        alt="user"
        width={100}
        height={100}
        className="size-28 object-cover rounded-full border border-gray-200 mx-auto bg-white"
      />

      <div className="absolute bottom-0 left-[50%] -translate-x-[50%] w-[90%] h-[89%] border border-gray-200 bg-gray-50 -z-10 rounded-3xl ps-8 pe-4 pt-4 text-start">
        <BlurImage
          src={
            "https://holidays.clubmahindra.com/images/resortdetails/Quotes.svg"
          }
          alt="quote"
          width={100}
          height={100}
          className="size-16 object-fill"
        />
        <div className="ps-4 pe-2 pt-2">
          <h2 className="font-normal text-[23px] capitalize">{name}</h2>
          <p className="text-[12px] capitalize">member since {created}</p>
          <p className="text-p1-r line-clamp-[8] mt-3">{comment}</p>
        </div>
      </div>
    </div>
  );
}
