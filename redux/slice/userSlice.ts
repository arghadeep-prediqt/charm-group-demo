import { RoleType } from "@/components/@types/common";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserSliceProps {
  name: string;
  email: string;
  image: string;
  is_auth?: boolean;
  role?: RoleType | string;
}

const initialState: UserSliceProps = {
  name: "",
  email: "",
  image: "",
  role: null,
  is_auth: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserDetails: (state, action: PayloadAction<UserSliceProps>) => {
      state.name = action.payload?.name || "";
      state.image = action.payload?.image || "";
      state.email = action.payload?.email || "";
      state.role = action.payload?.role || null;
      state.is_auth = action.payload?.is_auth || false;
    },
  },
});

export const { addUserDetails } = userSlice.actions;
