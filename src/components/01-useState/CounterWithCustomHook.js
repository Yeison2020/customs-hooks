import React from "react";
import useCounter from "../../hooks/useCounter";
import "./counter.css";

const CounterWithCustomHook = () => {
  const { state, increment, decrement, resetCounter } = useCounter(100);
  return (
    <div>
      <h1>Counter State : {state}</h1>
      <button onClick={() => decrement(2)} className="btn btn-primary">
        +1
      </button>

      <button onClick={() => increment(2)} className="btn btn-primary">
        -1
      </button>
      <button onClick={() => resetCounter()} className="btn btn-primary">
        Reset Counter
      </button>
    </div>
  );
};

export default CounterWithCustomHook;
