import React, { useState, useEffect } from "react";
import { func } from "prop-types";

/**
 * 测试订阅取消用的
 */
const global = {
  count: 10,
  observers: [],
  run: function(value) {
    this.observers.forEach(observer => {
      observer(value);
    });
  },
  subscibe: function(observer) {
    this.observers.push(observer);
  },
  unSub: function(observer) {
    let index = this.observers.indexOf(observer);
    this.observers.splice(index, 1);
  }
};

/**
 *  
 */
export default function EffectState() {
  const [count, setCount] = useState(global.count);
  const [object, setObject] = useState({
    o: "o"
  });

  function unSub() {
    global.unSub(this);
  }
  /**
   * 第二个参数是空数组，则只在加载和卸载调用
   * 但里面的参数都是初始值
   */
  useEffect(() => {
    let handler =  setInterval(()=>{
      //? 第一次click去生成新的object，值是更新的。后面的就不再变化了
       console.log('settimeout',object.o)//这里的object是旧的object
     },4000);
     return ()=>handler.clearTimeout();
  },[]);

  
  useEffect(() => {
    console.log("useEffect count",count);
    document.title = `You clicked ${count} times`;
  },[count]);

  useEffect(() => {
    global.subscibe(this);
    console.log("useEffect observers", global.observers.length);
    return unSub;
  },[]);

  /**
   * setObject中的参数引用地址不变，则不会触发任何更新。
   * 如果变了，则触发自身更新以及其他更新，除非其他更新声明的第二个参数没有变化。
   */
  useEffect(() => {
    console.log("useEffect object", object.o);
  },[object.o]);//! 这种 必须object地址换了&&o的值也变了

  function updateObject(){
    setObject({
      o: object.o += 'sfafdaf'
    });
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <p>current object {object.o}</p>
      <button onClick={() => setCount(count+1)}>Click me</button>
      <button onClick={updateObject}>
        Object Click
      </button>
    </div>
  );
}
