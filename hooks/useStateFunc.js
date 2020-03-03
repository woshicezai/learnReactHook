import React, { useState } from 'react'

function getCountF (){
    console.log('getCountF');
    return Math.random().toFixed(2);
}
export default function useStateFunction(){
    /**
     * 写成函数形式，仅在第一次运行，后面更新都不会运行了
     */
    const [count, setCount] = useState(getCountF);

    return (
        <div>
            <span>{count}</span>
            <button onClick={()=>setCount((c)=>c-0+1)}>点我</button>
        </div>
    )
}