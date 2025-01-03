import { BlurImage } from "@/components/ui/BluerImage";
import React from "react";

interface PageProps {
  photo: string;
  name: string;
}

function AminitesBox({ name, photo }: PageProps) {
  return (
    <div className="bg-gray-50 border border-gray-200 w-2/12 p-3 flex flex-col justify-center items-center rounded-lg gap-3">
      <BlurImage
        src={photo}
        alt={name}
        width={50}
        height={50}
        className="size-10 object-cover"
      />
      <p className="w-full text-p2-r text-wrap break-words text-center">
        {name}
      </p>
    </div>
  );
}

export default AminitesBox;
