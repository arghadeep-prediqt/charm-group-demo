interface SingleRoomProps {
  date: string;
  roomType: string;
  quantity: number;
}

export interface BookingResortProps {
  token: string;
  resortId: string;
  bookings: SingleRoomProps[];
}
export interface CancelledBookigResortProps {
  token: string;
  bookingId: string;
}

export interface SingleBookingHistoryProps {
  _id: string;
  status: string;
  bookings: {
    _id: string;
    date: string;
    roomType: string;
    quantity: number;
  }[];
  resortId: {
    _id: string;
    name: string;
    photo: string;
  };
}
