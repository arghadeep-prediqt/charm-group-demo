import { DistrictResorts } from "@/components/@types/pages";
import { BlurImage } from "@/components/ui/BluerImage";
import { useRouter } from "next/router";
import React from "react";

function SingleResortCol({ district, photo, resorts }: DistrictResorts) {
  const router = useRouter();

  return (
    <div className="px-2 py-2 w-3/12">
      <div className="relative">
        <BlurImage
          src={photo}
          alt={district}
          width={400}
          height={200}
          className="w-full h-[200px] object-cover bg-gray-300 rounded-xl"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/10 flex justify-center items-center rounded-xl">
          <p
            className="text-[22px] leading-tight font-medium text-center px-12 text-white"
            style={{ textShadow: "0 3px 6px #000" }}
          >
            {district}
          </p>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="flex flex-col justify-start items-start divide-y divide-gray-300">
        {resorts?.map((item, id) => (
          <button
            key={id}
            onClick={() =>
              router.push(
                `/our_resorts/${item.name
                  ?.split(" ")
                  .join("%20")
                  .toLocaleLowerCase()}`
              )
            }
            className="py-4 w-full text-start focus:outline-none"
          >
            <p className="text-p1-m text-start capitalize leading-tight">
              {item.name}
            </p>
            <p className="text-p2-r font-light capitalize leading-tight mt-1.5">
              {item.location}, {district}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default SingleResortCol;
