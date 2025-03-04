import React, { useCallback, useContext, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import ProfileContext from "@/contextAPI/ProfileContext";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  useBookResortRoomMutation,
  useGetRemainingDayQuery,
} from "@/redux/services/resortApi";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { cleraResortRoom } from "@/redux/slice/resortSlice";

const RoomList = dynamic(() => import("./RoomList"));
const MemberDropdown = dynamic(() => import("@/components/ui/MemberDropdown"));
const PeopleDropdown = dynamic(() => import("@/components/ui/PeopleDropdown"));
interface PageProps {
  name: string;
  location: string;
  resort_id: string;
  token: string;
  isRci: boolean;
}

function RightSideWaitlist({
  name,
  location,
  resort_id,
  token,
  isRci,
}: PageProps) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const { cookieToken } = useContext(ProfileContext);
  const roomList = useAppSelector((state) => state.resort.roomType);
  const [bookResortRoom] = useBookResortRoomMutation();
  const { data: remainingDays, isSuccess } = useGetRemainingDayQuery({ token });

  const bookings = useMemo(() => {
    if (roomList.length !== 0) {
      return roomList?.map((item) => ({
        date: item.date,
        roomType: item.title,
        quantity: item.count,
      }));
    }
    return [];
  }, [roomList]);

  const handleBooking = useCallback(async () => {
    if (isClicked) return;

    setIsClicked(true);
    const toastId = toast.loading("Resort is Booking...");

    try {
      const response = await bookResortRoom({
        resortId: resort_id,
        token: cookieToken,
        bookings,
      });

      if (response?.data) {
        toast.success("Resort is booked", { id: toastId });
        router.push("/my_bookings");
        dispatch(cleraResortRoom());
      } else {
        throw new Error("Unable to book resort");
      }
    } catch (error) {
      console.log(error);
      toast.error("Unable to book resort", { id: toastId });
    } finally {
      setIsClicked(false);
    }
  }, [
    bookResortRoom,
    bookings,
    cookieToken,
    dispatch,
    isClicked,
    resort_id,
    router,
  ]);

  return (
    <div className="mb-3 bg-gray-50 rounded-xl border border-gray-200">
      <div className="p-6">
        <h3 className="capitalize text-[20px] font-medium">{name}</h3>
        <p className="my-2 text-p2-r text-gray-600">{location}</p>

        <h4 className="capitalize mt-10 mb-1 text-gray-700">
          Add travellers details
        </h4>

        <div className="py-3">
          <PeopleDropdown />
        </div>

        <MemberDropdown />

        <RoomList />
      </div>

      {isSuccess && (
        <div className="mt-[3%] flex justify-between items-center">
          <div className="w-6/12 p-2 flex justify-between items-center bg-gradient-to-r from-yellow-200 to-amber-400">
            <p className="text-p3-m">Days Utilised</p>
            <p className="text-p2-b">{roomList?.length}</p>
          </div>
          <div className="w-6/12 p-2 flex justify-between items-center bg-gradient-to-r from-yellow-200 to-amber-400">
            <p className="text-p3-m">Days Remaining</p>
            <p className="text-p2-b">
              {Math.sign(remainingDays?.daysBalance - roomList?.length) !== 1
                ? 0
                : remainingDays?.daysBalance - roomList?.length}
            </p>
          </div>
        </div>
      )}

      <div className="flex justify-center items-center">
        <button
          onClick={handleBooking}
          className="bg-yellow-300 text-slate-700 px-6 py-2.5 w-full rounded-br-xl rounded-bl-xl text-p1-b active:opacity-65 disabled:grayscale"
          disabled={
            isClicked ||
            Math.sign(remainingDays?.daysBalance - roomList?.length) === -1
          }
        >
          {isClicked ? "Booking..." : isRci ? "Book Now with RCI" : "Book Now"}
        </button>
      </div>
    </div>
  );
}

export default RightSideWaitlist;
