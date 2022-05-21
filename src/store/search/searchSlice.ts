import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { FetchUserDataReturn, SearchState } from './types';
import service from 'service/apiService';
import { DEFAULT_ERROR_MESSAGE } from 'Constants';

const initialState: SearchState = {
  query: '',
  result: null,
  errorMessage: '',
  currentPage: 1,
  isLoading: false,
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
        return rejectWithValue(DEFAULT_ERROR_MESSAGE);
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
        state.isLoading = true;
      })
      .addCase(fetchUserData.fulfilled, (state, { payload }) => {
        state.result = payload;
        state.isLoading = false;
      })
      .addCase(fetchUserData.rejected, (state, { payload }) => {
        state.isLoading = false;

        if (payload === 'Not Found') {
          state.result = { user: null, repos: null };
        } else {
          state.errorMessage = payload || DEFAULT_ERROR_MESSAGE;
        }
      });
  },
});
export const { changeSearch } = searchSlice.actions;

export default searchSlice.reducer;
