import { MenuListItem } from "../MenuListItem/MenuListItem";
import styleMenuList from "./style.module.css";

export function MenuList({ difficulty, onItemClick }) {
  return (
    <div className={styleMenuList.container}>
      <MenuListItem
        onClick={onItemClick}
        difficulty="Low"
        isSelected={difficulty === "Low"}
      />
      <MenuListItem
        onClick={onItemClick}
        difficulty="Medium"
        isSelected={difficulty === "Medium"}
      />
      <MenuListItem
        onClick={onItemClick}
        difficulty="Hight"
        isSelected={difficulty === "Hight"}
      />
      <MenuListItem
        onClick={onItemClick}
        difficulty="Insane"
        isSelected={difficulty === "Insane"}
      />
    </div>
  );
}
