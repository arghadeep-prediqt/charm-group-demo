import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slice/userSlice";
import { resortSlice } from "./slice/resortSlice";
import { authApi } from "./services/authApi";
import { resortApi } from "./services/resortApi";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    resort: resortSlice.reducer,

    [authApi.reducerPath]: authApi.reducer,
    [resortApi.reducerPath]: resortApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, resortApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
