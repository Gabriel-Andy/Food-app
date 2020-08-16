import React from "react";
import IngredientList from "./IngredientList";
import Steps from "./Steps";

export default function Recipe(props) {
  const {
    id,
    name,
    cookTime,
    serving,
    steps,
    ingredients,
    handleRecipeDelete,
  } = props;
  return (
    <div className="container-recipe">
      <div className="container-title">
        <h3>{name}</h3>
        <div className="button">
          <button>Edit</button>
          <button onClick={() => handleRecipeDelete(id)}>Delete</button>
        </div>
      </div>
      <div>
        <span>CookTime:</span>
        <span>{cookTime}</span>
      </div>
      <div>
        <span>Serving:</span>
        <span>{serving}</span>
      </div>
      <div>
        <span>Ingredients:</span>
        <div>
          <IngredientList ingredients={ingredients} />
        </div>
        <div>
          <span>steps:</span>
          <Steps steps={steps} />
        </div>
      </div>
    </div>
  );
}
