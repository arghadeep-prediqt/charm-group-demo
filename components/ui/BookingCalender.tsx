import React, { useState, useMemo, useCallback, memo } from "react";

interface CalenderProps {
  selectedDates: Date[];
  setSelectedDates: React.Dispatch<React.SetStateAction<Date[]>>;
  showCalendar: boolean;
  setShowCalendar: React.Dispatch<React.SetStateAction<boolean>>;
}

function BookingCalendar({
  selectedDates,
  setSelectedDates,
  showCalendar,
  setShowCalendar,
}: CalenderProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [firstSelectedDate, setFirstSelectedDate] = useState<Date | null>(null);
  const [secondSelectedDate, setSecondSelectedDate] = useState<Date | null>(
    null
  );

  const today = useMemo(() => new Date(), []);

  const months = useMemo(
    () => [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    []
  );

  const currentMonth = useMemo(() => currentDate.getMonth(), [currentDate]);
  const currentYear = useMemo(() => currentDate.getFullYear(), [currentDate]);

  const daysInMonth = useMemo(() => {
    const numDays = new Date(currentYear, currentMonth + 1, 0).getDate();
    return Array.from({ length: numDays }, (_, i) => i + 1);
  }, [currentMonth, currentYear]);

  const firstDay = useMemo(
    () => new Date(currentYear, currentMonth, 1).getDay(),
    [currentMonth, currentYear]
  );

  const selectRange = useCallback((start: Date, end: Date) => {
    const range: Date[] = [];
    const current = new Date(start);
    while (current <= end) {
      range.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }
    return range;
  }, []);

  const handleDateSelection = (day: number) => {
    const date = new Date(currentYear, currentMonth, day);
    if (!firstSelectedDate) {
      setFirstSelectedDate(date);
      setSelectedDates([date]);
    } else if (!secondSelectedDate) {
      setSecondSelectedDate(date);
      // Create the date range and add it if not already present
      const range = selectRange(firstSelectedDate, date).filter(
        (d) =>
          !selectedDates.some(
            (selectedDate) => selectedDate.toDateString() === d.toDateString()
          )
      );
      setSelectedDates((prev) => [...prev, ...range]);
    } else {
      // Reset selection to the new date
      setFirstSelectedDate(date);
      setSecondSelectedDate(null);
      setSelectedDates([date]);
    }
  };

  const changeMonth = (increment: number) => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() + increment);
      return newDate;
    });
  };

  return (
    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div className="flex min-h-full items-center justify-center bg-black/20 backdrop-blur-sm">
        {showCalendar && (
          <div className="bg-white border border-gray-200 shadow-lg p-4 mt-4 rounded-lg w-[424px] z-40">
            <div className="flex justify-between items-center mt-2 mb-8">
              <button
                onClick={() => changeMonth(-1)}
                className="text-gray-500 hover:text-gray-700 font-medium text-[14px]"
              >
                &lt; Prev
              </button>
              <h2 className="text-center text-blue-600 text-[20px] font-medium">
                {months[currentMonth]} {currentYear}
              </h2>
              <button
                onClick={() => changeMonth(1)}
                className="text-gray-500 hover:text-gray-700 font-medium text-[14px]"
              >
                Next &gt;
              </button>
            </div>

            <div className="grid grid-cols-7 gap-2 text-center">
              {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                <div key={day} className="font-medium text-blue-600">
                  {day}
                </div>
              ))}

              {Array.from({ length: firstDay }).map((_, index) => (
                <div key={index} className="p-2" />
              ))}

              {daysInMonth.map((day) => {
                const currentDay = new Date(currentYear, currentMonth, day);
                const isToday =
                  currentDay.toDateString() === today.toDateString();
                const isSelected = selectedDates.some(
                  (selectedDate) =>
                    selectedDate.toDateString() === currentDay.toDateString()
                );

                // Disable past dates except today
                const isDisabled = currentDay < today && !isSelected;

                return (
                  <button
                    key={day}
                    onClick={() => !isDisabled && handleDateSelection(day)}
                    className={`flex justify-center items-center cursor-pointer p-2 rounded hover:bg-blue-200 w-[48px] h-[56px] text-[16px] font-medium disabled:cursor-not-allowed 
                    ${
                      isToday
                        ? "border-2 border-blue-400"
                        : "disabled:opacity-50 border-2 border-gray-200"
                    }
                    ${
                      isSelected
                        ? "bg-blue-400 text-white border-2 border-blue-400"
                        : "bg-gray-100 text-blue-500"
                    }`}
                    disabled={isDisabled}
                  >
                    {day}
                  </button>
                );
              })}
            </div>

            <div className="mt-12 flex justify-center items-center w-full h-[49px] bg-gray-100">
              <p className="text-blue-600 text-[16px] font-medium">
                Selected{" "}
                <span className="font-semibold">{selectedDates.length}</span>{" "}
                {selectedDates.length === 1 ? "night" : "nights"}
              </p>
            </div>

            <button
              onClick={() => setShowCalendar(false)}
              className="mt-6 w-full bg-sky-500 font-medium text-white text-[16px] px-4 py-2 rounded"
            >
              Save & Close Calendar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default memo(BookingCalendar);
