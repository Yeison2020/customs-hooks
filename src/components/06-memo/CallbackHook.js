import React, { useState, useCallback, useEffect } from "react";
import "../02-useEffect/effects.css";
import ShowIncrement from "./ShowIncrement";

const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  // This hook the useCallback replace my increment function to save on the render part
  //   const increment = () => {
  //     setCounter(counter + 1);
  //   };

  //---------------------useCallback
  const increment = useCallback(
    (num) => {
      setCounter((c) => c + num);
    },
    [setCounter]
  );

  //  Another used is when using the useEffect
  useEffect(() => {
    // This is a nice way to do becase the depandancie will be my increment and It not being change It will not call the useEffect function inside of it;
    // Please when reviewing this learn this It's really important;
  }, [increment]);

  return (
    <div>
      <h1>Hello I'm a Callback Hook : {counter}</h1>
      <hr />
      <ShowIncrement increment={increment} />
    </div>
  );
};

export default CallbackHook;
