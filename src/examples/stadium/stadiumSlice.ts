import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from 'store';
// import { fetchCount } from './counterAPI';
import { AvailableTerm } from 'domains';

export interface IStadiumResponse {
  message: string;
  stadiums: AvailableTerm[];
}

export interface IState {
  value: IStadiumResponse[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: IState = {
  value: [
    {
      message: '',
      stadiums: [{ date: '', title: '', start: '', end: '' }],
    },
  ],
  status: 'idle',
};

export const stadiumSlice = createSlice({
  name: 'stadiums',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addStadiums: (state, action: PayloadAction<IStadiumResponse>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value.push(action.payload);
    },
    removeStadium: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value.pop();
    },
  },
});

export const { addStadiums, removeStadium } = stadiumSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
// export const selectStadium = (state: RootState) => state.stadiums.value;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd =
//   (amount: number): AppThunk =>
//   (dispatch, getState) => {
//     const currentValue = selectCount(getState());
//     if (currentValue % 2 === 1) {
//       dispatch(incrementByAmount(amount));
//     }
//   };

export default stadiumSlice.reducer;
