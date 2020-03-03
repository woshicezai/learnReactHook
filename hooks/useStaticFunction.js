import React, { useCallback, useRef, useEffect } from "react";

export default function useHandler(fn,currentValue) {
  const ref = useRef(null);

  useEffect(() => {
    ref.current = currentValue;
  });

  const handler = useCallback(()=>{
      fn(ref);
  }, [ref]);

  return handler;
}