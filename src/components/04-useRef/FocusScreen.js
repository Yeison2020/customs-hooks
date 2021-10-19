import React, { useRef } from "react";
import "../02-useEffect/effects.css";

const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
    console.log(inputRef);
  };
  return (
    <div>
      <h1>Focus Screen</h1>
      <hr />
      <input
        ref={inputRef}
        type="text"
        placeholder="Your Name"
        name="name"
        style={{ width: "80%", height: "36px" }}
      />
      <button className="btn btn-outline-primary" onClick={handleClick}>
        Focus
      </button>
    </div>
  );
};

export default FocusScreen;
// document.querySelector("input").focus();
// document.querySelector("input").select();
