import storageUtils from '@/utils/storage';
import { TranslateEnum } from './translation.type';
import { createSlice } from '@reduxjs/toolkit';

const translationSlice = createSlice({
  name: 'translation',
  initialState: {
    translate: {
      language: 'vn_VN' as TranslateEnum,
    },
  },
  reducers: {
    changeLanguage: (state, action) => {
      storageUtils.set('lang', action.payload);
      state.translate = {
        language: action.payload,
      };
    },
  },

  extraReducers: (builder) => {},
});

export const { changeLanguage } = translationSlice.actions;
export default translationSlice.reducer;
