import { Car } from "./components/Car/Car";

import "../src/global.css";

export function App() {
  function hello(number) {
    alert("Hello de <App />");
  }
  return (
    <>
      <div>
        Je suis {"<App />"}
        <Car onCarClick={hello} />
      </div>
    </>
  );
}
