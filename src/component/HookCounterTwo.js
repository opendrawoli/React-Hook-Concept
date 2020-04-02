import React, { useState } from "react";

function HookCounterTwo() {
  const initial = 0;
  const [count, setCount] = useState(initial);

  const IncrementWithFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount(prevCount => prevCount + 1);
    }
  };
  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(initial)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Increment </button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={IncrementWithFive}>Increment five</button>
    </div>
  );
}

export default HookCounterTwo;
