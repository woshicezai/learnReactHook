import React, { useState } from "react";
import ReactDom from "react-dom";
// import EffectState from "./hooks/useEffect2";
import UseReducer from "./hooks/useReducer";
import UseCallback from "./hooks/useCallback";
import UseRef from "./hooks/useRef";
import UseCallback2 from "./hooks/useCallback2";
import UseReviousDemo from "./hooks/usePreviousDemo";
import TestSyncDemo from "./hooks/testSyncDemo";
import TestUseStateFunc from "./hooks/useStateFunc";
function App() {
  return (
    <div>
      <UseReducer />
      <span>-----------------------</span>
      <UseCallback />
      <span>-----------------------</span>
      <UseRef/>
      <span>-----------------------</span>
      <UseCallback2/>
      <span>-----------------------</span>
      <UseReviousDemo/>
      <span>-----------------------</span>
      <TestSyncDemo/>
      <span>-----------------------</span>
      <TestUseStateFunc/>
    </div>
  );
}

ReactDom.render(<App />, document.getElementById("root"));
