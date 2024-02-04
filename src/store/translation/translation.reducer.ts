import storageUtils from '@/utils/storage';
import { createSlice } from '@reduxjs/toolkit';
import { TranslateEnum } from './translation.type';

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
      return {
        ...state,
        translate: {
          language: action.payload,
        },
      };
    },
  },

  extraReducers: () => {},
});

export const { changeLanguage } = translationSlice.actions;
export default translationSlice.reducer;
