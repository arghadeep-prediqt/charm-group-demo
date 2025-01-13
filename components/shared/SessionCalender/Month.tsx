import React from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  getDay,
} from "date-fns";

type MonthProps = {
  date: Date;
};

const notAvailable = [5, 6, 7, 8, 9, 10, 11];
const pickTime = [12, 13, 14, 15, 16, 17, 18];
const seasonTime = [19, 20, 21, 22, 23, 24, 25];
const memberOnly = [7, 8, 16, 17, 19, 20, 30, 31];

const Month: React.FC<MonthProps> = ({ date }) => {
  const days = eachDayOfInterval({
    start: startOfMonth(date),
    end: endOfMonth(date),
  });

  const firstDayOffset = getDay(startOfMonth(date));

  const getDayColor = (day: Date): string => {
    if (notAvailable.includes(day.getDate()) && day.getFullYear() === 2025)
      return `${
        memberOnly.includes(day.getDate())
          ? "border-2 border-[#003049]"
          : "border-[#B0E0E6]"
      } bg-[#87CEFA] text-slate-700 cursor-pointer`; // Not Available

    if (pickTime.includes(day.getDate()) && day.getFullYear() === 2025)
      return `${
        memberOnly.includes(day.getDate())
          ? "border-2 border-[#003049]"
          : "border-[#FFD1DC]"
      } bg-[#FF69B4] text-white cursor-pointer`; // Pick Time

    if (seasonTime.includes(day.getDate()) && day.getFullYear() === 2025)
      return `${
        memberOnly.includes(day.getDate())
          ? "border-2 border-[#003049]"
          : "border-[#FF7F50]"
      } bg-[#FF4500] text-white cursor-pointer`; // Season Time

    return `${
      memberOnly.includes(day.getDate())
        ? "border-2 border-[#003049]"
        : "border-[#20B2AA]"
    } bg-[#008080c9] text-white cursor-pointer`; // Available
  };

  return (
    <div className="bg-[#fef5e8] rounded-xl p-4 shadow-sm">
      {/* Month Title */}
      <h3 className="text-center text-gray-700 mb-5">
        {format(date, "MMMM yyyy")}
      </h3>

      {/* Weekday Headers */}
      <div className="grid grid-cols-7 text-primary-700 mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="pb-2 text-center text-p1-m">
            {day}
          </div>
        ))}
      </div>

      {/* Dates */}
      <div className="grid grid-cols-7 gap-1">
        {/* Empty space for offset */}
        {Array.from({ length: firstDayOffset }).map((_, index) => (
          <div key={`empty-${index}`} />
        ))}

        {/* Actual days */}
        {days.map((day) => (
          <div
            key={day.toISOString()}
            className={`mt-3 flex justify-center items-center size-10 rounded-full shadow-sm hover:shadow-none border ${getDayColor(
              day
            )}`}
          >
            <p className="text-p1-m">{format(day, "dd")}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Month;
