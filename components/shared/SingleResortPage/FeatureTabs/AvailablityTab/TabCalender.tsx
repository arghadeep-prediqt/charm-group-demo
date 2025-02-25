import { StatusProps } from "@/components/@types/common";
import { useLazyGetRoomsByResortsQuery } from "@/redux/services/resortApi";
import { MoveLeft, MoveRight } from "lucide-react";
import dynamic from "next/dynamic";
import React, { memo, useEffect, useState } from "react";

const TableCalenderDate = dynamic(() => import("./TableCalenderDate"));

const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
interface Day {
  date: number | null;
  status: StatusProps;
  roomTypes: {
    _id: string;
    type: string;
    available: boolean;
    capacity: number;
    bookedRooms: number;
    totalRooms: number;
  }[];
  // roomTypes: string[];
}

function Calendar({ resort_id, token }: { resort_id: string; token: string }) {
  const today = new Date();
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const currentDate = today.getDate();
  const [getRoomsByResorts, { data: calenderData, isSuccess, isLoading }] =
    useLazyGetRoomsByResortsQuery();

  // console.log(calenderData);

  useEffect(() => {
    if (token) {
      getRoomsByResorts({
        id: resort_id,
        token,
        start: `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-01`,
        end: `${currentYear}-${String(currentMonth + 1).padStart(
          2,
          "0"
        )}-${new Date(currentYear, currentMonth + 1, 0).getDate()}`,
      });
    }
  }, [currentMonth, currentYear, getRoomsByResorts, resort_id, token]);

  const generateCalendarDays = (year: number, month: number) => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const days: Day[] = Array.from(
      { length: firstDay + daysInMonth },
      (_, i) => {
        if (i < firstDay)
          return { date: null, status: "fullyBooked", roomTypes: [] };

        const date = i - firstDay + 1;

        const dateISO = `${year}-${String(month + 1).padStart(2, "0")}-${String(
          date
        ).padStart(2, "0")}`;

        const filterRoom =
          isSuccess &&
          calenderData?.filter(
            (item: { date: string }) => item?.date?.split("T")?.[0] === dateISO
          );

        // Example data for status and roomTypes
        const status: StatusProps =
          date < currentDate &&
          year === today.getFullYear() &&
          month === today.getMonth()
            ? "fullyBooked"
            : filterRoom?.[0]?.available
            ? "available"
            : "fullyBooked";

        // const roomTypes = ["1BR", "2BR", "3BR", "Villa"];

        // console.log(filterRoom?.[0]);

        return { date, status, roomTypes: filterRoom?.[0]?.rooms || [] };
      }
    );

    return days;
  };

  const calendarDays =
    (isSuccess && generateCalendarDays(currentYear, currentMonth)) || [];

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    } else {
      setCurrentMonth((prev) => prev + 1);
    }
  };

  const goToPreviousMonth = () => {
    if (currentMonth > today.getMonth() || currentYear > today.getFullYear()) {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear((prev) => prev - 1);
      } else {
        setCurrentMonth((prev) => prev - 1);
      }
    }
  };

  return (
    <div className="p-4 mt-4 max-w-5xl mx-auto">
      {/* Calendar Header */}
      <header className="flex justify-between items-center gap-x-4 mb-4">
        {/* Navigation Buttons */}
        <div className="flex justify-between items-center w-4/12 pe-6">
          <h2 className="text-lg font-semibold">
            {new Date(currentYear, currentMonth).toLocaleString("default", {
              month: "long",
            })}{" "}
            {currentYear}
          </h2>

          <div className="flex justify-end items-center gap-x-2">
            <button
              className={`text-amber-500 hover:text-amber-500 border border-amber-300 p-2 rounded-full disabled:text-gray-400 disabled:border-gray-300 ${
                currentYear === today.getFullYear() &&
                currentMonth === today.getMonth()
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              onClick={goToPreviousMonth}
              disabled={
                currentYear === today.getFullYear() &&
                currentMonth === today.getMonth()
              }
            >
              <MoveLeft className="size-5" />
            </button>
            <button
              className={`text-amber-500 hover:text-amber-500 border border-amber-300 p-2 rounded-full disabled:text-gray-400 disabled:border-gray-300 ${
                currentYear !== today.getFullYear()
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              onClick={goToNextMonth}
              disabled={currentYear !== today.getFullYear()}
            >
              <MoveRight className="size-5" />
            </button>
          </div>
        </div>

        {/* Legend and Season Indicator */}
        {/* <ul className="w-2/12 flex justify-end items-center flex-wrap gap-x-4 gap-y-2 text-sm">
          <li className="flex justify-start items-center gap-x-1">
            <div className="inline-block size-4 bg-[#E7E6E6] rounded-full mr-2"></div>
            <div className="inline-block size-4 bg-[#FFD966] rounded-full mr-2"></div>
            <div className="inline-block size-4 bg-[#2F5597] rounded-full mr-2"></div>
          </li>
        </ul> */}

        <div className="flex items-center ps-4 w-6/12">
          {/* Availability Legend */}
          <ul className="flex justify-end items-start flex-wrap gap-x-4 gap-y-2 text-sm">
            <li className="flex justify-start items-center gap-x-1">
              <div className="inline-block size-4 bg-[#9370DB] rounded-full mr-2"></div>
              Available Now
            </li>
            {/* <li className="flex justify-start items-center gap-x-1">
              <div className="inline-block size-4 bg-[#FFA500] rounded-full mr-2"></div>
              Join Waitlist
            </li> */}
            <li className="flex justify-start items-center gap-x-1">
              <div className="inline-block size-4 bg-[#FF4500] rounded-full mr-2"></div>
              Fully Reserved
            </li>

            {/* <li className="flex justify-start items-center gap-x-1">
              <div className="inline-block size-4 bg-[#9370DB] rounded-full mr-2"></div>
              Filling Fast
            </li> */}
            <li className="flex justify-start items-center gap-x-1">
              <div className="inline-block size-4 bg-gray-300 rounded-full mr-2"></div>
              Not Operational / Not Available
            </li>
          </ul>
        </div>
      </header>

      {/* Weekdays */}
      <div className="grid grid-cols-7 gap-2 text-center mb-2">
        {DAYS.map((day) => (
          <div
            key={day}
            className="text-sm text-start ps-2 font-semibold text-slate-600"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2">
        {calendarDays?.map((day, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg border ${
              day.date
                ? day.status === "fullyBooked"
                  ? "bg-[#D3D3D3] border-[#D3D3D3]"
                  : "bg-[#9370DB] border-[#9370DB]"
                : "bg-transparent border-gray-100"
            }`}
          >
            {day.date && !isLoading && isSuccess && (
              <>
                <div
                  className={`text-[21px] font-semibold mb-2 ${
                    day.status === "fullyBooked"
                      ? "text-gray-400"
                      : day.status === "fillingFast"
                      ? "text-primary-700"
                      : "text-white"
                  }`}
                >
                  {day.date.toLocaleString("en-IN", {
                    minimumIntegerDigits: 2,
                  })}
                </div>
                <div className="text-xs space-y-1">
                  {day.roomTypes.map((room, idx) => {
                    const roomId = `${currentYear}-${(
                      currentMonth + 1
                    ).toLocaleString("en-IN", {
                      minimumIntegerDigits: 2,
                    })}-${day.date}/${room?.type}`;

                    return (
                      <TableCalenderDate
                        key={idx}
                        id={roomId}
                        room={room?.type}
                        status={
                          day?.status === "available" && room?.available
                            ? "available"
                            : "fullyBooked"
                        }
                        capacity={room?.capacity || 0}
                      />
                    );
                  })}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(Calendar);
