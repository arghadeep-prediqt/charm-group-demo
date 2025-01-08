import { CurrentSectionProps } from "@/components/@types/pages";
import { resortImage } from "@/components/lib/rawData";
import { BlurImage } from "@/components/ui/BluerImage";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useMemo } from "react";

const RightSection = dynamic(
  () => import("@/components/templates/ResortCollection/RightSection")
);
const LeftSection = dynamic(
  () => import("@/components/templates/ResortCollection/LeftSection")
);
const NavContainer = dynamic(() => import("@/components/shared/NavContainer"));

function ResortCollectionPage() {
  const router = useRouter();
  const section = String(router?.query?.section) || "";

  const currentImage: CurrentSectionProps = useMemo(() => {
    const filterSection = resortImage.filter(
      (item) =>
        item.name.split(" ").join("").toLocaleLowerCase() ===
        section.split(" ").join("").toLocaleLowerCase()
    );
    return filterSection[0];
  }, [section]);

  return (
    <NavContainer>
      <div className="h-[93vh] w-screen relative">
        <BlurImage
          src={currentImage?.image || "/images/map.png"}
          alt={currentImage?.name || "hero"}
          width={1920}
          height={1080}
          className="w-full h-full object-cover object-top"
        />

        <div className="absolute top-0 left-0 bg-black/60 w-full h-full flex justify-end items-start overflow-hidden">
          <LeftSection currentImage={currentImage} />
          <RightSection
            description={currentImage?.description}
            heading={currentImage?.heading}
          />
        </div>
      </div>
    </NavContainer>
  );
}

export default ResortCollectionPage;
