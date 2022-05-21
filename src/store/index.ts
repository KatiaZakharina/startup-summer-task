import { combineReducers } from '@reduxjs/toolkit';

import searchReducer from 'store/search/searchSlice';

export const rootReducer = combineReducers({
  searchReducer,
});
