import { useState } from 'react';

export default function Counter() {
  const [age, setAge] = useState(0);

  function increment() {
    setAge(a => a + 1);
  }
 function decrement() {
    setAge(a => a - 1);
  }
  return (
    <>
      <h1>Your age: {age}</h1>
      <button onClick={() => {
        increment();        
      }}>+1</button>
      <button onClick={() => {
        decrement();
      }}>-1</button>
    </>
  );
}
