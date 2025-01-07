import React, { useState } from "react";
import {
  format,
  addMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameDay,
  isWithinInterval,
  isToday,
} from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CalendarProps = {
  selectedRange: { startDate: Date | null; endDate: Date | null };
  onDateSelect: (date: Date) => void;
  setShowCalendar: React.Dispatch<React.SetStateAction<boolean>>;
};

const ExpandedCalendar: React.FC<CalendarProps> = ({
  selectedRange,
  onDateSelect,
  setShowCalendar,
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const daysInMonth = (month: Date) =>
    eachDayOfInterval({
      start: startOfMonth(month),
      end: endOfMonth(month),
    });

  const handleDateClick = (date: Date) => {
    onDateSelect(date);
  };

  const renderDay = (date: Date) => {
    const isSelectedStart =
      selectedRange.startDate && isSameDay(date, selectedRange.startDate);
    const isSelectedEnd =
      selectedRange.endDate && isSameDay(date, selectedRange.endDate);
    const isInRange =
      selectedRange.startDate &&
      selectedRange.endDate &&
      isWithinInterval(date, {
        start: selectedRange.startDate,
        end: selectedRange.endDate,
      });
    const isCurrentDay = isToday(date); // Check if the date is today

    return (
      <button
        key={date.toString()}
        className={`w-10 h-10 rounded-full flex items-center justify-center text-gray-700 font-semibold 
          ${
            isSelectedStart || isSelectedEnd
              ? "bg-amber-100 text-amber-600 border border-amber-200"
              : isInRange
              ? "bg-amber-100 text-amber-600 border border-amber-200"
              : ""
          }
          ${isSelectedStart ? "rounded-l-full" : ""} ${
          isSelectedEnd ? "rounded-r-full" : ""
        }
          ${
            !isInRange && !isSelectedStart && !isSelectedEnd
              ? "hover:bg-gray-200"
              : ""
          }
          ${
            isCurrentDay
              ? "border-2 border-blue-200 text-blue-500 bg-blue-50"
              : ""
          }
        `}
        onClick={() => handleDateClick(date)}
      >
        {format(date, "d")}
      </button>
    );
  };

  const renderMonth = (month: Date) => (
    <div className="flex flex-col items-center">
      <div className="text-lg font-semibold mb-2 text-primary-700">
        {format(month, "MMMM yyyy")}
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-gray-600 mb-1">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
          <div key={day} className="w-10 h-10 flex items-center justify-center">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {daysInMonth(month).map((date) => renderDay(date))}
      </div>
    </div>
  );

  const handleMonthChange = (increment: number) => {
    setCurrentMonth((prev) => addMonths(prev, increment * 2));
  };

  // Format the selected range as "start date ~ end date"
  const renderSelectedRange = () => {
    if (selectedRange.startDate && selectedRange.endDate) {
      return `${format(selectedRange.startDate, "MMM d, yyyy")} ~ ${format(
        selectedRange.endDate,
        "MMM d, yyyy"
      )}`;
    } else if (selectedRange.startDate) {
      return `${format(selectedRange.startDate, "MMM d, yyyy")}`;
    } else {
      return "No dates selected";
    }
  };

  return (
    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div className="flex min-h-full items-center justify-center bg-black/20 backdrop-blur-sm">
        <div className="p-6 bg-white rounded-2xl shadow-lg max-w-full overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => handleMonthChange(-1)}
              className="text-amber-600"
            >
              <ChevronLeft className="size-6" />
            </button>
            {/* Selected Date */}
            <div className="text-center text-gray-700 text-p1-m mb-6">
              {renderSelectedRange()}
            </div>

            <button
              onClick={() => handleMonthChange(1)}
              className="text-amber-600"
            >
              <ChevronRight className="size-6" />
            </button>
          </div>

          {/* Selected date range display */}
          <div className="flex gap-8 justify-center">
            <div>{renderMonth(currentMonth)}</div>
            <div>{renderMonth(addMonths(currentMonth, 1))}</div>
          </div>

          <div className="flex justify-center items-center">
            <button
              onClick={() => setShowCalendar(false)}
              className="mt-6 w-[280px] text-amber-600 font-medium bg-amber-100 border border-amber-200 text-[16px] px-5 py-2.5 rounded-full"
            >
              Save & Close Calendar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandedCalendar;
