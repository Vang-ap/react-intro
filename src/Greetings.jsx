export function Greetings(props) {
  console.log('***', props);
  return (
    <ul>
      <li>{props.nameVegetable}</li>
      <li>Le nombres de carotte en stock: {props.quantity}</li>
      <li>{props.image}</li>
    </ul>
  );
}
