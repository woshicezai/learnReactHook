import React,{ useRef, useState, useCallback } from "react";

let prefRef;
let prefButtonClick;
export default function TextInputWithFocusButton() {
  const [count, setCount] = useState(0);
  const inputEl = useRef(null);
  const onButtonClick = useCallback(() => {
    // `current` 指向已挂载到 DOM 上的文本输入元素
    inputEl.current.focus();
  },[]);

  const addCount = useCallback(() => {
    setCount(count+1);
  }, [count]);

  if (prefRef) {
    console.log("ref equal", prefRef.current === inputEl.current);
  }
  if (prefButtonClick) {
    console.log("buttonclick equal", prefButtonClick === onButtonClick);
  }
  
  prefRef = inputEl;
  prefButtonClick = onButtonClick;
  return (
    <div>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
      <button onClick={addCount}>+</button>
    </div>
  );
}
