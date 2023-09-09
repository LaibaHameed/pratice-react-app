"use client"
import React, { createContext } from "react";
export const myContext = createContext();

const Context = ({ children }) => {
  const userName = "Laiba Hameed";
  return (
    <>
      <myContext.Provider value={userName}>{children}</myContext.Provider>
    </>
  );
};

export default Context;
