import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  count: 0,
  arr: [1, 2, 3],
};

const countSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increaseCount: (state, action) => {
      console.log("Hello");
      state.count++;
    },
    decreaseCount: (state, action) => {
      state.count--;
    },
    increaseByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { increaseCount, decreaseCount, increaseByAmount } =
  countSlice.actions;
export default countSlice.reducer;
