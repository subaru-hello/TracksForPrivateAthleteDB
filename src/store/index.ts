import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../examples/counter/counterSlice';
import availableDateReducer from '../examples/availableDate/availableDateSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    availableDates: availableDateReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
