import React, { useState } from "react";

function HookCounterThree() {
  const [name, setName] = useState({ firstname: "", lastname: "" });
  return (
    <div>
      <form>
        <input
          type="text"
          value={name.firstname}
          onChange={e => setName({ ...name, firstname: e.target.value })}
        ></input>
        <input
          type="text"
          value={name.lastname}
          onChange={e => setName({ ...name, lastname: e.target.value })}
        ></input>
        <h3>your first name is:{name.firstname}</h3>
        <h3>your first name is:{name.lastname}</h3>
      </form>
    </div>
  );
}

export default HookCounterThree;
