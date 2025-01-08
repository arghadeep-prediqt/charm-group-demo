import { BlurImage } from "@/components/ui/BluerImage";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/router";
import React from "react";

function SingleResortCard() {
  const router = useRouter();
  const allResort = useAppSelector((state) => state.resort);

  return (
    <div className="flex flex-wrap justify-between items-start gap-4">
      {allResort.resorts?.map((item, id) => (
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
          className="w-[48%] h-[200px] relative text-start focus:outline-none"
        >
          <BlurImage
            src={allResort?.photo}
            alt={allResort?.name}
            width={200}
            height={200}
            className="w-full h-full object-cover bg-gray-300 rounded-xl shadow-sm"
          />
          <div className="p-4 absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/90 to-black/30 flex flex-col justify-end items-start rounded-xl border-2 border-amber-300">
            <p
              className="text-white text-p1-b leading-relaxed line-clamp-1"
              style={{ textShadow: "0 3px 6px #000" }}
            >
              {item.name}
            </p>
            <p
              className="mt-1 text-white text-p2-r leading-relaxed"
              style={{ textShadow: "0 3px 6px #000" }}
            >
              {item.location}
            </p>
          </div>
        </button>
      ))}
    </div>
  );
}

export default SingleResortCard;
