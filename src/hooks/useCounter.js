import { useState } from "react";

const useCounter = (initialState = 10) => {
  const [state, setstate] = useState(initialState);

  const increment = (factor = 1) => {
    setstate(state + factor);
  };

  const decrement = (factor = 1) => {
    setstate(state - factor);
  };

  const resetCounter = () => {
    setstate((state) => initialState);
  };

  return {
    state,
    increment,
    decrement,
    resetCounter,
  };
};

export default useCounter;
