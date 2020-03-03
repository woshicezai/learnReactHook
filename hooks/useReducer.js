import React, { useReducer } from 'react';
import {reducer,initialState} from '../reducer/count';

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log('useReducer',state.count);
  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => {
          dispatch({type: 'increment'})
      }}>+</button>
      <button onClick={() => dispatch({type: 'reset'})}>reset</button>
      {/* 正常情况下 reducer每次返回的state都是新对象，所以都会渲染，如果改为同一个对象，则不会,但第一次会 */}
      <button onClick={() => dispatch({type: 'same'})}>same</button>
    </div>
  );
}