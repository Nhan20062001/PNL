import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import storage from 'redux-persist/lib/storage';
import authSlice from './auth/auth.reducer';
import uploadSlice from './upload/upload.reducer';
import customerSlice from './customer/customer.reducer';
import translateSlice from './translation/translation.reducer';
import { AuthState } from './auth/auth.type';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['user', 'token'],
};

export const store = configureStore({
  reducer: {
    authSlice: persistReducer<AuthState>(authPersistConfig, authSlice),
    customerSlice,
    uploadSlice,
    translation: translateSlice,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
