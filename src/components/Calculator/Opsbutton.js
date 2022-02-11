import React from "react";

const Opsbutton = ({ operation, dispatch }) => {
  return (
    <button
      onClick={() => dispatch({ type: "OPERATION", payload: { operation } })}
      className="buttons calc-btn"
    >
      {operation}
    </button>
  );
};

export default Opsbutton;
