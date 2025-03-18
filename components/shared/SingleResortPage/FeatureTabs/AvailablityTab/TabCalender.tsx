import { StatusProps } from "@/components/@types/common";
import { useLazyGetRoomsByResortsQuery } from "@/redux/services/resortApi";
import {
  ChevronLeft,
  ChevronRight,
  Info,
  Calendar as CalendarIcon,
} from "lucide-react";
import dynamic from "next/dynamic";
import React, { memo, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TableCalenderDate = dynamic(() => import("./TableCalenderDate"));

const DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
interface Day {
  date: number | null;
  status: StatusProps;
  roomTypes: {
    _id: string;
    type: string;
    available: boolean;
    capacity: number;
    bookedRooms: number;
    totalRooms: number;
  }[];
}

function Calendar({ resort_id, token }: { resort_id: string; token: string }) {
  const today = new Date();
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const currentDate = today.getDate();
  const [showLegend, setShowLegend] = useState(true);
  const [getRoomsByResorts, { data: calenderData, isSuccess, isLoading }] =
    useLazyGetRoomsByResortsQuery();

  useEffect(() => {
    if (token) {
      getRoomsByResorts({
        id: resort_id,
        token,
        start: `${currentYear}-${String(currentMonth + 1).padStart(2, "0")}-01`,
        end: `${currentYear}-${String(currentMonth + 1).padStart(
          2,
          "0"
        )}-${new Date(currentYear, currentMonth + 1, 0).getDate()}`,
      });
    }
  }, [currentMonth, currentYear, getRoomsByResorts, resort_id, token]);

  const generateCalendarDays = (year: number, month: number) => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const days: Day[] = Array.from(
      { length: firstDay + daysInMonth },
      (_, i) => {
        if (i < firstDay)
          return { date: null, status: "fullyBooked", roomTypes: [] };

        const date = i - firstDay + 1;

        const dateISO = `${year}-${String(month + 1).padStart(2, "0")}-${String(
          date
        ).padStart(2, "0")}`;

        const filterRoom =
          isSuccess &&
          calenderData?.filter(
            (item: { date: string }) => item?.date?.split("T")?.[0] === dateISO
          );

        const status: StatusProps =
          date < currentDate &&
          year === today.getFullYear() &&
          month === today.getMonth()
            ? "fullyBooked"
            : filterRoom?.[0]?.available
            ? "available"
            : "fullyBooked";

        return { date, status, roomTypes: filterRoom?.[0]?.rooms || [] };
      }
    );

    return days;
  };

  const calendarDays =
    (isSuccess && generateCalendarDays(currentYear, currentMonth)) || [];

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

  const monthName = new Date(currentYear, currentMonth).toLocaleString(
    "default",
    {
      month: "long",
    }
  );

  return (
    <motion.div
      className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Calendar Header */}
      <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 p-5 border-b border-gray-100">
        <div className="flex justify-between items-center">
          {/* Month and Year Display */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="p-2 bg-white/70 backdrop-blur-sm rounded-lg shadow-sm border border-indigo-100">
              <CalendarIcon className="size-5 text-indigo-600" />
            </div>
            <h2 className="text-xl font-medium text-gray-800">
              {monthName} <span className="text-indigo-600">{currentYear}</span>
            </h2>
          </motion.div>

          {/* Navigation Controls */}
          <motion.div
            className="flex items-center gap-2"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <button
              className="p-2 rounded-full text-indigo-600 hover:bg-indigo-100 transition-colors disabled:text-gray-400 disabled:hover:bg-transparent"
              onClick={goToPreviousMonth}
              disabled={
                currentYear === today.getFullYear() &&
                currentMonth === today.getMonth()
              }
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              className="p-2 rounded-full text-indigo-600 hover:bg-indigo-100 transition-colors disabled:text-gray-400 disabled:hover:bg-transparent"
              onClick={goToNextMonth}
              disabled={currentYear !== today.getFullYear()}
            >
              <ChevronRight className="size-5" />
            </button>

            {/* Legend Toggle Button */}
            <button
              className={`ml-2 p-2 rounded-full ${
                showLegend
                  ? "bg-indigo-100 text-indigo-700"
                  : "text-indigo-600 hover:bg-indigo-100"
              } transition-colors relative`}
              onClick={() => setShowLegend(!showLegend)}
            >
              <Info className="size-5" />
            </button>
          </motion.div>
        </div>

        {/* Legend Section - Always visible */}
        <AnimatePresence>
          {showLegend && (
            <motion.div
              className="mt-4 p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm border border-indigo-100"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <h4 className="text-sm font-medium text-gray-700 mb-3">
                Availability Legend
              </h4>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center size-8 bg-indigo-50 rounded-md">
                    <div className="size-4 bg-indigo-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-700">Available Now</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center size-8 bg-red-50 rounded-md">
                    <div className="size-4 bg-red-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-700">Fully Reserved</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center size-8 bg-gray-50 rounded-md">
                    <div className="size-4 bg-gray-300 rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-700">Not Available</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Weekdays Header */}
      <div className="grid grid-cols-7 bg-gray-50 border-b border-gray-100">
        {DAYS.map((day) => (
          <div
            key={day}
            className="py-3 text-center text-sm font-medium text-gray-600"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="p-3">
        {isLoading ? (
          <div className="py-20 flex justify-center items-center">
            <motion.div
              className="size-16 relative"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute inset-0 border-4 border-indigo-200 border-t-indigo-600 rounded-full"></div>
              <div className="absolute inset-2 border-4 border-indigo-100 border-b-indigo-400 rounded-full"></div>
            </motion.div>
          </div>
        ) : (
          <div className="grid grid-cols-7 gap-2">
            {calendarDays?.map((day, index) => (
              <motion.div
                key={index}
                className={`relative rounded-lg overflow-hidden ${
                  day.date ? "min-h-[120px]" : ""
                }`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.01 }}
              >
                {day.date && !isLoading && isSuccess ? (
                  <div
                    className={`h-full p-3 rounded-lg transition-all duration-200 hover:shadow-sm ${
                      day.status === "available"
                        ? "bg-indigo-50 border border-indigo-100 hover:border-indigo-200"
                        : day.status === "fullyBooked"
                        ? "bg-red-50 border border-red-100 hover:border-red-200"
                        : "bg-gray-50 border border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {/* Date Display */}
                    <div className="flex justify-between items-center mb-3">
                      <span
                        className={`text-lg font-medium ${
                          day.status === "available"
                            ? "text-indigo-700"
                            : day.status === "fullyBooked"
                            ? "text-red-700"
                            : "text-gray-600"
                        }`}
                      >
                        {day.date}
                      </span>

                      {/* Status Indicator */}
                      <div
                        className={`size-3 rounded-full ${
                          day.status === "available"
                            ? "bg-indigo-500"
                            : day.status === "fullyBooked"
                            ? "bg-red-500"
                            : "bg-gray-400"
                        }`}
                      />
                    </div>

                    {/* Room Types */}
                    <div className="space-y-2">
                      {day.roomTypes.map((room, idx) => {
                        const roomId = `${currentYear}-${(
                          currentMonth + 1
                        ).toLocaleString("en-IN", {
                          minimumIntegerDigits: 2,
                        })}-${day.date}/${room?.type}`;

                        return (
                          <TableCalenderDate
                            key={idx}
                            id={roomId}
                            room={room?.type}
                            status={
                              day?.status === "available" && room?.available
                                ? "available"
                                : "fullyBooked"
                            }
                            capacity={room?.capacity || 0}
                          />
                        );
                      })}

                      {day.roomTypes.length === 0 && (
                        <div
                          className={`text-xs italic p-2 rounded-md text-center ${
                            day.status === "available"
                              ? "bg-indigo-100/50 text-indigo-600"
                              : day.status === "fullyBooked"
                              ? "bg-red-100/50 text-red-600"
                              : "bg-gray-100/50 text-gray-600"
                          }`}
                        >
                          No rooms available
                        </div>
                      )}
                    </div>
                  </div>
                ) : null}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default memo(Calendar);
