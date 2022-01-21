import React, {useCallback, useState} from 'react';
import axios from 'axios';
import Child from "./Child";

//similar to useMemo hook
// wit useCallback you dont store the variable but the function itself

export default function UseCallback() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("hello ");

  const returnComment = useCallback(
    (name) => {
      return data + name;
    },
    [data]
  );

  return <div>
    <Child returnComment={returnComment}/>
    <button
      onClick={() => {
        setToggle(!toggle);
      }}
    >
      Toggle
    </button>
    {toggle && <h1>toggle</h1>}
  </div>;
}
