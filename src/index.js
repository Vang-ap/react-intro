// Importer les outils React
import ReactDOM from "react-dom";

// Importer le 1er composant: App
import { App } from "./App";

// Cibler la div dont l'id est root
const divRoot = document.getElementById("root");

// Créer un noeud racine react à partir de la div root
const reactRoot = ReactDOM.createRoot(divRoot);

// Injecter le 1er composant le noeud racine
reactRoot.render(<App></App>);
// ou reactRoot.render(<App />);
