import React, { useReducer } from 'react';

// when using complex states
const reducer = (state, action) => {
  switch(action.type){
    case "INCREMENT":
      return {count: state.count + 1, showText: state.showText};
    case "TOGGLE_SHOW_TEXT":
      return {count: state.count, showText: !state.showText};
      default:
        return state;
  }
}

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    showText: true
  });

  return <div>
    <h1>{state.count}</h1>
    <button onClick={()=> {
      dispatch({type: "INCREMENT"});
      dispatch({type: "TOGGLE_SHOW_TEXT"});
    }}>Click here</button>
    {state.showText && <p>This is a text</p>}
  </div>;
}
