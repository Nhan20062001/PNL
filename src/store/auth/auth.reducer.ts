import { createSlice } from "@reduxjs/toolkit";
import { loginAdminAction } from "./auth.action";

// const userStorage = JSON.parse(
//   (localStorage.getItem("user") || null) as string
// );

const userStorage = "";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    infoAccount: {
      user: userStorage || {},
      accessToken: "",
      refreshToken: "",
    },
  },
  reducers: {
    setAuthTokens: (state, action) => {
      const { accessToken, refreshToken } = action.payload;

      localStorage.setItem("user", JSON.stringify(action.payload.data.user));
      state.infoAccount = {
        user: action.payload.data.user,
        accessToken: accessToken,
        refreshToken: refreshToken,
      };
    },

    removeAuth: (state, _) => {
      state.infoAccount = {
        user: {},
        accessToken: "",
        refreshToken: "",
      };
      localStorage.removeItem("user");
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginAdminAction.pending, (state) => {
        state.infoAccount = {
          user: {},
          accessToken: "",
          refreshToken: "",
        };
      })
      .addCase(loginAdminAction.fulfilled, (state, action) => {
        if (!action.payload) {
          // expiresIn
        }
      })
      .addCase(loginAdminAction.rejected, (state, _) => {
        state.infoAccount = {
          user: {},
          accessToken: "",
          refreshToken: "",
        };
      });
  },
});

export const { setAuthTokens, removeAuth } = authSlice.actions;

export default authSlice.reducer;
