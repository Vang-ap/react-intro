import s from "./style.module.css";

export function Greetings(props) {
  console.log("***", props);

  return (
    <>
      <p className={`${s.box} ${s.box2}`}>Welcome</p>
    </>
  );
}


