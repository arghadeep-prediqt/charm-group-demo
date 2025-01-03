import { BlurImage } from "@/components/ui/BluerImage";
import { ArrowRight } from "lucide-react";
import React from "react";

function PropertyCard() {
  return (
    <div className="w-[200px] flex-1 bg-gray-200 rounded-2xl">
      <BlurImage
        src={
          "https://static-clubmahindra.gumlet.io/storage/app/media/Tailormade%20Reccommendations/Ladakh%20350%20x%20450.jpg"
        }
        alt="Ladakh"
        width={600}
        height={900}
        className="w-full h-[270px] object-cover bg-gray-200 rounded-tl-2xl rounded-tr-2xl"
      />
      <div className="py-2 w-full flex justify-start items-center gap-x-2">
        <p className="w-10/12 my-2 px-2 text-p1-b capitalize">
          the driftwood ladakh
        </p>

        <button className="w-fit border border-sky-400 rounded-full active:opacity-65">
          <ArrowRight className="m-1 size-4 text-sky-500" />
        </button>
      </div>
    </div>
  );
}

export default PropertyCard;
