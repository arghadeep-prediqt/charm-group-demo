import { BlurImage } from "@/components/ui/BluerImage";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/router";
import React from "react";

interface PageProps {
  title: string;
  photo: string;
  link: string;
}

function PropertyCard({ link, photo, title }: PageProps) {
  const router = useRouter();

  return (
    <div className="w-[200px] relative flex-1">
      <BlurImage
        src={photo}
        alt="Ladakh"
        width={600}
        height={900}
        className="w-full h-auto aspect-square object-cover bg-gray-200 rounded-2xl"
      />

      <div className="py-2 px-3 absolute top-0 left-0 w-full h-full rounded-2xl bg-gradient-to-t from-black/50 to-black/10 flex justify-start items-end">
        <div className="w-full flex justify-start items-center gap-x-2">
          <p className="w-10/12 my-2 text-p1-m text-white capitalize truncate">
            {title}
          </p>

          <button
            onClick={() => router.push(link)}
            className="w-fit border border-white rounded-full active:opacity-65"
          >
            <ChevronRight className="m-1 size-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
