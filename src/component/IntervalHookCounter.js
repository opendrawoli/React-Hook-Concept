import React, { useState, useEffect } from "react";

function IntervalHookCounter() {
  const [count, setCount] = useState(0);
  const tick = () => {
    setCount(a => a + 1);
  };
  useEffect(() => {
    const interval = setInterval(tick, 500);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      <h4>{count}</h4>
    </div>
  );
}

export default IntervalHookCounter;
