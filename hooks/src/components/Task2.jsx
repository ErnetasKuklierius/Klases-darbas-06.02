import React, { useState } from "react";

export const Task2 = ( {handleNumber, number}) => {;

  return (
    <>
      <h2>Count: {number}</h2>
      <button onClick={handleNumber}>Increase count</button>
    </>
  );
};
