import { createSlice } from '@reduxjs/toolkit';
import { getAdvertsThunk } from './operations';

const initialState = {
  items: [],
  favorites: [],
  isLoading: false,
  error: null,
  filter: { carBrand: "", price: "", from: "", to: "" },
};

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.items = [...state.items, ...payload];
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {
    addFavorite(state, { payload }) {
      state.favorites = [...state.favorites, payload];
    },
    delFavorite(state, { payload }) {
      state.favorites = state.favorites.filter(({ id }) => id !== payload);
    },
    changeFilter(state, { payload }) {
      state.filter = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAdvertsThunk.pending, handlePending)
      .addCase(getAdvertsThunk.fulfilled, handleFulfilled)
      .addCase(getAdvertsThunk.rejected, handleRejected);
  },
});

export const advertsReducer = advertsSlice.reducer;
export const { addFavorite, delFavorite, changeFilter } = advertsSlice.actions;
