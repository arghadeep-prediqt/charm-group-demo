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
    <div className="px-12 pt-16 h-[500px] min-w-[450px] max-w-md bg-yellow-300 rounded-2xl shadow-sm">
      <h1 className=" mb-2 font-medium">{title}</h1>
      <p className="mt-[10%] text-[18px] text-gray-700 break-words leading-relaxed">
        {description}
      </p>

      <button
        onClick={() => router.push(link)}
        className="mt-[10%] py-2.5 px-4 w-[170px] bg-white border-2 border-slate-400 rounded-full text-slate-600 text-p1-b shadow-sm"
      >
        Get It Now
      </button>
    </div>
  );
}

export default PrivilegsCard;
