import React from 'react';
import {useEffect, useLayoutEffect, useRef } from 'react';

// almost identical to useEffect
// but useLayoutEffect is called before useEffect
// useEffect is called after page render, useLayoutEffect is called before render
// in this case the value is Pedro at render, but useEffect changes it to hello after render

export default function UseLayoutEffect() {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    inputRef.current.value = "hello";
    }, []);

  return <div>
    <input ref={inputRef} value="Pedro" style={{ width: 400, height: 60 }} />
  </div>;
}
