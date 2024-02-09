import { useState } from "react";

import styleMenuListItem from "./style.module.css";

export function MenuListItem({onClick, difficulty, isSelected}) {
  const [isHovered, setIsHovered] = useState(false);
  console.log("***", isHovered);

  function getBackgroundColor() {
    if (isHovered) {
      return "lightblue";
    } else if (isSelected) {
      return "pink";
    } else {
      return "#d9d9d9"
    }
  }

  return (
    <div
    onClick={() => onClick(difficulty)}
    style={{backgroundColor: getBackgroundColor()}}
      className={styleMenuListItem.container}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      Set to: {difficulty}
    </div>
  );
}
