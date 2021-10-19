import React, { useState } from "react";
import "./counter.css";

const CounterApp = () => {
  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 50,
  });

  const { counter1, counter2, counter3 } = state;

  return (
    <>
      <h1> counter1 {counter1}</h1>
      <h1> counter2 {counter2}</h1>
      <h1>Counter3 {counter3}</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() => {
          setState({
            ...state,
            counter1: counter1 + 1,
          });
        }}
      >
        +1
      </button>
      <button className="btn btn-secondary">+2</button>
    </>
  );
};

export default CounterApp;
