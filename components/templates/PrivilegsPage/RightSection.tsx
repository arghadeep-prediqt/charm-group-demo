import { mockCarouselData } from "@/components/lib/rawData";
import { AppleCardCarousel, Card } from "@/components/shared/AppleCardCarousel";
import { BlurImage } from "@/components/ui/BluerImage";
import { useRouter } from "next/router";
import React from "react";

function RightSection() {
  const router = useRouter();
  const section = String(router?.query?.section) || "";

  const cards = mockCarouselData.map((card, index) => {
    const item = {
      src: card?.src || "",
      title: card?.title || "",
      category: card?.category || "",
    };
    return <Card key={index} index={index} card={item} />;
  });

  return (
    <div className="w-9/12 h-full flex flex-col justify-center items-start">
      <h3 className="leading-relaxed">
        Enjoy a refreshing {""}
        <span className="text-sky-500 capitalize">{section}</span>
      </h3>

      <div className="flex justify-start items-center gap-x-2">
        <BlurImage
          src="https://experiences.clubmahindra.com/front/images/golden-icon1.png"
          alt="percentage"
          width={100}
          height={100}
          className="size-6 object-fill"
        />
        <p className="mt-1 text-p1-r leading-relaxed">
          Flat <span className="font-semibold">10% off</span> on over 100+
          weekend villas
        </p>
      </div>

      <AppleCardCarousel items={cards} />
    </div>
  );
}

export default RightSection;
