import { BlurImage } from "@/components/ui/BluerImage";
import { CalendarFold, Dot, MapPin, User } from "lucide-react";
import { useRouter } from "next/router";
import React from "react";

interface PageProps {
  name: string;
}

const resortImage = [
  "https://static-clubmahindra.gumlet.io/storage/app/media/Acacis%20Palm/Kandaghat/Kanha/Varca/Jaisalmer/Hatgad/mussoorie/mashobra/netrang/naldehra/Naukuchital/snow%20peacks/white%20meadows%20manali/WHMW_Exterior_02.jpg",
  "https://static-clubmahindra.gumlet.io/storage/app/media/Acacis%20Palm/Kandaghat/Kanha/Varca/Jaisalmer/Hatgad/mussoorie/mashobra/netrang/naldehra/Naukuchital/snow%20peacks/white%20meadows%20manali/WHMW_Exterior_04.jpg",
  "https://static-clubmahindra.gumlet.io/storage/app/media/Acacis%20Palm/Kandaghat/Kanha/Varca/Jaisalmer/Hatgad/mussoorie/mashobra/netrang/naldehra/Naukuchital/snow%20peacks/white%20meadows%20manali/WHMW_Hu_05.jpg",
];

function RightBookSection({ name }: PageProps) {
  const router = useRouter();

  return (
    <div className="mb-3 bg-gray-50 p-6 rounded-xl border border-gray-200">
      <h3 className="capitalize text-[21px] font-medium">{name}</h3>
      <p className="my-2 text-p2-r text-gray-600">Vung Tau province, Vietnam</p>

      <div className="mt-5 flex justify-start items-center gap-x-1">
        <button className="border-none text-p3-m text-sky-500">
          15 Photos
        </button>
        <Dot className="size-7 text-gray-400" />
        <button className="border-none text-p3-m text-sky-500">2 Videos</button>
      </div>

      <div className="w-full mb-12 mt-2 flex justify-start items-center flex-wrap gap-2">
        {resortImage?.map((photo, id) => (
          <BlurImage
            key={id}
            src={photo}
            alt="image"
            width={70}
            height={65}
            className="w-[86px] h-[76px] object-cover rounded-lg"
          />
        ))}
      </div>

      <div className="">
        <div className="mt-3 pb-3 flex justify-start items-center gap-x-3 border-b border-gray-300">
          <MapPin className="size-6 text-sky-500" />
          <p className="text-p1-r w-[90%] capitalize">{name}</p>
        </div>

        <div className="mt-3 py-3 flex justify-start items-center gap-x-3 border-b border-gray-300">
          <CalendarFold className="size-6 text-sky-500" />
          <p className="text-p1-r w-[90%] text-sky-500">Select Dates</p>
        </div>

        <div className="mt-3 py-3 flex justify-start items-center gap-x-3 border-b border-gray-300">
          <User className="size-6 text-sky-500" />
          <p className="text-p1-r w-[90%]">2 Adults</p>
        </div>

        <div className="mt-[15%] flex justify-center items-center">
          <button
            onClick={() =>
              router.push(
                `/my_bookings/${name.split(" ").join("%20")}?type=view`
              )
            }
            className="bg-sky-400 text-white px-6 py-2 w-full rounded-full text-p1-b"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default RightBookSection;
