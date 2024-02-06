import { Car } from "./components/Car/Car"
import { Greetings } from "./components/Greetings/Greetings"
import "../src/global.css"

export function App() {

  return (
    <>
      <div>
        <Car />
        <Greetings />
      </div>
    </>
  );
}
