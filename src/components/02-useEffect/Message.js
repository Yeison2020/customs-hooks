import React, { useEffect, useState } from "react";

const Message = () => {
  const [coords, setcoords] = useState({ x: 0, y: 0 });
  const { x, y } = coords;
  useEffect(() => {
    const mouseMove = (e) => {
      const coords = { x: e.x, y: e.y };
      setcoords(coords);
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.addEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div>
      <h1>Your Genial Yeison</h1>
      <p>
        x:{x} y:{y}
      </p>
    </div>
  );
};

export default Message;
