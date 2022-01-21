import React, { useState, createContext } from 'react';
import Login from "./Login";
import User from "./User";

// creates a wrapper that is a collection of states, with child components
// you have access to all those states within the child components
// you pass value that means all the states and functions you want to have access to in the child components
// you don't pass them to props, but import the AppContext in the child components
// useful in applications with username, who has name, email etc. data you want access to quickly

export const AppContext = createContext(null);

export default function useContext() {
  const [username, setUsername] = useState("");

  return <AppContext.Provider value={{username, setUsername}}>
    <Login  />
    <User />
  </AppContext.Provider>
}
