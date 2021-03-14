import { createSlice } from '@reduxjs/toolkit';
/*  STATE */
const initialState = {
  counter: 5,
};

const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementCounter(state) {
      state.counter = state.counter + 1;
    },
    decrementCounter(state, action) {
        state.counter = state.counter - 1;
    },
    setCounter(state, action) {
        const newValue = action.payload;
        state.counter = newValue;
    },
  }
});

export const reducer = slice.reducer;


/* ACTIONS */
export const incrementCounterAction = () => async (dispatch) => {
  dispatch(slice.actions.increment());
};

export const decrementCounterAction = () => async (dispatch) => {
    dispatch(slice.actions.decrementCounter());
};

export const setCounterAction = (newValue) => async (dispatch) => {
    dispatch(slice.actions.setCounter(newValue));
};
  