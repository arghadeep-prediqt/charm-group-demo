import { MoveLeft, MoveRight } from "lucide-react";
import React, { useState } from "react";

const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const STATUS_COLORS = {
  available: "text-[#32CD32]",
  waitlist: "text-[#FFA500]",
  fullyBooked: "text-[#D3D3D3]",
  fillingFast: "text-[#9370DB]",
};

const STATUS_COLORS_ONLY = {
  available: "bg-[#32CD32]",
  waitlist: "bg-[#FFA500]",
  fullyBooked: "bg-[#D3D3D3]",
  fillingFast: "bg-[#9370DB]",
};

interface Day {
  date: number | null;
  status: "available" | "waitlist" | "fullyBooked" | "fillingFast";
  roomTypes: string[];
}

const Calendar: React.FC = () => {
  const today = new Date();
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const currentDate = today.getDate();

  const generateCalendarDays = (year: number, month: number) => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const days: Day[] = Array.from(
      { length: firstDay + daysInMonth },
      (_, i) => {
        if (i < firstDay)
          return { date: null, status: "fullyBooked", roomTypes: [] };

        const date = i - firstDay + 1;

        // Example data for status and roomTypes
        const status =
          date < currentDate &&
          year === today.getFullYear() &&
          month === today.getMonth()
            ? "fullyBooked"
            : date % 3 === 0
            ? "fillingFast"
            : date % 2 === 0
            ? "available"
            : "waitlist";

        const roomTypes = ["2BR", "HU", "STU"];

        return { date, status, roomTypes };
      }
    );

    return days;
  };

  const calendarDays = generateCalendarDays(currentYear, currentMonth);

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
    <div className="p-4 max-w-5xl mx-auto">
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
              className={`text-sky-400 hover:text-sky-500 border border-sky-300 p-2 rounded-full disabled:text-gray-400 disabled:border-gray-300 ${
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
              className="text-sky-400 hover:text-sky-500 border border-sky-300 p-2 rounded-full"
              onClick={goToNextMonth}
            >
              <MoveRight className="size-5" />
            </button>
          </div>
        </div>

        {/* Legend and Season Indicator */}
        <div className="flex items-center ps-4 w-8/12">
          {/* Availability Legend */}
          <ul className="flex justify-start items-start flex-wrap gap-x-4 gap-y-2 text-sm">
            <li className="flex justify-start items-center gap-x-1">
              <div className="inline-block size-4 bg-[#FFD700] rounded-full mr-2"></div>
              Peak Season
            </li>
            <li className="flex justify-start items-center gap-x-1">
              <div className="inline-block size-4 bg-[#32CD32] rounded-full mr-2"></div>
              Available Now
            </li>
            <li className="flex justify-start items-center gap-x-1">
              <div className="inline-block size-4 bg-[#FFA500] rounded-full mr-2"></div>
              Join Waitlist
            </li>
            <li className="flex justify-start items-center gap-x-1">
              <div className="inline-block size-4 bg-[#FF4500] rounded-full mr-2"></div>
              Fully Reserved
            </li>

            <li className="flex justify-start items-center gap-x-1">
              <div className="inline-block size-4 bg-[#9370DB] rounded-full mr-2"></div>
              Filling Fast
            </li>
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
        {calendarDays.map((day, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg border ${
              day.date
                ? day.status === "fullyBooked"
                  ? "bg-[#D3D3D3] border-[#D3D3D3]"
                  : day.status === "fillingFast"
                  ? "bg-[#c5a8fe] border-[#c5a8fe]"
                  : "bg-[#ffcd71] border-[#ffcd71]"
                : "bg-transparent border-gray-100"
            }`}
          >
            {day.date && (
              <>
                <div
                  className={`text-[21px] font-semibold mb-2 ${
                    day.status === "fullyBooked"
                      ? "text-gray-400"
                      : "text-primary-700"
                  }`}
                >
                  {String(day.date).padStart(2, "0")}
                </div>
                <div className="text-xs space-y-1">
                  {day.roomTypes.map((room, idx) => (
                    <button
                      key={idx}
                      className={`${STATUS_COLORS[day.status]} 
                        w-full text-[14px] font-medium text-start bg-white py-1 px-2 rounded active:opacity-65 flex justify-between items-center`}
                    >
                      {room}
                      <div
                        className={`size-2 rounded-full ${
                          STATUS_COLORS_ONLY[day.status]
                        }`}
                      ></div>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
