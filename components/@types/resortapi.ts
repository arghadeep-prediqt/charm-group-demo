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
