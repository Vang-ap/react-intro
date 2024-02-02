import { Greetings } from "./Greetings";

export function App() {
  return (
    <>
      <h1>Hello to the React world</h1>

      {/* Second way to do it */}
      <Greetings
        nameVegetable={"carotte"}
        quantity={20}
        description={{ color: "orange", growth: 3 }}
        doSomething={() => {
          console.log("do something");
        }}
      >
        <img src="https://www.projet-voltaire.fr/pv-wp/wp-content/uploads/2012/07/Carottes.png"></img>
      </Greetings>
    </>
  );
}

