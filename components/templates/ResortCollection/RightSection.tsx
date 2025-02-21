import { mockCarouselData } from "@/components/lib/rawData";
import { AppleCardCarousel, Card } from "@/components/shared/ResortCollections";
import React from "react";

interface PageProps {
  heading: string;
  description: string;
}

function RightSection({ description, heading }: PageProps) {
  const cards = mockCarouselData.map((card, index) => {
    const item = {
      id: card.id,
      src: card?.src || "",
      title: card?.title || "",
      category: card?.category || "",
    };
    return <Card key={index} index={index} card={item} />;
  });

  return (
    <div className="mt-[3%] w-7/12 ps-10 py-10 relative">
      <div className="py-2 pe-20 w-full h-full">
        <h1 className="text-end text-[40px] text-amber-400 leading-relaxed">
          {heading}
        </h1>
        <p className="my-4 text-end text-[20px] text-white leading-relaxed">
          {description}
        </p>

        {/* Collection Images */}
        <div className="absolute -left-[15%]">
          <AppleCardCarousel items={cards} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
