import React, { useState } from "react";
import "../02-useEffect/effects.css";
import useCounter from "../../hooks/useCounter";
import Small from "./Small";

const Memorize = () => {
  const { counter, increment } = useCounter(10);
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>
        Counter: <Small value={counter} />
      </h1>
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

export default Memorize;
