import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slice/userSlice";
import { resortSlice } from "./slice/resortSlice";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    resort: resortSlice.reducer,

    // [courseApi.reducerPath]: courseApi.reducer,
  },

  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware().concat(
  //       courseApi.middleware,
  //       enrolledCourseApi.middleware
  //     ),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
