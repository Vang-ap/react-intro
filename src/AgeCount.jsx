import { useState } from 'react';

export function AgeCounter(props) {
  const [age, setAge] = useState(30);
  // const [age, setAge] = useState(30);
  // age = contains the value
  // setAge = function to change the value - sets the value
  // useState(30) = initial value
  
  function increaseAge() {
    // Adding +1 to age every time we click
    setAge(age + 1);
  }
  
  console.log("*** rerender");
  return (
    <>
        <div>
      <button onClick={increaseAge}>Increase age</button>
      <p>I am {age} years old</p>
      </div>
    </>
  )
}