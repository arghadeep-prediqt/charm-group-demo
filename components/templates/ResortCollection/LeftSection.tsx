import React from "react";
import { CurrentSectionProps } from "@/components/@types/pages";
import { ChevronDownCircle, ChevronUpCircle } from "lucide-react";
import Container from "@/components/shared/Container";
import { resortImage } from "@/components/lib/rawData";
import { useRouter } from "next/router";

interface PageProps {
  currentImage: CurrentSectionProps;
}

function LeftSection({ currentImage }: PageProps) {
  const router = useRouter();

  const increment = () => {
    if (currentImage?.id >= resortImage.length - 1) return;
    const next = resortImage[currentImage?.id + 1];
    router.push(
      `/resort_collection?section=${next.name.split(" ").join("%20")}`
    );
  };

  const decrement = () => {
    if (currentImage?.id < 0) return;
    const next = resortImage[currentImage?.id - 1];
    router.push(
      `/resort_collection?section=${next.name.split(" ").join("%20")}`
    );
  };

  return (
    <Container className="w-5/12 relative py-2 h-[85%] flex justify-start items-end">
      <div className="flex flex-col items-start justify-start gap-3">
        <button
          disabled={currentImage?.id === 0}
          onClick={decrement}
          className="mb-4 text-white disabled:opacity-25"
        >
          <ChevronUpCircle className="size-8" />
        </button>
        {resortImage?.map((item, id) => (
          <React.Fragment key={id}>
            {item?.id === currentImage?.id ? (
              <h2 className="w-full text-amber-400 font-medium text-start leading-normal capitalize">
                {currentImage?.name || ""}
              </h2>
            ) : (
              <div className="ms-1 size-4 bg-amber-100 rounded-full">
                &nbsp;
              </div>
            )}
          </React.Fragment>
        ))}

        <button
          onClick={increment}
          disabled={currentImage?.id === resortImage.length - 1}
          className="mt-4 text-white disabled:opacity-25"
        >
          <ChevronDownCircle className="size-8" />
        </button>
      </div>
    </Container>
  );
}

export default LeftSection;
