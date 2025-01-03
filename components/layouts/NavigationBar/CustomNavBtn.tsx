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
      className="flex justify-center items-center gap-x-1.5 text-p3-r leading-relaxed"
      onClick={() => router.push(link)}
    >
      <BlurImage
        src={logo}
        alt={title}
        width={100}
        height={100}
        className="size-6 object-cover"
      />
      {title}
    </button>
  );
}

export default CustomNavBtn;
