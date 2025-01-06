"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { ArrowRight } from "lucide-react";

const BookingCalender = dynamic(
  () => import("@/components/ui/BookingCalender")
);
const InputLabel = dynamic(() => import("@/components/ui/InputLabel"));

function FirstHeroSection() {
  const router = useRouter();
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);
  const [showCalender, setShowCalendar] = useState<boolean>(false);

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const destination = formData.get("destination");
    const guest = formData.get("guest");

    const checkin =
      selectedDates.length > 0
        ? selectedDates?.[0]?.toLocaleDateString("en-IN")
        : "";
    const checkout =
      selectedDates.length > 1
        ? selectedDates?.[selectedDates.length - 1]?.toLocaleDateString("en-IN")
        : "";

    if (checkin === "" || checkout === "") return;

    router.push(
      `/our_resorts?place=${destination}&in=${checkin}&out=${checkout}&guest=${guest}`
    );
  };

  return (
    <section className="hero h-screen pt-16">
      <div className="container mx-auto px-[2%] mt-[7%]">
        <h1 className={`text-[60px] font-medium text-white leading-tight`}>
          Start your unforgettable <br /> journey with us.
        </h1>
        <p className="text-[21px] w-7/12 leading-tight mt-[2%]">
          Explore new destinations, join our exclusive membership, and book your
          dream vacation now.
        </p>

        <button
          className="text-p1-m capitalize py-3 px-5 bg-sky-400/50 mt-8 rounded-lg backdrop-blur-sm"
          onClick={() => router.push("/our_resorts")}
        >
          explore destination
        </button>
      </div>

      {/* Filter Date Button */}
      <form
        onSubmit={handleForm}
        className="2xl:w-[65vw] xl:w-[70vw] w-[95vw] h-36 bg-white mt-[4%] rounded-tr-lg rounded-br-lg flex justify-between"
      >
        {/* Filter Row */}
        <div className="py-3 ps-6 pe-[9%] w-full text-black flex flex-wrap justify-end items-center gap-x-[5%]">
          <InputLabel
            label="destination"
            placeholder="Select a Place"
            type="text"
            name="destination"
          />

          <InputLabel
            label="people"
            placeholder="Guest No."
            type="number"
            name="guest"
          />

          <CustomBtnCal
            label="check in"
            name={
              (selectedDates.length > 0 &&
                selectedDates?.[0]?.toLocaleDateString("en-IN")) ||
              "Select Date"
            }
            clickFn={() => setShowCalendar(true)}
          />

          <CustomBtnCal
            label="check out"
            name={
              (selectedDates.length > 1 &&
                selectedDates?.[selectedDates.length - 1]?.toLocaleDateString(
                  "en-IN"
                )) ||
              "Select Date"
            }
            clickFn={() => setShowCalendar(true)}
          />
        </div>

        {/* Book  Now */}
        <div className="w-[170px] h-full">
          <button
            type="submit"
            className={`text-[30px] px-4 text-primary-700 font-semibold bg-sky-300 w-full h-full rounded-tr-lg rounded-br-lg flex items-center justify-between active:opacity-60`}
          >
            Book <br /> Now
            <ArrowRight className="size-6" />
          </button>
        </div>
      </form>

      {showCalender && (
        <BookingCalender
          selectedDates={selectedDates}
          setSelectedDates={setSelectedDates}
          showCalendar={showCalender}
          setShowCalendar={setShowCalendar}
        />
      )}
    </section>
  );
}

export default FirstHeroSection;

interface CustomBtnCalProps {
  label: string;
  name: string;
  clickFn: () => void;
}

function CustomBtnCal({ name, label, clickFn }: CustomBtnCalProps) {
  return (
    <div className="">
      <p className="text-p2-m uppercase mb-1 text-gray-500">{label}</p>

      <button
        type="button"
        onClick={clickFn}
        className={`w-[150px] text-start text-p2-r border-b border-b-gray-500 focus:outline-none z-20`}
      >
        {name}
      </button>
    </div>
  );
}
