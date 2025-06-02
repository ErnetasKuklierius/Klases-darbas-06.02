import "./App.css";
import React, {useState} from 'react'
import { Task5 } from "./components/Task5";
import { Task2 } from "./components/Task2";
import { Task1 } from "./components/Task1";
import { Task3 } from "./components/Task3";
import { Task6 } from "./components/Task6";
import { ComponentA } from "./components/ComponentA";

function App() {
  const [square, addSquare] = useState([])

  const handlegenerate = () => {
    addSquare((prev) => [...prev, addSquare.length + 1])
  }

  const [number, addNumber] = useState(0);

  const handleNumber = () => {
    addNumber((prev) => prev + 1);
  }

  return (
    <>
      <Task1 />
      <Task5 />
      <Task2 />
      <Task3 />
      <Task6 />
    </>
  );
}

export default App;
