import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserSliceProps {
  name: string;
  email: string;
  is_auth?: boolean;
  role?: "admin" | "teacher" | "student" | "none";
}

const initialState: UserSliceProps = {
  name: "",
  email: "",
  is_auth: false,
  role: "none",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserDetails: (state, action: PayloadAction<UserSliceProps>) => {
      state.name = action.payload?.name || "";
      state.role = action.payload?.role || "none";
      state.email = action.payload?.email || "";
      state.is_auth = action.payload.is_auth;
    },
  },
});

export const { addUserDetails } = userSlice.actions;
