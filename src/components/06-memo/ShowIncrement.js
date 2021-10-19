import React from "react";

const ShowIncrement = React.memo(({ increment }) => {
  console.log("Me volvi a general");
  return (
    <div>
      <button className="btn btn-primary" onClick={() => increment(5)}>
        Increment +1
      </button>
    </div>
  );
});

export default ShowIncrement;
