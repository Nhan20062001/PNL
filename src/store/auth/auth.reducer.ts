import { createSlice } from '@reduxjs/toolkit';
import { loginAdminAction } from './auth.action';
import { AuthState } from './auth.type';

const initialState: AuthState = {
  user: {
    id: '',
    createdAt: '',
    updatedAt: '',
    deletedAt: null,
    role: '',
    email: '',
    firstName: null,
    lastName: null,
    avatar: '',
  },
  token: {
    expiresIn: 0,
    accessToken: '',
    refreshToken: '',
  },
  error: '',
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserAuth: (state: AuthState, action: any) => ({
      ...state,
      user: action.payload,
    }),
    setTokenAuth: (state: AuthState, action: any) => ({
      ...state,
      token: action.payload,
    }),
    setErrorAuth: (state: AuthState, action: any) => ({
      ...state,
      error: action.payload,
    }),
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginAdminAction.pending, (state: AuthState) => ({
        ...state,
        token: {
          expiresIn: 0,
          accessToken: '',
          refreshToken: '',
        },
        user: {
          id: '',
          createdAt: '',
          updatedAt: '',
          deletedAt: null,
          role: '',
          email: '',
          firstName: null,
          lastName: null,
          avatar: '',
        },
        error: '',
        loading: true,
      }))
      .addCase(loginAdminAction.fulfilled, (state: AuthState, action: any) => {
        const { data } = action.payload;
        return {
          ...state,
          token: {
            ...data.token,
          },
          user: {
            ...data.user,
          },
          error: '',
          loading: false,
        };
      })
      .addCase(loginAdminAction.rejected, (state: AuthState, action: any) => {
        const { error } = action.payload;
        return {
          ...state,
          token: {
            expiresIn: 0,
            accessToken: '',
            refreshToken: '',
          },
          user: {
            id: '',
            createdAt: '',
            updatedAt: '',
            deletedAt: null,
            role: '',
            email: '',
            firstName: null,
            lastName: null,
            avatar: '',
          },
          error,
          loading: false,
        };
      });
  },
});

export const { setTokenAuth, setUserAuth, setErrorAuth } = authSlice.actions;

export default authSlice.reducer;
