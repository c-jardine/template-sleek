import { createSlice } from '@reduxjs/toolkit';
import { CookieValueTypes, getCookie, setCookie } from 'cookies-next';

export enum Theme {
  LIGHT,
  DARK,
}

export interface ThemeSliceProps {
  darkMode: CookieValueTypes;
}

const initialState: ThemeSliceProps = {
  darkMode: getCookie('darkMode'),
};

export const asyncToggleTheme = () => (dispatch) => {
  const isDarkMode = getCookie('darkMode');
  setCookie('darkMode', !isDarkMode);
  dispatch(toggleTheme());
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
