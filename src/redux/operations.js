import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAdverts } from 'services/advertsApi';

export const getAdvertsThunk = createAsyncThunk(
  'adverts/fetch',
  async (page, thunkAPI) => {
    try {
      const adverts = await getAdverts(page);
      return adverts;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
