import React from "react";
import RecipeIngredientEdit from "./RecipeIngredientEdit";

export default function RecipeEdit({ recipe }) {
  return (
    <div className="recipe-edit">
      <div className="recipe-edit__remove-button-container">
        <button className="recipe-edit__remove-button">&times;</button>
      </div>
      <div className="recipe-edit__details-grid">
        <label htmlFor="name" className="recipe-edit__label">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={recipe.name}
          id="name"
          className="recipe-edit__input"
        />
        <label htmlFor="cookTime" className="recipe-edit__label">
          CookTime
        </label>
        <input
          type="text"
          name="cooktime"
          value={recipe.cookTime}
          id="cooktime"
          className="recipe-edit__input"
        />
        <label htmlFor="servings" className="recipe-edit__label">
          Servings
        </label>
        <input
          type="number"
          min="1"
          name="servings"
          value={recipe.serving}
          id="name"
          className="recipe-edit__input"
        />
        <label htmlFor="step" className="recipe-edit__label">
          Step
        </label>
        <textarea
          name="step"
          id="step"
          value={recipe.steps.map(step => step)}
          className="recipe-edit__input"
        ></textarea>
      </div>
      <br />
      <label className="recipe-edit__label">Ingredients</label>
      <div className="recipe-edit__ingredient-grid">
        <div>Name</div>
        <div>Amount</div>
        <div>measurement</div>
        <div></div>
        {recipe.ingredients.map((ingredient) => {
          return (
            <RecipeIngredientEdit key={ingredient.id} ingredient={ingredient} />
          );
        })}
      </div>
      <div className="recipe-edit__add-ingredient-btn-container">
        <button className="btn btn--primary">Add ingredient</button>
      </div>
    </div>
  );
}
