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

        {/* Rendering conditionnel --- The ternary boolean (XX ? AA : BB) ---> If the value is true the OtherVegetablesAvailable component is displayed,
        if the value is false, null or undefined, the OtherVegetablesNotAvailable component is displayed. */}
        <li>
          d'autres légumes sont-ils disponibles: {props.isOtherVegetablesAvailable ? <OtherVegetablesAvailable /> : <OtherVegetablesNotAvailable />}
        </li>
      </ul>
    </>
  );
}

function OtherVegetablesAvailable() {
 return <span>Oui</span>; 
}

function OtherVegetablesNotAvailable() {
 return <span>Non</span>; 
}
