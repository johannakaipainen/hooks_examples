import React, { useState } from 'react';

export default function UseState() {
  const [inputValue, setInputValue] = useState("Johanna");
  
  const handleChange = (e) => {
    let newValue = e.target.value;
    setInputValue(newValue);
  }
  return <div>
    <input placeholder="enter something" onChange={handleChange}/>
    {inputValue}
  </div>;
}
