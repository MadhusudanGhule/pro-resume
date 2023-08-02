import { DECREMENT, INCREMENT } from "../Constant";

export const increment = () => {
  return dispatch => {
    dispatch({ type: INCREMENT });
  };
};

export const decrement = () => {
  return { type: DECREMENT };
};

export const incrementAsync = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment());
    }, 1000);
  };
};
