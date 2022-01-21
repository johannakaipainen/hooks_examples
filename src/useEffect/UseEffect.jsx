import React, { useEffect, useState } from 'react';
import axios from 'axios';

// the function will be called, when the page re-renders
// initially it renders when refreshed and again when the state changes, so twice when you refresh
// you add all the states you want to listen to in an array in the end
// empty array means that state change should not trigger a second render (calls useEffect only once)
// used with api calls

export default function UseEffect() {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  useEffect(()=> {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response)=>{
        setData(response.data[0].email)
        console.log("api was called")
      }); 
  }, []);

  return <div>
    <h1>{data}</h1>
    <h1>{count}</h1>
    <button 
      onClick={()=> {
        setCount(count + 1);
    }}
    >Click</button>
  </div>;
}
