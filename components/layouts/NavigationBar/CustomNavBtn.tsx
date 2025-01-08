import { BlurImage } from "@/components/ui/BluerImage";
import { useRouter } from "next/router";
import React from "react";

interface PageProps {
  logo: string;
  title: string;
  link?: string;
}

function CustomNavBtn({ logo, title, link = "#" }: PageProps) {
  const router = useRouter();
  return (
    <button
      className="py-2 flex justify-start items-center gap-x-2 leading-relaxed"
      onClick={() => router.push(link)}
    >
      <BlurImage
        src={logo}
        alt={title}
        width={100}
        height={100}
        className="size-6 object-cover"
      />
      <div className="text-start capitalize text-white">
        <p className="text-p1-m leading-tight">{title}</p>
      </div>
    </button>
  );
}

export default CustomNavBtn;
