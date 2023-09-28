import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/auth.reducer";

export const store = configureStore({
  reducer: {
    authSlice,
    // userSlice,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
