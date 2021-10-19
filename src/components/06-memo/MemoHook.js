import React, { useState, useMemo } from "react";
import "../02-useEffect/effects.css";
import useCounter from "../../hooks/useCounter";
import procesoPesado from "../../helper/procesoPesado";

const MemoHook = () => {
  const { counter, increment } = useCounter(5000);
  const [show, setShow] = useState(false);

  // ------------------useMemo

  const memoProcespoPesado = useMemo(() => procesoPesado(counter), [counter]);

  //---------------------------
  return (
    <div>
      <h1>MemeHook</h1>
      <h3>
        Counter: <small>{counter}</small>
      </h3>
      <p>{memoProcespoPesado}</p>
      <hr />
      <button className="btn btn-primary" onClick={increment}>
        Increment + 1
      </button>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() => setShow((show) => !show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};

export default MemoHook;
