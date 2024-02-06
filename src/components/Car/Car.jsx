export function Car(props) {
  
  return (
    <div>
      <p>Je suis car</p>
      <button onClick={props.onCarClick}>Click</button>
    </div>
  )
}