import React, {useState,useCallback,useRef,useEffect } from 'react';

/**
 * 使用useRef的不变性 使得每次渲染的函数都不变
 */
export default function Form() {
    const [text, updateText] = useState('');
    const textRef = useRef();
  
    useEffect(() => {
        console.log('我是useEffect');
      textRef.current = text; // 把它写入 ref
    });

    console.log('我在useEffect的下边');

    const changeText = useCallback((e)=>{
        console.log('changeText',e.target.value)
        updateText(e.target.value);
    },[])

    const handleSubmit = useCallback(() => {
      const currentText = textRef.current; // 从 ref 读取它
      alert(currentText);
    }, [textRef]); // 不要像 [text] 那样重新创建 handleSubmit
  
    return (
      <div>
        <input value={text} onChange={changeText} />
        <button onClick={handleSubmit} >提交</button>
      </div>
    );
  }