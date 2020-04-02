import React, { useRef } from "react";
import "./App.css";
import ClassCounter from "./component/ClassCounter";
import HookCounter from "./component/HookCounter";
import HookCounterTwo from "./component/HookCounterTwo";
import HookCounterThree from "./component/HookCounterThree";
import HookCounterFour from "./component/HookCounterFour";
import HookCounterOne from "./component/HookCounterOne";
import HookMouse from "./component/HookMouse";
import MouseContainer from "./component/MouseContainer";
import IntervalClassCounter from "./component/IntervalClassCounter";
import IntervalHookCounter from "./component/IntervalHookCounter";
import Datafetching from "./component/Datafetching";
import ComponentC from "./component/ComponentC";
import ReduceCounter from "./component/ReduceCounter";
import DataFetchingTwo from "./component/DataFetchingTwo";
import CounterUseMemo from "./component/CounterUseMemo";
import UseRefHook from "./component/UseRefHook";

export const userContext = React.createContext();
export const channelContext = React.createContext();
function App() {
  return (
    <div className="App">
      <UseRefHook />
      {/* <CounterUseMemo /> */}
      {/* <DataFetchingTwo /> */}
      {/* <ReduceCounter /> */}
      {/* <userContext.Provider value={" Opendra"}>
        <channelContext.Provider value={"Sathisoft"}>
          <ComponentC />
        </channelContext.Provider>
      </userContext.Provider> */}

      {/* <Datafetching /> */}
      {/* <IntervalClassCounter /> */}
      {/* <IntervalHookCounter /> */}
      {/* <MouseContainer /> */}
      {/* <HookMouse /> */}
      {/* <HookCounterOne /> */}
      {/* <HookCounterFour /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterTwo /> */}
      {/* <ClassCounter />
      <HookCounter /> */}
    </div>
  );
}

export default App;
