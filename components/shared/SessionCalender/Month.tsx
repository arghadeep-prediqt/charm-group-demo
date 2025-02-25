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

const silverMember = [
  9, 10, 11, 14, 15, 17, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
];
const goldMember = [
  2, 3, 6, 7, 8, 12, 13, 16, 19, 20, 21, 22, 23, 24, 38, 39, 51,
];
const diamondMember = [
  1, 4, 5, 18, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 52,
];

const getWeekNumber = (year: number, month: number, date: number): number => {
  const inputDate = new Date(year, month - 1, date); // Month is 0-based
  const startOfYear = new Date(year, 0, 1); // January 1st of the year
  const startDay = startOfYear.getDay(); // Day of the week (0 = Sunday, 6 = Saturday)

  // Calculate the number of days from the start of the year
  const diffInDays = Math.floor(
    (inputDate.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24)
  );

  // Determine the week number based on Sunday as the start of the week
  return Math.ceil((diffInDays + startDay + 1) / 7);
};

const isDateInMembership = (
  year: number,
  month: number,
  date: number,
  membership: "silver" | "gold" | "diamond"
): boolean => {
  const week = getWeekNumber(year, month, date);
  const membershipWeeks =
    membership === "silver"
      ? silverMember
      : membership === "gold"
      ? goldMember
      : diamondMember;

  return membershipWeeks.includes(week);
};

const Month: React.FC<MonthProps> = ({ date }) => {
  const days = eachDayOfInterval({
    start: startOfMonth(date),
    end: endOfMonth(date),
  });

  const firstDayOffset = getDay(startOfMonth(date));

  const getDayColor = (day: Date): string => {
    if (
      isDateInMembership(
        day.getFullYear(),
        day.getMonth() + 1,
        day.getDate(),
        "silver"
      ) &&
      day.getFullYear() === 2025
    )
      return `border-[#D3D3D3] bg-[#D3D3D3] text-[#000000] cursor-pointer`; // Silver Member

    if (
      isDateInMembership(
        day.getFullYear(),
        day.getMonth() + 1,
        day.getDate(),
        "gold"
      ) &&
      day.getFullYear() === 2025
    )
      return `border-[#FFD966] bg-[#FFD966] text-slate-900 cursor-pointer`; // Gold Member

    if (
      isDateInMembership(
        day.getFullYear(),
        day.getMonth() + 1,
        day.getDate(),
        "diamond"
      ) &&
      day.getFullYear() === 2025
    )
      return `border-[#2F5597] bg-[#2F5597] text-white cursor-pointer`; // Diamond Member
    return "bg-gray-300 border-gray-200 text-gray-500 opacity-50";
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
