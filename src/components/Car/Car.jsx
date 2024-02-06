export function Car(props) {
  return (
    <div>
      <p>Je suis car</p>
      {/* less effective method */}
      <button onClick={() => {
        props.onCarClick(2);
      }}>Click</button>
    </div>
  );
}
