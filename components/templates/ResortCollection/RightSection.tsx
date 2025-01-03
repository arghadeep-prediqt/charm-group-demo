import { mockCarouselData, resortImage } from "@/components/lib/rawData";
import { AppleCardCarousel, Card } from "@/components/shared/ResortCollections";
import { useRouter } from "next/router";
import React from "react";

interface PageProps {
  currentkey: string;
}

function RightSection({ currentkey }: PageProps) {
  const router = useRouter();

  const cards = mockCarouselData.map((card, index) => {
    const item = {
      src: card?.src || "",
      title: card?.title || "",
      category: card?.category || "",
    };
    return <Card key={index} index={index} card={item} />;
  });

  return (
    <div className="mt-[3%] ps-10 py-10 relative">
      <h1 className="text-[40px] leading-relaxed">Resort Collections</h1>
      <p className="text-[17px] text-primary-600 leading-relaxed">
        Explore Premium Properties from Our Curated Collection
      </p>

      {/* Tab Nav Section */}
      <div className="mt-16 flex justify-between items-start gap-x-4 border-b border-gray-300">
        {resortImage?.map((item, id) => (
          <button
            key={id}
            onClick={() =>
              router.push(
                `/resort_collection?section=${item?.name
                  ?.split(" ")
                  .join("%20")
                  .toLocaleLowerCase()}`
              )
            }
            className={`capitalize px-2 py-1 border-b-2 ${
              currentkey === item.name.split(" ").join("").toLocaleLowerCase()
                ? "border-sky-500 text-sky-500 text-p1-b"
                : "border-transparent text-primary-600 text-p1-r"
            }`}
          >
            {item.name}
          </button>
        ))}
      </div>

      {/* Collection Images */}
      <div className="absolute -left-[15%]">
        <AppleCardCarousel items={cards} />
      </div>
    </div>
  );
}

export default RightSection;
