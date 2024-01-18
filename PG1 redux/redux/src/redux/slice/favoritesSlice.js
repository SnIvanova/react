import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites(state, action) {
      state.list = [...state.list, action.payload];
    },
    removeFromFavorites(state, action) {
      state.list = state.list.filter((fav) => fav !== action.payload);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;