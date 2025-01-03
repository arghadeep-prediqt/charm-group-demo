import { CalendarFold, MapPin, User } from "lucide-react";
import React from "react";

interface PageProps {
  name: string;
}

function FloaterChecker({ name }: PageProps) {
  return (
    <form className="absolute bottom-5 right-[5em] w-[330px] bg-gray-50 rounded-xl border border-gray-200 z-10 p-6">
      <div className="mt-3 pb-3 flex justify-start items-center gap-x-3 border-b border-gray-300">
        <MapPin className="size-6 text-sky-500" />
        <p className="text-p1-r w-[90%] capitalize">{name}</p>
      </div>

      <div className="mt-3 py-3 flex justify-start items-center gap-x-3 border-b border-gray-300">
        <CalendarFold className="size-6 text-sky-500" />
        <p className="text-p1-r w-[90%] text-sky-500">Select Dates</p>
      </div>

      <div className="mt-3 py-3 flex justify-start items-center gap-x-3 border-b border-gray-300">
        <User className="size-6 text-sky-500" />
        <p className="text-p1-r w-[90%]">2 Adults</p>
      </div>

      <div className="mt-[15%] flex justify-center items-center">
        <button className="bg-sky-400 text-white px-6 py-2 w-full rounded-full text-p1-b">
          Check Availablity
        </button>
      </div>
    </form>
  );
}
export default FloaterChecker;
