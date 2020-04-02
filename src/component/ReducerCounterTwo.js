import React, { useReducer } from "react";

const initialState = {
  firseConter: 0
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { firstCounter: state.firstConter + 1 };
    case "decrement":
      return { firstCounter: state.firstConter - 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function ReduceCounter() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>{count.firstConter}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default ReduceCounter;
