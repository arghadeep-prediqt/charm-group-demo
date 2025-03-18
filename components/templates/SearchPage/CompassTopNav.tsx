import { format } from "date-fns";
import { CalendarFold } from "lucide-react";
import dynamic from "next/dynamic";
import React, { useMemo, useState } from "react";

const CustomButton = dynamic(() => import("@/components/ui/CustomButton"));
const ExpandedCalendar = dynamic(
  () => import("@/components/ui/ExpandedCalender")
);

function CompassTopNav() {
  const [selectedRange, setSelectedRange] = useState<{
    startDate: Date | null;
    endDate: Date | null;
  }>({
    startDate: null,
    endDate: null,
  });
  const [showCalender, setShowCalendar] = useState<boolean>(false);

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
    return "Select Your Travel Dates.";
  }, [selectedRange.endDate, selectedRange.startDate]);

  return (
    <React.Fragment>
      <div className="w-fit py-3 ps-4 pe-5 bg-white rounded-full mx-auto shadow-sm">
        <CustomButton
          isAutoWidth={true}
          isFilled={false}
          name={renderSelectedRange}
          changeFn={() => setShowCalendar(true)}
          icon={<CalendarFold className="size-6 text-blue-500" />}
        />
      </div>

      {showCalender && (
        <ExpandedCalendar
          selectedRange={selectedRange}
          onDateSelect={handleDateSelect}
          setShowCalendar={setShowCalendar}
        />
      )}
    </React.Fragment>
  );
}

export default CompassTopNav;
