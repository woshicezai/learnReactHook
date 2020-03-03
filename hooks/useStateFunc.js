import React, { useState } from 'react'

function getCountF (){
    console.log('getCountF');
    return Math.random().toFixed(2);
}
export default function useStateFunction(){
    const [count, setCount] = useState(getCountF);

    return (
        <div>
            <span>{count}</span>
            <button onClick={()=>setCount((c)=>c-0+1)}>点我</button>
        </div>
    )
}