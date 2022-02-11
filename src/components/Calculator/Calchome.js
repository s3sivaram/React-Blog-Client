import React, { useReducer } from "react";
import "./Calculator.css";
import Calcbutton from "./Calcbutton";
import Opsbutton from "./Opsbutton";
import { reducer } from "./Reducer";

const initialState = {
  currentOperand: "",
  previousOperand: "",
  operation: "",
  result: 0,
};

const Calchome = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="calc-container">
      <div className="output">
        <div className="spantwo op1">
          {state.previousOperand} {state.operation}
        </div>
        <div className="spantwo op2"> {state.currentOperand}</div>
        <hr />
        <div className="spantwo result"> {state.result}</div>
      </div>
      <button
        className="calc-btn"
        onClick={() => dispatch({ type: "ALL-CLEAR" })}
      >
        AC
      </button>
      <button
        className="calc-btn"
        onClick={() => dispatch({ type: "DELETE-DIGIT" })}
      >
        {" "}
        Del{" "}
      </button>
      <Opsbutton operation="*" dispatch={dispatch}></Opsbutton>
      <Calcbutton dispatch={dispatch} digit={1}></Calcbutton>
      <Calcbutton dispatch={dispatch} digit={2}></Calcbutton>
      <Calcbutton dispatch={dispatch} digit={3}></Calcbutton>
      <Calcbutton dispatch={dispatch} digit={4}></Calcbutton>
      <Calcbutton dispatch={dispatch} digit={5}></Calcbutton>
      <Calcbutton dispatch={dispatch} digit={6}></Calcbutton>
      <Calcbutton dispatch={dispatch} digit={7}></Calcbutton>
      <Calcbutton dispatch={dispatch} digit={8}></Calcbutton>
      <Calcbutton dispatch={dispatch} digit={9}></Calcbutton>
      <Calcbutton dispatch={dispatch} digit={0}></Calcbutton>
      <Opsbutton operation="+" dispatch={dispatch}></Opsbutton>
      <Opsbutton operation="-" dispatch={dispatch}></Opsbutton>
      <Opsbutton operation="/" dispatch={dispatch}></Opsbutton>
      <Calcbutton dispatch={dispatch} digit={"."}></Calcbutton>
      {/* <button className="calc-btn"> .</button> */}
      <button
        onClick={() => dispatch({ type: "EVALUATE" })}
        className="equaltwo calc-btn"
      >
        =
      </button>
    </div>
  );
};

export default Calchome;
