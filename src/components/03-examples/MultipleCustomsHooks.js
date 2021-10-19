import React from "react";
import "../02-useEffect/effects.css";
import useFetch from "../../hooks/useFetch";
import useCounter from "../../hooks/useCounter";

const MultipleCustomsHooks = () => {
  const { counter, increment } = useCounter(1);
  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  // Why !!data && data[0]
  // data = null first time meaning
  // !data = true second time if It's
  // !!data = false If It's false meaning the data is not null display data at index data[0]

  const { author, quote } = !!data && data[0];
  console.log(author, quote);
  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {loading ? (
        <div className="alert alert-info text-center">Loading....</div>
      ) : (
        <blockquote className="blockquote text-right">
          <p>{quote}</p>
          <p className="blockquote-footer">{author}</p>
        </blockquote>
      )}
      <button onClick={increment} className="btn btn-primary">
        Next quote
      </button>
    </div>
  );
};

export default MultipleCustomsHooks;
