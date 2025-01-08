import { DistrictResorts } from "@/components/@types/pages";
import { BlurImage } from "@/components/ui/BluerImage";
import { useAppDispatch } from "@/redux/hooks";
import { addResort } from "@/redux/slice/resortSlice";
import React from "react";

interface PageProps extends DistrictResorts {
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function SingleResortCol({
  district,
  photo,
  resorts,
  setDrawerOpen,
}: PageProps) {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    setDrawerOpen(true);
    dispatch(addResort({ name: district, photo, resorts }));
  };
  return (
    <div className="px-2 py-2 w-3/12">
      <button className="relative w-full h-full" onClick={handleClick}>
        <BlurImage
          src={photo}
          alt={district}
          width={400}
          height={200}
          className="w-full h-[200px] object-cover bg-gray-300 rounded-xl"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/20 flex justify-center items-center rounded-xl">
          <p
            className="text-[22px] leading-tight font-medium text-center px-12 text-white"
            style={{ textShadow: "0 3px 6px #000" }}
          >
            {district}
          </p>
        </div>
      </button>
    </div>
  );
}

export default SingleResortCol;
