import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';

// for more advanced apps, improves performance in huge computations in frontend
// if another state changes, it doesn't recompute 
// you pass the function and the state, when you want to recompute (in this case [data], when the data changes, row 34)
// if you pass [toggle], it recomputes every time toggle changes

export default function UseMemo() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
    .get("http://jsonplaceholder.typicode.com/comments")
    .then((response) => {
      setData(response.data);
    }); 
  }, []);

  const findLongestName = (comments) => {
    if (!comments) return null;
  
    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }
    console.log("this was computed");
    return longestName;
  };

  const getLongestName = useMemo(()=> findLongestName(data), [data]);

  return <div>
    <div>
      {getLongestName}
    </div>
    <button
      onClick={() => {
        setToggle(!toggle);
      }}
    >Toggle</button>
    {toggle && <h1> toggle </h1>}
  </div>
}
