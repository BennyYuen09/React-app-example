import { useState, useEffect } from "react";
import Adder from "./Adder";

const Counter = () => {
  const [count, setCount] = useState(0);
  
  const addAction = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    alert(`The current count value is ${count}`);
  }, [count]);

  return (
    <>
      <p>Current Count: {count}</p>
      <Adder add={addAction} />
    </>
  );
};

export default Counter;

