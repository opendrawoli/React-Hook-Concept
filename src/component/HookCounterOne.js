import React, { useState, useEffect } from "react";

function HookCounterOne() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You Clicked ${count} Times`;
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click {count} Times</button>
    </div>
  );
}

export default HookCounterOne;
