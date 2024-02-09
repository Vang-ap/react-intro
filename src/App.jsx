import { useState } from 'react';

import styleApp from "./style.module.css";
import { DisplayDifficulty } from "./components/DisplayDifficulty/DisplayDifficulty";
import { MenuList } from './components/MenuList/MenuList';

export function App() {
  const [currentDifficulty, setCurrentDifficulty] = useState("");

  function updatDifficulty(difficulty) {
    setCurrentDifficulty(difficulty);
  }

  return (
    <div className={styleApp.container}>
      <h1 className={styleApp.title}>Difficulty selector</h1>
      
      <div className={styleApp.containerDisplay}>
      <MenuList onItemClick={updatDifficulty} difficulty={currentDifficulty} />
      <DisplayDifficulty difficulty={currentDifficulty} />
    </div>
    </div>
  );
}
