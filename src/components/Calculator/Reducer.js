export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD-DIGIT":
      //   check if the current operand is empty
      return {
        ...state,
        currentOperand: state.currentOperand + action.payload.digit,
      };

    case "DELETE-DIGIT":
      console.log("op1=", state.currentOperand, state.currentOperand.length);
      if (state.currentOperand.length === 1)
        return { ...state, currentOperand: "" };
      else {
        const currentOp = state.currentOperand.slice(0, -1);
        return { ...state, currentOperand: currentOp };
      }

    case "ALL-CLEAR":
      return {
        ...state,
        currentOperand: "",
        previousOperand: "",
        operation: "",
        result: 0,
      };
    case "OPERATION": {
      //   diallow duplicate operations
      if (state.operation === action.payload.operation) {
        return state;
      } else {
        return {
          ...state,
          operation: action.payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: "",
        };
      }
    }
    case "EVALUATE": {
      console.log(
        "Evaluate = ",
        state.currentOperand,
        state.operation,
        state.previousOperand
      );
      const currentOperand = parseFloat(state.currentOperand);
      const previousOperand = parseFloat(state.previousOperand);
      let result = 0;
      switch (state.operation) {
        case "+":
          result = previousOperand + currentOperand;
          break;
        case "-":
          result = previousOperand - currentOperand;
          break;
        case "*":
          result = previousOperand * currentOperand;
          break;
        case "/":
          result = previousOperand / currentOperand;
          break;
        default:
          result = 0;
      }
      return { ...state, result: result };
    }
    default:
      return state;
  }
};
