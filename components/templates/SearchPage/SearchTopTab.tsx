import React, { useCallback, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { CalendarFold, MapPinIcon, UsersRound } from "lucide-react";
import { format } from "date-fns";
import { useRouter } from "next/router";

const ExpandedCalendar = dynamic(
  () => import("@/components/ui/ExpandedCalender")
);
const CustomButton = dynamic(() => import("@/components/ui/CustomButton"));
const InputCustom = dynamic(() => import("@/components/ui/InputCustom"));

interface PageProps {
  placeholder?: string;
}

function SearchTopTab({ placeholder = "Search By Resort Name" }: PageProps) {
  const router = useRouter();
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
    return "Check-in & Check-out";
  }, [selectedRange.endDate, selectedRange.startDate]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      await router.push("/our_resorts");
    },
    [router]
  );

  return (
    <React.Fragment>
      <form
        onSubmit={handleSubmit}
        className="w-fit p-4 bg-white rounded-full flex justify-start items-center gap-x-4 divide-x-2 divide-gray-300 mx-auto"
      >
        <div>
          <InputCustom
            name="destination"
            label={placeholder}
            icon={<MapPinIcon className="size-6 text-sky-500" />}
            isRequired
          />
        </div>

        <div className="ps-4">
          <CustomButton
            isAutoWidth={true}
            name={renderSelectedRange}
            changeFn={() => setShowCalendar(true)}
            icon={<CalendarFold className="size-6 text-sky-500" />}
          />
        </div>

        <div className="ps-4">
          <InputCustom
            name="guest"
            type="number"
            label="Number of Guests"
            icon={<UsersRound className="size-6 text-sky-500" />}
            isRequired
          />
        </div>

        <button
          type="submit"
          className="bg-sky-500 border border-sky-500 text-white text-h3-semi-bold py-3 px-2 w-[180px] rounded-full"
        >
          Search
        </button>
      </form>

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

export default SearchTopTab;
