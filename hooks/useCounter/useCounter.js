import { useState } from "react";

const useCounter = (initialState = 1) => {
  const [counter, setState] = useState(initialState);

  const increment = () => {
    setState(counter + 1);
  };

  const reset = () => {
    setState(initialState);
  };

  const decrement = () => {
    setState(counter - 1);
  };

  return {
    counter,
    increment,
    reset,
    decrement,
  };
};

export default useCounter;
