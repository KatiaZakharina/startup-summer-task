import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { FetchUserDataReturn, SearchState } from './types';
import service from 'service/apiService';

const initialState: SearchState = {
  query: '',
  result: null,
  errorMessage: '',
  currentPage: 1,
};

export const fetchUserData = createAsyncThunk<FetchUserDataReturn, string, { rejectValue: string }>(
  'search/fetchSearch',
  async (userName, { rejectWithValue }) => {
    if (!userName.length) {
      return null;
    }

    try {
      const user = await service.getUser(userName);
      const repos = await service.getRepositories(userName);
      return { user, repos };
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error?.response?.data.message);
      } else {
        return rejectWithValue('Sorry, something went wrong');
      }
    }
  }
);

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeSearch: (state, { payload }: PayloadAction<string>) => {
      state.query = payload;
    },
    changePage: (state, { payload }: PayloadAction<number>) => {
      state.currentPage = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.result = null;
        state.errorMessage = '';
      })
      .addCase(fetchUserData.fulfilled, (state, { payload }) => {
        state.result = payload;
      })
      .addCase(fetchUserData.rejected, (state, { payload = 'Something went wrong...' }) => {
        if (payload === 'Not Found') {
          state.result = { user: null, repos: null };
        } else {
          state.errorMessage = payload;
        }
      });
  },
});
export const { changeSearch } = searchSlice.actions;

export default searchSlice.reducer;