import { MenuListItem } from "../MenuListItem/MenuListItem";
import { DIFFICULTY_LEVELS } from "./constant";
import styleMenuList from "./style.module.css";

export function MenuList({ difficulty, onItemClick }) {
  return (
    <div className={styleMenuList.container}>
      {DIFFICULTY_LEVELS.map((diff) => {
        return (
          <MenuListItem
            onClick={onItemClick}
            difficulty={diff}
            isSelected={difficulty === diff}
          />
        );
      })}
    </div>
  );
}
