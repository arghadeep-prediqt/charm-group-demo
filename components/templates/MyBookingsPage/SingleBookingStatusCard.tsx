import { BlurImage } from "@/components/ui/BluerImage";
import { useRouter } from "next/router";
import React, { useMemo } from "react";

interface PageProps {
  _id: string;
  title: string;
  photo: string;
  startDate: string;
  totalDays: number;
  status: string;
}

function SingleBookingStatusCard({
  _id,
  title,
  photo,
  startDate,
  totalDays,
  status,
}: PageProps) {
  const router = useRouter();
  const randomIdGen = useMemo((): number => {
    return Math.floor(10000 + Math.random() * 90000);
  }, []);

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
              <p className="text-p1-r text-gray-700">2 Adult</p>
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
              <p className="text-p1-r text-gray-700">{randomIdGen}</p>
            </div>
          </div>

          <div className="pt-2 flex justify-start items-center gap-x-3 divide-x divide-primary-500">
            <button
              onClick={() => router.push(`/my_bookings/${_id}?type=view`)}
              className="text-p1-b text-amber-500"
            >
              View Booking
            </button>

            {status !== "CANCELLED" && (
              <button
                onClick={() => router.push(`/my_bookings/${_id}?type=modify`)}
                className="text-p1-b ps-3 text-amber-500"
              >
                Modify Booking
              </button>
            )}
          </div>
        </div>

        {/* Second Col */}
        <div className="w-4/12  flex justify-center items-center">
          <p className="text-p1-r text-white bg-[#00509da9] px-3 py-1 rounded-md">
            {startDate}
          </p>
        </div>
        {/* Third Col */}

        <div className="w-3/12 pe-3">
          <div className="flex justify-between items-center">
            <div className="flex justify-start items-center gap-x-3 py-1 ps-1 pe-4 bg-amber-300 rounded-full">
              <BlurImage
                src="https://holidays.clubmahindra.com/images/utilised.svg"
                alt="logo"
                width={100}
                height={100}
                className="size-6 object-contain"
              />
              <p className="text-p2-m">{totalDays} days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBookingStatusCard;
