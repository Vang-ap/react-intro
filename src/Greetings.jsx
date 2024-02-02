export function Greetings(props) {
  console.log('***', props);

  // conditional rendering --> We can condition the display
  if (props.quantity < 100) {
    return (
      <p>Plus de stock</p>
    );
  } else {
    return (
      <><p>Le nombres à acheter n'est pas limiter</p><ul>
        <li>{props.nameVegetable}</li>
        <li>Le nombres de carotte en stock: {props.quantity}</li>

        {/* Second way to do it */}
        <li>{props.children}</li>
      </ul></>
    );
  }
}
