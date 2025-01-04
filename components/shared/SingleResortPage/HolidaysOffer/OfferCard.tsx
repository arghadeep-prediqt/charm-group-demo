import { BlurImage } from "@/components/ui/BluerImage";
import { useRouter } from "next/router";
import React from "react";

interface OfferCardProps {
  offerid: string;
  vaild: string;
  link: string;
  photo: string;
}

function OfferCard({ link, offerid, photo, vaild }: OfferCardProps) {
  const router = useRouter();

  return (
    <div className="w-full flex pt-[2em]">
      <div className="w-7/12 bg-[#fef1c9] text-gray-800 h-[40vh] px-16 py-[2em] relative text-center rounded-2xl">
        <div className="h-full flex flex-col gap-4 justify-center items-center">
          <h2 className="text-primary-700">SP Offer : {offerid}</h2>
          <h4 className="mt-2 text-[18px] font-medium text-gray-700">
            Offer Valid Till {vaild}
          </h4>

          <button
            onClick={() => router.push(link)}
            className="mt-1 bg-[#0ec1eb] text-white text-p1-b py-2 px-4 w-full rounded-full active:opacity-65"
          >
            Explore now
          </button>
        </div>
      </div>

      <div className="relative z-10">
        <div className="absolute rounded-full size-8 bg-white -left-5 -top-4"></div>
      </div>

      <div className="w-5/12 h-[40vh] max-w-sm">
        <BlurImage
          src={photo}
          alt={offerid}
          width={600}
          height={900}
          className="w-full h-full rounded-2xl object-cover "
        />
        <div className="relative z-10">
          <div className="absolute rounded-full size-8 bg-white -left-5 -top-3"></div>
        </div>
      </div>
    </div>
  );
}

export default OfferCard;
