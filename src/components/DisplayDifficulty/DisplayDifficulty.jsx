import styleDisplayDifficulty from "./style.module.css";

export function DisplayDifficulty(props) {
  return (
    <div className={styleDisplayDifficulty.container}>
    {props.difficulty ? `Difficulty set to: ${props.difficulty}` : "No difficulty set"}
    </div>
  );
}
