import React, { useRef } from 'react';

// ref represents the input and you can access the value with current.value 
// current.focus() focuses the input when you click the button 
// current.value = "" clears the input after click
export default function UseRef() {

  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.value = "";
  };

  return <div>
    <h1>Johanna</h1>
    <input type="text" placeholder="Ex..." ref={inputRef} />
    <button onClick={handleClick}>Change Name</button>
  </div>;
}
