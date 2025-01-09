import { Calendar, ChevronRight, Coins, TentTree } from "lucide-react";
import { useRouter } from "next/router";
import React from "react";

function RightProfileSection() {
  return (
    <>
      <div className="p-3 flex flex-col gap-5">
        <ButtonSide
          icon={<Calendar className="size-5 text-orange-500" />}
          link="/session_chart"
          name="Session Chart"
        />
        <ButtonSide
          icon={<Coins className="size-5 text-orange-500" />}
          link="/profile/payment"
          name="Payment Details"
        />
        <ButtonSide
          icon={<TentTree className="size-5 text-orange-500" />}
          link="/my_bookings"
          name="My Holidays"
        />
      </div>
    </>
  );
}

export default RightProfileSection;

interface ButtonSideProps {
  name: string;
  link: string;
  icon: React.ReactNode;
}
function ButtonSide({ icon, link, name }: ButtonSideProps) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(link)}
      className="w-full flex justify-between items-center border-b pb-3"
    >
      <div className="flex justify-start items-center gap-x-3">
        {icon}
        <p className="text-p1-m text-start text-gray-700">{name}</p>
      </div>

      <ChevronRight className="size-5" />
    </button>
  );
}
