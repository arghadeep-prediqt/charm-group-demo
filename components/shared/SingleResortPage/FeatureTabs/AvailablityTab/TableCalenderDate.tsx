import { StatusProps } from "@/components/@types/common";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  addRoomType,
  decrementRoomType,
  incrementRoomType,
} from "@/redux/slice/resortSlice";
import React, { memo, useCallback, useMemo } from "react";

interface PageProps {
  id: string;
  room: string;
  status: StatusProps;
  capacity: number;
}

const STATUS_COLORS = {
  available: "text-[#9370DB]",
  waitlist: "text-[#9370DB]",
  fullyBooked: "text-[#D3D3D3]",
  fillingFast: "text-[#FF4500]",
};

const STATUS_COLORS_ONLY = {
  available: "bg-[#9370DB]",
  waitlist: "bg-[#9370DB]",
  fullyBooked: "bg-[#D3D3D3]",
  fillingFast: "bg-[#FF4500]",
};

function TableCalenderDate({ id, room, status, capacity }: PageProps) {
  const dispatch = useAppDispatch();
  const resortRoomType = useAppSelector((state) => state.resort.roomType);
  const handleAddRoomType = useCallback(
    (id: string) => {
      const splitedId = id?.split("/");

      dispatch(
        addRoomType({
          id,
          date: splitedId?.[0],
          title: splitedId?.[1],
          count: 1,
        })
      );
    },
    [dispatch]
  );

  const filteredResortRoomType = useMemo(() => {
    return resortRoomType?.filter((item) => item.id === id);
  }, [id, resortRoomType]);

  return filteredResortRoomType?.length === 0 ? (
    <div
      onClick={() => status !== "fullyBooked" && handleAddRoomType(id)}
      className={`${STATUS_COLORS[status]} w-full text-[14px] font-semibold text-start bg-white py-1 px-2 rounded flex justify-between items-center`}
    >
      {room}
      <div
        className={`size-2 rounded-full ${STATUS_COLORS_ONLY[status]}`}
      ></div>
    </div>
  ) : (
    <div
      className={`${STATUS_COLORS[status]} w-full text-[14px] font-semibold text-start bg-white py-1 px-2 rounded flex justify-between items-center`}
    >
      {room}
      <div className="flex justify-center items-center gap-x-1.5">
        <button
          className="text-p1-b w-5 rounded"
          onClick={() => dispatch(decrementRoomType({ id }))}
        >
          -
        </button>
        <p className="text-p3-b text-center">
          {filteredResortRoomType?.[0]?.count}
        </p>
        <button
          className="text-p1-b w-5 rounded"
          onClick={() => dispatch(incrementRoomType({ id }))}
          disabled={filteredResortRoomType?.[0]?.count >= capacity}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default memo(TableCalenderDate);
