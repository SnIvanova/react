import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

export const searchResultsSlice = createSlice({
  name: 'searchResults',
  initialState,
  reducers: {
    setSearchResults(state, action) {
      state.list = action.payload;
    },
  },
});

export const { setSearchResults } = searchResultsSlice.actions;
export default searchResultsSlice.reducer;