import React, { useState, useEffect } from "react";

export default function EffectState() {
  const [count, setCount] = useState(0);
  console.log('每次渲染都会走一遍函数内部')
  useEffect(() => {//每次更新都会新生成一个函数
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
