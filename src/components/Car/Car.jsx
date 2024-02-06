export function Car(props) {
  const onClick = () => {
    props.onCarClick(2);
  }

  return (
    <div>
      <p>Je suis car</p>
      <button onClick={onClick}>Click</button>
    </div>
  );
}
