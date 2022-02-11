import React from "react";

const Calcbutton = ({ digit, dispatch }) => {
  return (
    <button
      onClick={() => {
        dispatch({ type: "ADD-DIGIT", payload: { digit } });
      }}
      className="buttons calc-btn"
    >
      {digit}
    </button>
  );
};

export default Calcbutton;
