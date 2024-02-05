export function AgeCounter(props) {
  let age = 30;
  
  function increaseAge() {
    // Adding +1 to age every time we click
    age = age + 1;
  }
  
  return (
    <>
        <div>
      <button onClick={increaseAge}>Increase age</button>
      <p>I am {age} years old</p>
      </div>
    </>
  )
}