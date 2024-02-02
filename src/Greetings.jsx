export function Greetings(props) {
  console.log("***", props);

  return (
    <>
      <p>Le nombres à acheter n'est pas limiter</p>
      <ul>
        <li>{props.nameVegetable}</li>
        <li>Le nombres de carotte en stock: {props.quantity}</li>

        {/* Second way to do it */}
        <li>{props.children}</li>

        {/* Shortcut boolean --> The "&&" allows you to check that there is indeed a value (true, number, string...),
        if the value is false, zero or undefined there is nothing to display. */}
        <li>
          d'autres légumes sont-ils disponibles:{" "}
          {props.isOtherVegetablesAvailable && "OUI"}
        </li>
      </ul>
    </>
  );
}
