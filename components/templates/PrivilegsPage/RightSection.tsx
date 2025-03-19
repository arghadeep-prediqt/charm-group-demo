import { mockCarouselData, privilegesSideNav } from "@/components/lib/rawData";
import { AppleCardCarousel, Card } from "@/components/shared/AppleCardCarousel";
import { BlurImage } from "@/components/ui/BluerImage";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

interface HeadlineProps {
  heading: string;
  path: string;
  title: string;
}

function RightSection() {
  const router = useRouter();
  const section = String(router?.query?.section) || "";
  const [headline, setHeadline] = useState<HeadlineProps>();

  useEffect(() => {
    privilegesSideNav?.filter((item) =>
      item.children.filter((prop) => {
        if (prop.title === section) {
          // console.log(prop);
          setHeadline(prop);
        }
      })
    );
  }, [section]);

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
    <div className="w-9/12 h-full flex flex-col justify-center items-start">
      <h3 className="leading-relaxed">
        {headline?.heading} {""}
        <span className="text-blue-600 capitalize">{headline?.title}</span>
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
          {headline?.title}
        </p>
      </div>

      <AppleCardCarousel items={cards} />
    </div>
  );
}

export default RightSection;
