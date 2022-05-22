import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { SearchState } from './types';
import service, { Repo, User } from 'service/apiService';
import { DEFAULT_ERROR_MESSAGE } from 'appConstants';

const initialState: SearchState = {
  query: '',
  result: null,
  errorMessage: '',
  currentPage: 1,
  userIsLoading: false,
  reposIsLoading: false,
};

export const fetchUserData = createAsyncThunk<User | null, string, { rejectValue: string }>(
  'search/fetchSearch',
  async (userName, { rejectWithValue }) => {
    if (!userName.length) {
      return null;
    }

    try {
      return await service.getUser(userName);
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error?.response?.data.message);
      } else {
        return rejectWithValue(DEFAULT_ERROR_MESSAGE);
      }
    }
  }
);

export const fetchReposData = createAsyncThunk<
  Repo[] | null,
  { page: number; userName: string },
  { rejectValue: string }
>('search/fetchReposData', async ({ page, userName }, { rejectWithValue }) => {
  if (!userName.length) {
    return null;
  }

  try {
    return await service.getRepositories(userName, page);
  } catch (error) {
    if (error instanceof AxiosError) {
      return rejectWithValue(error?.response?.data.message);
    } else {
      return rejectWithValue(DEFAULT_ERROR_MESSAGE);
    }
  }
});

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
        state.userIsLoading = true;
      })
      .addCase(fetchUserData.fulfilled, (state, { payload }) => {
        state.userIsLoading = false;

        if (!payload) {
          state.result = null;
          return;
        }
        if (!state.result) {
          state.result = { user: null, repos: null };
        }
        state.result.user = payload;
      })
      .addCase(fetchUserData.rejected, (state, { payload }) => {
        state.userIsLoading = false;
        if (payload === 'Not Found') {
          state.result = { user: null, repos: null };
        } else {
          state.errorMessage = payload || DEFAULT_ERROR_MESSAGE;
        }
      })
      .addCase(fetchReposData.pending, (state) => {
        state.errorMessage = '';
        state.reposIsLoading = true;
      })
      .addCase(fetchReposData.fulfilled, (state, { payload }) => {
        state.reposIsLoading = false;

        if (!payload) {
          state.result = null;
          return;
        }

        if (!state.result) {
          state.result = { user: null, repos: null };
        }

        state.result.repos = payload;
      })
      .addCase(fetchReposData.rejected, (state, { payload }) => {
        state.reposIsLoading = false;
        state.errorMessage = payload || DEFAULT_ERROR_MESSAGE;
      });
  },
});

export const { changeSearch, changePage } = searchSlice.actions;

export default searchSlice.reducer;
