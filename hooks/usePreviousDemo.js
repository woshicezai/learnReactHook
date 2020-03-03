import React, { useState, useCallback, useRef, useEffect } from "react";
import UsePrevious from "./usePrevious";
 import UserStaticFunction from './useStaticFunction';

export default function UsePreviousDemo() {
  const [count, setCount] = useState(10);
  const prev = UsePrevious(count);

  const update = UserStaticFunction((ref) => {
    setCount(ref.current + 1);
  },count);
 

  return (
    <div>
      <span>
        current:{count},prev:{prev}
      </span>
      <button onClick={update}>更新</button>
    </div>
  );
}
