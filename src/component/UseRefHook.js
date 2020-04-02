import React, { useEffect, useRef } from "react";

function UseRefHook() {
  const inputref = useRef(0);

  useEffect(() => {
    inputref.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputref} type="text"></input>
    </div>
  );
}

export default UseRefHook;
