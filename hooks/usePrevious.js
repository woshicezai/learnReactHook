import React,{useRef,useEffect} from 'react';
export default function UsePrevious(value){
  let ref = useRef();

  useEffect(()=>{
      ref.current = value;
  })
  return ref.current;
}