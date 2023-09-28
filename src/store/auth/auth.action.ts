import auth from "@/store/auth/auth.api";
import { createAsyncThunk } from "@reduxjs/toolkit";

const loginAdminAction = createAsyncThunk(
  "auth/loginAdminAction",
  async (params: { email: string; password: string }, thunkAPI) => {
    try {
      const { email, password } = params;
      const res = await auth
        .loginAdmin({ email, password })
        .then((response) => {
          if (response) {
            return response;
          }
          return {};
        });
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

// const forgotPasswordByEmailAction = createAsyncThunk(
//   "auth/forgotPasswordByEmailAction",
//   async (params, thunkAPI) => {
//     try {
//       const { email } = params;
//       const res = await auth.forgotPasswordByEmail(email).then((response) => {
//         if (response && response?.data) {
//           return response;
//         }
//         return {};
//       });
//       return res;
//     } catch (error) {
//       return thunkAPI.rejectWithValue({ error: error.message });
//     }
//   }
// );

// const resetPasswordByEmailAction = createAsyncThunk(
//   "auth/resetPasswordByEmail",
//   async (params, thunkAPI) => {
//     try {
//       const { email, newPassword, accessToken } = params;
//       const res = await auth
//         .resetPasswordByEmail(email, newPassword, accessToken)
//         .then((response) => {
//           if (response && response?.data) {
//             return response;
//           }
//           return {};
//         });
//       return res;
//     } catch (error) {
//       return thunkAPI.rejectWithValue({ error: error.message });
//     }
//   }
// );

export {
  loginAdminAction,
  // forgotPasswordByEmailAction,
  // resetPasswordByEmailAction,
};
