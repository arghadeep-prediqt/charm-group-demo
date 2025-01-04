import { BlurImage } from "@/components/ui/BluerImage";
import { ArrowRight } from "lucide-react";
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
    <div className="w-[200px] flex-1 bg-gray-200 rounded-2xl">
      <BlurImage
        src={photo}
        alt="Ladakh"
        width={600}
        height={900}
        className="w-full h-[250px] object-cover bg-gray-200 rounded-tl-2xl rounded-tr-2xl"
      />
      <div className="py-2 w-full flex justify-start items-center gap-x-2">
        <p className="w-10/12 my-2 px-2 text-p1-b capitalize truncate">
          {title}
        </p>

        <button
          onClick={() => router.push(link)}
          className="w-fit border border-sky-400 rounded-full active:opacity-65"
        >
          <ArrowRight className="m-1 size-4 text-sky-500" />
        </button>
      </div>
    </div>
  );
}

export default PropertyCard;
