import auth from '@/store/auth/auth.api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ParamLoginAdmin, ResetPasswordModel } from './auth.type';

const loginAdminAction = createAsyncThunk(
  'auth/loginAdminAction',
  async (params: ParamLoginAdmin, thunkAPI) => {
    try {
      const res = await auth.loginAdmin(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  },
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

const resetPasswordByEmailAction = createAsyncThunk(
  'auth/resetPasswordByEmail',
  async (resetPasswordModel: ResetPasswordModel, thunkAPI) => {
    try {
      const res = await auth
        .resetPasswordByEmail(resetPasswordModel)
        .then((response) => {
          if (response && response?.data) {
            return response;
          }
          return {};
        });
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  },
);

export { loginAdminAction, resetPasswordByEmailAction };
