import { DECREAMENT, INCREAMENT } from "../context/countContext";

const initialState = 0;

const countReducer = (state = initialState, { type }) => {
  switch (type) {
    case INCREAMENT:
      return state + 1;
    case DECREAMENT:
      return state - 1;

    default:
      return state;
  }
};

export default countReducer;
