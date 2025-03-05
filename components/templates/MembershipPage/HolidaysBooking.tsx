import { useAppSelector } from "@/redux/hooks";
import React from "react";

const bookings = [
  {
    voucher: "8711751",
    resort: "Charm Resort Hồ Tràm",
    guest: "Hồng Oanh",
    room: "1BR-1",
    reservationType: "SPL OFFER",
    checkIn: "12-Feb-2025",
    checkOut: "14-Feb-2025",
    debitedHolidays: 2.0,
  },
  {
    voucher: "8711721",
    resort: "Charm Resort Long Hải",
    guest: "Hồng Oanh",
    room: "1BR-1",
    reservationType: "SPL OFFER",
    checkIn: "10-Feb-2025",
    checkOut: "12-Feb-2025",
    debitedHolidays: 2.0,
  },
  {
    voucher: "8711719",
    resort: "Charm Resort Đà Lạt",
    guest: "Hồng Oanh",
    room: "STU-1",
    reservationType: "SPL OFFER",
    checkIn: "08-Feb-2025",
    checkOut: "10-Feb-2025",
    debitedHolidays: 2.0,
  },
];

const HolidayBookings = () => {
  const userName = useAppSelector((state) => state.user.name);
  const totalHolidays = bookings.reduce(
    (total, booking) => total + booking.debitedHolidays,
    0
  );

  return (
    <div className="py-3 ">
      <table className="w-full border-collapse mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2 text-p3-b text-nowrap bg-amber-100">
              Booking #
            </th>
            <th className="px-4 py-2 text-p3-b text-nowrap bg-amber-100">
              Property Name
            </th>
            <th className="px-4 py-2 text-p3-b text-nowrap bg-amber-100">
              Primary Guest
            </th>
            <th className="px-4 py-2 text-p3-b text-nowrap bg-amber-100">
              Accommodation Details
            </th>
            <th className="px-4 py-2 text-p3-b text-nowrap bg-amber-100">
              Booking Type
            </th>
            <th className="px-4 py-2 text-p3-b text-nowrap bg-amber-100">
              Arrival Date
            </th>
            <th className="px-4 py-2 text-p3-b text-nowrap bg-amber-100">
              Departure Date
            </th>
            <th className="px-4 py-2 text-p3-b text-nowrap bg-amber-100">
              Nights Used
            </th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr key={index}>
              <td className="px-4 py-2 text-p2-r text-nowrap text-center">
                {booking.voucher}
              </td>
              <td className="px-4 py-2 text-p2-r text-nowrap text-center">
                {booking.resort}
              </td>
              <td className="px-4 py-2 text-p2-r text-nowrap text-center">
                {userName}
              </td>
              <td className="px-4 py-2 text-p2-r text-nowrap text-center">
                {booking.room}
              </td>
              <td className="px-4 py-2 text-p2-r text-nowrap text-center">
                {booking.reservationType}
              </td>
              <td className="px-4 py-2 text-p2-r text-nowrap text-center">
                {booking.checkIn}
              </td>
              <td className="px-4 py-2 text-p2-r text-nowrap text-center">
                {booking.checkOut}
              </td>
              <td className="px-4 py-2 text-p2-r text-nowrap text-center">
                {booking.debitedHolidays.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-right font-bold">
        Total Holiday Booked: {totalHolidays.toFixed(2)}
      </div>
    </div>
  );
};

export default HolidayBookings;
