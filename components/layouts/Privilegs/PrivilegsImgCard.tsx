import { BlurImage } from "@/components/ui/BluerImage";
import { useRouter } from "next/router";
import React from "react";

interface PageProps {
  title: string;
  photo: string;
  link: string;
}

function PrivilegsImgCard({ photo, title, link }: PageProps) {
  const router = useRouter();

  return (
    <div className="relative h-[500px] min-w-[450px] max-w-md rounded-2xl shadow-sm">
      <BlurImage
        src={photo}
        alt={title}
        width={450}
        height={500}
        className="w-full h-full object-cover rounded-2xl"
      />
      <button
        className="px-9 pb-6 absolute top-0 left-0 flex justify-start items-end bg-black/50 z-10 w-full h-full rounded-2xl"
        onClick={() => router.push(link)}
      >
        <h2 className="text-white leading-relaxed">{title}</h2>
      </button>
    </div>
  );
}

export default PrivilegsImgCard;
