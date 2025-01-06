import MemberDropdown from "@/components/ui/MemberDropdown";
import PeopleDropdown from "@/components/ui/PeopleDropdown";
import React from "react";
import RoomList from "./RoomList";
import { useRouter } from "next/router";

interface PageProps {
  name: string;
}

function RightSideWaitlist({ name }: PageProps) {
  const router = useRouter();
  return (
    <div className="mb-3 bg-gray-50 rounded-xl border border-gray-200">
      <div className="p-6">
        <h3 className="capitalize text-[20px] font-medium">{name}</h3>
        <p className="my-2 text-p2-r text-gray-600">
          Vung Tau province, Vietnam
        </p>

        <h4 className="capitalize mt-10 mb-1 text-gray-700">
          Add travellers details
        </h4>

        <div className="py-3">
          <PeopleDropdown />
        </div>

        <MemberDropdown />

        <RoomList />
      </div>

      <div className="mt-[3%] flex justify-between items-center">
        <div className="w-6/12 p-2 flex justify-between items-center bg-gradient-to-r from-yellow-200 to-orange-300">
          <p className="text-p3-m">Days Utilised</p>
          <p className="text-p2-b">0.8</p>
        </div>
        <div className="w-6/12 p-2 flex justify-between items-center bg-gradient-to-r from-yellow-200 to-orange-300">
          <p className="text-p3-m">Days Remaining</p>
          <p className="text-p2-b">0</p>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <button
          onClick={() =>
            router.push(`/my_bookings/${name.split(" ").join("%20")}?type=view`)
          }
          className="bg-sky-400 text-white px-6 py-2.5 w-full rounded-br-xl rounded-bl-xl text-p1-b active:opacity-65"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

export default RightSideWaitlist;
