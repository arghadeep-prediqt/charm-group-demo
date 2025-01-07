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

const notAvailable = [3, 26, 4, 2, 24, 8, 29];
const pickTime = [25, 20, 21, 11, 28, 30, 15];
const seasonTime = [13, 14, 18, 1, 9, 22, 12];

const Month: React.FC<MonthProps> = ({ date }) => {
  const days = eachDayOfInterval({
    start: startOfMonth(date),
    end: endOfMonth(date),
  });

  const firstDayOffset = getDay(startOfMonth(date));

  const getDayColor = (day: Date): string => {
    if (notAvailable.includes(day.getDate()) && day.getFullYear() === 2025)
      return "bg-gray-200 border-gray-200 text-gray-400 shadow-none cursor-not-allowed"; // Not Available
    if (pickTime.includes(day.getDate()) && day.getFullYear() === 2025)
      return "border-red-200 bg-red-100 text-red-700 cursor-pointer"; // Pick Time
    if (seasonTime.includes(day.getDate()) && day.getFullYear() === 2025)
      return "bg-purple-100 text-purple-700 border-purple-200 cursor-pointer"; // Season Time
    return "bg-blue-100 text-blue-700 border-blue-200 cursor-pointer"; // Available
  };

  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 shadow-sm">
      {/* Month Title */}
      <h3 className="text-center text-gray-500 mb-5">
        {format(date, "MMMM yyyy")}
      </h3>

      {/* Weekday Headers */}
      <div className="grid grid-cols-7 text-primary-500 mb-2">
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
