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
const available = [23, 27, 17, 6, 19, 5, 16, 10, 7];

const Month: React.FC<MonthProps> = ({ date }) => {
  const days = eachDayOfInterval({
    start: startOfMonth(date),
    end: endOfMonth(date),
  });

  const firstDayOffset = getDay(startOfMonth(date));

  const getDayColor = (day: Date): string => {
    if (notAvailable.includes(day.getDate()))
      return "bg-gray-200 text-gray-700"; // Not Available
    if (pickTime.includes(day.getDate())) return "bg-red-500 text-white"; // Pick Time
    if (seasonTime.includes(day.getDate())) return "bg-purple-500 text-white"; // Season Time
    if (available.includes(day.getDate())) return "bg-blue-500 text-white"; // Available
    return "bg-blue-500 text-white";
  };

  return (
    <div className="bg-[#1f3058] rounded-xl p-4 shadow-md">
      {/* Month Title */}
      <h3 className="text-center text-sky-400 mb-5">
        {format(date, "MMMM yyyy")}
      </h3>

      {/* Weekday Headers */}
      <div className="grid grid-cols-7 text-gray-500 mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="pb-2 text-center text-p1-r text-white">
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
            className={`mt-3 flex justify-center items-center size-10 rounded-full ${getDayColor(
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
