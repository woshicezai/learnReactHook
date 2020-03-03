import React, {useState,useCallback } from 'react';

let preF;
let object ={};
export default function UseCallBack(){
    const [count,setCount] = useState(0);
    const [name,setName] = useState('zhouce');

    let addCount = useCallback(()=>{
        setCount(count+1);
    },[count])
   
    let addName = useCallback(()=>{
        setName(name+'adfasdfasdf');
    },[name])
   
    if(preF){
        console.log('比较函数引用',preF === addCount);
    }

    preF =addCount;

    return (
        <div>
           <div onClick={addCount}>{`点击我,我要加一${count}`}</div>
           <div onClick={addName}>{`点击我,我要加名字${name}`}</div>
        </div>
    )
}