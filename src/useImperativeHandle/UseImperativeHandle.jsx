import React, { useRef } from 'react';
import Button  from "./Button";

// this allows to change the state in the parent, even though the state exists in the child
export default function UseImperativeHandle() {
  const buttonRef = useRef(null);

  return <div>
    <button onClick={() => {
      buttonRef.current.alterToggle();
    }}
    >
      Button from Parent
    </button>
    <Button ref={buttonRef}/>
  </div>;
}
