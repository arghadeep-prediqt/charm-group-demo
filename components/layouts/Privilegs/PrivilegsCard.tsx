import { useRouter } from "next/router";
import React from "react";

interface PageProps {
  title: string;
  description: string;
  link: string;
}

function PrivilegsCard({ title, description, link }: PageProps) {
  const router = useRouter();
  return (
    <div className="px-12 pt-16 h-[500px] min-w-[450px] max-w-md bg-[#f5992f] rounded-lg">
      <h1 className="text-white mb-2 font-medium">{title}</h1>
      <p className="mt-[10%] text-[18px] text-gray-100 break-words leading-relaxed">
        {description}
      </p>

      <button
        onClick={() => router.push(link)}
        className="mt-[10%] py-2.5 px-4 w-[170px] bg-white border border-sky-500 rounded-full text-sky-500 text-p1-b"
      >
        Get It Now
      </button>
    </div>
  );
}

export default PrivilegsCard;
