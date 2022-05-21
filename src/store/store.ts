import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from 'store/index';

function getState() {
  let state = {};

  if (localStorage.getItem('app')) {
    const app: string = localStorage.getItem('app') || '';
    state = JSON.parse(app);
  }
  return state;
}

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: getState(),
});

store.subscribe(() => {
  localStorage.setItem('app', JSON.stringify(store.getState()));
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
