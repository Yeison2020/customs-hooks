import React, { useLayoutEffect, useRef, useState } from "react";
// import "../02-useEffect/effects.css";
import useFetch from "../../hooks/useFetch";
import useCounter from "../../hooks/useCounter";
import "./layout.css";

const LaOutEffect = () => {
  const { counter, increment } = useCounter(1);
  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { quote } = !!data && data[0];
  console.log(quote);
  // Why !!data && data[0]
  // data = null first time meaning
  // !data = true second time if It's
  // !!data = false If It's false meaning the data is not null display data at index data[0]
  //----------------------------useLayOutEffect

  const [boxSize, setBoxSize] = useState({});
  const pTag = useRef();
  //------------------------------------------------
  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect());
  }, [quote]);

  //---------------------------------------------------------------

  return (
    <div>
      <h1>Lay Effect Example</h1>
      <hr />

      <blockquote className="blockquote text-right">
        <p ref={pTag} className="bm-0">
          {quote}
        </p>
      </blockquote>
      <pre>{JSON.stringify(boxSize, null, 3)}</pre>

      <button onClick={increment} className="btn btn-primary">
        Next quote
      </button>
    </div>
  );
};

export default LaOutEffect;
