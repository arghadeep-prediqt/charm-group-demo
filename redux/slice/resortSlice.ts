import { Resort } from "@/components/@types/pages";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RoomTypeProps {
  id: string;
  date: string;
  count: number;
  title: string;
}

interface UserSliceProps {
  name: string;
  photo: string;
  resorts: Resort[];
}

interface InitialStateProps extends UserSliceProps {
  roomType: RoomTypeProps[];
}

const initialState: InitialStateProps = {
  name: "",
  photo: "",
  resorts: [],
  roomType: [],
};

export const resortSlice = createSlice({
  name: "resort",
  initialState,
  reducers: {
    addResort: (state, action: PayloadAction<UserSliceProps>) => {
      state.name = action.payload?.name || "";
      state.photo = action.payload?.photo || "";
      state.resorts = action.payload?.resorts || [];
    },
    clearResort: (state) => {
      state.name = state.photo = "";
      state.resorts = [];
    },

    addRoomType: (state, action: PayloadAction<RoomTypeProps>) => {
      if (state.roomType.length === 0) {
        state.roomType = state.roomType.concat(action.payload);
        return;
      }

      const arrVal = state.roomType.map((item) => item.id);
      const isDuplicate = arrVal.indexOf(action.payload.id);

      if (isDuplicate === -1) {
        state.roomType = state.roomType.concat(action.payload);
        return;
      }
    },

    incrementRoomType: (state, action: PayloadAction<{ id: string }>) => {
      state.roomType?.map((item) => {
        if (item?.id === action.payload.id) {
          item.count += 1;
          return;
        }
      });
    },

    decrementRoomType: (state, action: PayloadAction<{ id: string }>) => {
      state.roomType?.map((item) => {
        if (item?.id === action.payload.id) {
          if (item.count > 1) {
            item.count -= 1;
            return;
          } else if (item?.count === 1) {
            // New Array
            const newArr = state.roomType.filter(
              (item) => item?.id !== action?.payload.id
            );
            state.roomType = newArr;
          }
        }
      });
    },
    cleraResortRoom: (state) => {
      state.roomType = [];
    },
  },
});

export const {
  addResort,
  clearResort,
  addRoomType,
  decrementRoomType,
  incrementRoomType,
  cleraResortRoom,
} = resortSlice.actions;
