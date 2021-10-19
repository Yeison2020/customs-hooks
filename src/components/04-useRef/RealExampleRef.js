import React, { useState, useRef } from "react";
import "../02-useEffect/effects.css";
import MultipleCustomsHooks from "../03-examples/MultipleCustomsHooks";

const RealExampleRef = () => {
  // This Example hide and show my MultipleCustomsHooks Still not use of the useRef
  const [show, setShow] = useState(false);
  return (
    <div>
      <h1>Real Ref</h1>
      <hr />
      {show && <MultipleCustomsHooks />}
      <button
        className="btn btn-primary mt-5"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide
      </button>
    </div>
  );
};

export default RealExampleRef;
