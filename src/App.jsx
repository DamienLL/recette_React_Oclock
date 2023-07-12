import "./App.css";

import data from "../data/recipe";

import Header from "./components/header/Header";
import Ingredients from "./components/ingredients/Ingredients";
import Instructions from "./components/instructions/Instructions";

function App() {
  return (
    <>
      <Header
        title={data.title}
        thumbnail={data.thumbnail}
        author={data.author}
        difficulty={data.difficulty}
      />
      <Ingredients ingredientsList={data.ingredients} />
      
      <Instructions instructionsList={data.instructions} /> 
    </>
  );
}

export default App;
