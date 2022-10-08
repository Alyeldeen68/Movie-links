import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesReducer.js";
import countSlice from "./Reducer.js";

const logger = (store) => (next) => (action) => {
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  return result;
};

export default configureStore({
  reducer: {
    counter: countSlice,
    movies: moviesReducer,
  },
});
