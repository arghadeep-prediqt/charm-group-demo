import { useAppSelector } from "@/redux/hooks";
import React, { useMemo } from "react";

function RoomList() {
  const resortRoomType = useAppSelector((state) => state.resort.roomType);

  return (
    <React.Fragment>
      <div className="mt-6 flex justify-between items-center">
        <p className="text-p2-r">Room Type</p>
        <div className="text-p1-b text-amber-600">Clear</div>
      </div>

      {resortRoomType?.map((item) => (
        <RoomRow
          key={item.id}
          count={item.count}
          date={item.date}
          title={item.title}
        />
      ))}
    </React.Fragment>
  );
}

export default RoomList;

interface RoomRowProps {
  date: string;
  count: number;
  title: string;
}

function RoomRow({ count, date, title }: RoomRowProps) {
  const selectedDate = new Date(date);

  const floor = useMemo(() => {
    let name = "";
    if (title === "1BR") name = "all floor";
    if (title === "2BR") name = "ocean view";
    if (title === "3BR") name = "president suite";
    if (title === "villa") name = "Full Villa";

    return { name };
  }, [title]);

  return (
    <div className="mt-3 bg-white p-2 rounded-2xl flex justify-start items-center gap-x-4">
      <div className="py-3 px-4 flex flex-col justify-center divide-y divide-gray-700 bg-amber-100 rounded-xl">
        <p className="pb-1 text-p1-b text-gray-700 text-center">
          {selectedDate?.toLocaleDateString("en-IN", { month: "short" })}
        </p>
        <p className="pt-1 text-p1-b text-gray-700 text-center">
          {selectedDate?.toLocaleDateString("en-IN", { day: "2-digit" })}
        </p>
      </div>

      <div className="flex flex-col">
        <p className="text-p1-m text-gray-700 uppercase">
          {count} – {title}
        </p>
        <p className="text-p1-b text-amber-600 capitalize">{floor?.name}</p>
      </div>
    </div>
  );
}
