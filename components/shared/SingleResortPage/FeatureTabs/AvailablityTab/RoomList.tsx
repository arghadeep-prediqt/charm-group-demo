import React from "react";

function RoomList() {
  return (
    <>
      <div className="mt-6 flex justify-between items-center">
        <p className="text-p2-r">Room Type</p>
        <div className="text-p1-b text-sky-500">Clear</div>
      </div>

      <RoomRow />
      <RoomRow />
    </>
  );
}

export default RoomList;

function RoomRow() {
  return (
    <div className="mt-3 bg-white p-2 rounded-2xl flex justify-start items-center gap-x-4">
      <div className="py-3 px-4 flex flex-col justify-center divide-y bg-emerald-400 rounded-xl">
        <p className="pb-1 text-p1-b text-white text-center">Jan</p>
        <p className="pt-1 text-p1-b text-white text-center">08</p>
      </div>

      <div className="flex flex-col">
        <p className="text-p1-m text-gray-700">2 – Studio Room</p>
        <p className="text-p1-b text-emerald-400">Available</p>
      </div>
    </div>
  );
}
