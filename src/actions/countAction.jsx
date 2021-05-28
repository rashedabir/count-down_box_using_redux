import { DECREAMENT, INCREAMENT } from "../context/countContext";

export const increament = () => {
  return {
    type: INCREAMENT,
  };
};

export const decreament = () => {
  return {
    type: DECREAMENT,
  };
};
