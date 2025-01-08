import { Resort } from "@/components/@types/pages";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserSliceProps {
  name: string;
  photo: string;
  resorts: Resort[];
}

const initialState: UserSliceProps = {
  name: "",
  photo: "",
  resorts: [],
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
  },
});

export const { addResort, clearResort } = resortSlice.actions;
