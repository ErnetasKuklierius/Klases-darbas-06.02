import React, { useState } from "react";

export const Task1 = () => {
  const [fontSize, setFontSize] = useState(30);

  return (
    <>
      <p style={{ fontSize }}>Tekstas tekstas tekstas</p>
      <button onClick={() => setFontSize(fontSize + 5)}>
        Increase font size
      </button>
      <button onClick={() => setFontSize(fontSize - 5)}>
        Reduce font size
      </button>
    </>
  );
};
