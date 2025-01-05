import React, { useState } from "react";
import { addMonths, subMonths } from "date-fns";
import Month from "./Month";
import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleNext = () => setCurrentDate(addMonths(currentDate, 1));
  const handlePrevious = () => setCurrentDate(subMonths(currentDate, 1));

  const months = [0, 1, 2].map((offset) => addMonths(currentDate, offset));

  return (
    <div className="relative max-w-7xl mx-auto">
      {/* Navigation */}
      <div className="absolute left-0 top-0  w-full pt-2 flex justify-between items-center">
        <button
          onClick={handlePrevious}
          className="ps-2 text-sky-500 hover:text-blue-500 text-lg font-bold"
        >
          <ChevronLeftCircle className="size-8" />
        </button>

        <button
          onClick={handleNext}
          className="pe-2 text-sky-500 hover:text-blue-500 text-lg font-bold"
        >
          <ChevronRightCircle className="size-8" />
        </button>
      </div>

      {/* Three Months */}
      <div className="grid grid-cols-3 gap-4">
        {months.map((month, index) => (
          <Month key={index} date={month} />
        ))}
      </div>
    </div>
  );
};

export default Calendar;
