import { mockCarouselData, travelDiaries } from "@/components/lib/rawData";
import { BlurImage } from "@/components/ui/BluerImage";
import { EllipsisVertical } from "lucide-react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React from "react";

const NoEvents = dynamic(() => import("./NoEvents"));

function UpcomingTab() {
  return (
    <div className="relative h-full">
      <div className="absolute top-0 left-10 w-[2px] h-full bg-gray-300"></div>
      <div className="ps-[35px] py-6 relative flex justify-start items-center">
        <div className="size-3 bg-emerald-400 rounded-full"></div>
        <h3 className="ps-6 font-medium">Upcoming Holidays (3)</h3>
      </div>

      {Array(3)
        .fill(0)
        ?.map((_, id) => (
          <div key={id} className="pt-3 pb-5">
            <SingleCard
              title={travelDiaries[id].resort}
              photo={mockCarouselData[id].src}
            />
          </div>
        ))}

      <div className="ps-[35px] py-8 relative flex justify-start items-center">
        <div className="size-3 border-2 border-emerald-400 bg-white rounded-full"></div>
        <h3 className="ps-6 font-medium">Waitlisted Holidays</h3>
      </div>

      <NoEvents />
    </div>
  );
}

export default UpcomingTab;

interface SingleCardProps {
  title: string;
  photo: string;
}

function SingleCard({ title, photo }: SingleCardProps) {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center gap-x-8 bg-gray-100 rounded-xl ">
      <BlurImage
        src={photo}
        alt="banner Image"
        width={300}
        height={200}
        className="h-[200px] w-[250px] object-cover rounded-xl"
      />
      {/* right Section */}
      <div className="w-full flex justify-between items-start gap-x-3">
        {/* First Col */}
        <div className="w-5/12">
          <h4 className="leading-tight text-[21px] font-medium line-clamp-2">
            {title}
          </h4>

          <div className="py-4 flex justify-start items-center gap-x-6">
            <div className="flex justify-start items-center gap-x-2">
              <BlurImage
                src="https://holidays.clubmahindra.com/images/person.svg"
                alt="user"
                width={100}
                height={100}
                className="size-6 object-contain"
              />
              <p className="text-p1-r text-gray-700">2 Adult | 0 Child</p>
            </div>

            <div className="flex justify-start items-center gap-x-2">
              <BlurImage
                src="https://holidays.clubmahindra.com/images/bed.svg"
                alt="studio"
                width={100}
                height={100}
                className="size-6 object-contain"
              />
              <p className="text-p1-r text-gray-700">1 Studio</p>
            </div>

            <div className="flex justify-start items-center gap-x-2">
              <BlurImage
                src="https://holidays.clubmahindra.com/images/cv.svg"
                alt="cv"
                width={100}
                height={100}
                className="size-6 object-contain"
              />
              <p className="text-p1-r text-gray-700">8711719</p>
            </div>
          </div>

          <div className="pt-2 flex justify-start items-center gap-x-3 divide-x divide-primary-500">
            <button
              onClick={() =>
                router.push(
                  `/my_bookings/${title.split(" ").join("%20")}?type=view`
                )
              }
              className="text-p1-b text-sky-500"
            >
              View Booking
            </button>

            <button
              onClick={() =>
                router.push(
                  `/my_bookings/${title.split(" ").join("%20")}?type=modify`
                )
              }
              className="text-p1-b ps-3 text-sky-500"
            >
              Modify Booking
            </button>
          </div>
        </div>

        {/* Second Col */}
        <div className="w-4/12  flex justify-center items-center">
          <p className="text-p1-r text-white bg-emerald-400 px-3 py-1 rounded-md">
            {"08-10 Feb'25"}
          </p>
        </div>
        {/* Third Col */}

        <div className="w-3/12 pe-3">
          <div className="flex justify-between items-center">
            <div className="flex justify-start items-center gap-x-3 py-1 ps-2 pe-4 bg-yellow-400 rounded-full">
              <BlurImage
                src="https://holidays.clubmahindra.com/images/utilised.svg"
                alt="logo"
                width={100}
                height={100}
                className="size-6 object-contain"
              />
              <p className="text-p2-r">2 days utilised</p>
            </div>
            <button className="active:opacity-65">
              <EllipsisVertical className="size-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
