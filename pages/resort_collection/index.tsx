import { CurrentSectionProps } from "@/components/@types/pages";
import { resortImage } from "@/components/lib/rawData";
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
      <div className="h-[90vh] flex justify-start items-start">
        <LeftSection currentImage={currentImage} />
        <RightSection
          currentkey={currentImage?.name
            .split(" ")
            .join("")
            .toLocaleLowerCase()}
        />
      </div>
    </NavContainer>
  );
}

export default ResortCollectionPage;
