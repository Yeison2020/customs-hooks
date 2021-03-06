import React from "react";
import { Hijo } from "./Hijo";
import { useState, useCallback, useEffect } from "react";
import "../02-useEffect/effects.css";

const Padre = () => {
  const numeros = [2, 4, 6, 8, 10];
  const [valor, setValor] = useState(0);

  // Why I just needed to pass the number and It's current value Remember those numbers are being pass one by one when using map  This will solve the problem.

  const incrementar = useCallback(
    (num) => {
      setValor((v) => v + num);
    },
    [setValor]
  );

  return (
    <div>
      <h1>Padre</h1>
      <p> Total: {valor} </p>

      <hr />

      {numeros.map((n) => (
        <Hijo key={n} numero={n} incrementar={incrementar} />
      ))}
      {/* <Hijo /> */}
    </div>
  );
};

export default Padre;
