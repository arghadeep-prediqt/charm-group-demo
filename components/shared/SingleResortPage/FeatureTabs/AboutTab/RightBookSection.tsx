import { BlurImage } from "@/components/ui/BluerImage";
import ExpandedCalendar from "@/components/ui/ExpandedCalender";
import { format } from "date-fns";
import { CalendarFold, Dot, MapPin, User } from "lucide-react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useMemo, useState } from "react";

const CustomButton = dynamic(() => import("@/components/ui/CustomButton"));

interface PageProps {
  name: string;
}

const resortImage = [
  "https://charm.vn/wp-content/uploads/2022/12/Charm-Resort-Ho-Tram-3.jpg",
  "https://charm.vn/wp-content/uploads/2022/12/Charm-Resort-Ho-Tram-11.jpg",
  "https://charm.vn/wp-content/uploads/2022/12/Charm-Resort-Ho-Tram-12.jpg",
];

function RightBookSection({ name }: PageProps) {
  const router = useRouter();
  const [showCalender, setShowCalendar] = useState<boolean>(false);
  const [selectedRange, setSelectedRange] = useState<{
    startDate: Date | null;
    endDate: Date | null;
  }>({
    startDate: null,
    endDate: null,
  });

  const handleDateSelect = (date: Date) => {
    if (
      !selectedRange.startDate ||
      (selectedRange.startDate && selectedRange.endDate)
    ) {
      // Start a new range
      setSelectedRange({ startDate: date, endDate: null });
    } else {
      // Set the end date if it's after the start date
      if (date > selectedRange.startDate) {
        setSelectedRange({
          startDate: selectedRange.startDate,
          endDate: date,
        });
      } else {
        // Reset the range if the end date is before the start date
        setSelectedRange({ startDate: date, endDate: null });
      }
    }
  };

  const renderSelectedRange = useMemo(() => {
    if (selectedRange.startDate && selectedRange.endDate) {
      return `${format(selectedRange.startDate, "MMM d, yyyy")} ~ ${format(
        selectedRange.endDate,
        "MMM d, yyyy"
      )}`;
    } else if (selectedRange.startDate) {
      return `${format(selectedRange.startDate, "MMM d, yyyy")}`;
    }
    return "Check-in & Check-out";
  }, [selectedRange.endDate, selectedRange.startDate]);

  return (
    <div className="mb-3 bg-gray-50 p-6 rounded-xl border border-gray-200">
      <h3 className="capitalize text-[21px] font-medium">{name}</h3>
      <p className="my-2 text-p2-r text-gray-600">Vung Tau province, Vietnam</p>

      <div className="mt-5 flex justify-start items-center gap-x-1">
        <button className="border-none text-p3-m text-amber-500">
          15 Photos
        </button>
        <Dot className="size-7 text-gray-400" />
        <button className="border-none text-p3-m text-amber-500">
          2 Videos
        </button>
      </div>

      <div className="w-full mb-12 mt-2 flex justify-start items-center flex-wrap gap-2">
        {resortImage?.map((photo, id) => (
          <BlurImage
            key={id}
            src={photo}
            alt="image"
            width={70}
            height={65}
            className="w-[86px] h-[76px] object-cover p-1 bg-amber-50 border border-amber-300 rounded-lg"
          />
        ))}
      </div>

      <div className="">
        <div className="mt-3 pb-3 flex justify-start items-center gap-x-3 border-b border-gray-300">
          <MapPin className="size-6 text-amber-500" />
          <p className="text-p1-r w-[90%] capitalize">{name}</p>
        </div>

        <div className="mt-3 py-3 flex justify-start items-center gap-x-3 border-b border-gray-300">
          <CustomButton
            isAutoWidth={true}
            name={renderSelectedRange}
            isFilled={false}
            changeFn={() => setShowCalendar(true)}
            icon={<CalendarFold className="size-6 text-amber-500" />}
          />
        </div>

        <div className="mt-3 py-3 flex justify-start items-center gap-x-3 border-b border-gray-300">
          <User className="size-6 text-amber-500" />
          <p className="text-p1-r w-[90%]">2 Adults</p>
        </div>

        <div className="mt-[15%] flex justify-center items-center">
          <button
            onClick={() =>
              router.push(
                `/my_bookings/${name.split(" ").join("%20")}?type=view`
              )
            }
            className="bg-amber-50 text-amber-500 px-6 py-2 w-full rounded-full text-p1-b border border-amber-400"
          >
            Book Now
          </button>
        </div>
      </div>

      {showCalender && (
        <ExpandedCalendar
          selectedRange={selectedRange}
          onDateSelect={handleDateSelect}
          setShowCalendar={setShowCalendar}
        />
      )}
    </div>
  );
}

export default RightBookSection;
