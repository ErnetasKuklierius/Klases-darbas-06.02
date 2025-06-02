import React, { useState } from "react";

export const Task3 = () => {
  const [square, addSquare] = useState([])

  const handlegenerate = () => {
    addSquare((prev) => [...prev, addSquare.length + 1])
  }
  return (
    <>

    </>
  )
};
