import React, { useContext } from "react";
import RecipeIngredientEdit from "./RecipeIngredientEdit";
import { RecipeContext } from "./App";
import uuid from "react-uuid";
export default function RecipeEdit({ recipe }) {
  const { handleRecipeChange, handleRecipeSelect } = useContext(RecipeContext);
  function handleChange(changes) {
    handleRecipeChange(recipe.id, { ...recipe, ...changes });
  }
  function handleRecipeIngredient(id, ingredient) {
    const newIngredients = [...recipe.ingredients];
    const index = newIngredients.findIndex((i) => i.id === id);
    newIngredients[index] = ingredient;
    handleChange({ ingredients: newIngredients });
  }

  function handleIngredientAdd() {
    const newIngredient = {
      id: uuid(),
      name: "",
      amount: 1,
      measurement: "",
    };
    handleChange({
      ingredients: [...recipe.ingredients, newIngredient],
    });
  }
  function handleIngredientDelete(id) {
    handleChange({
      ingredients: recipe.ingredients.filter((i) => i.id !== id),
    });
  }

  return (
    <div className="recipe-edit">
      <div className="recipe-edit__remove-button-container">
        <button
          className="recipe-edit__remove-button"
          onClick={() => handleRecipeSelect(undefined)}
        >
          &times;
        </button>
      </div>
      <div className="recipe-edit__details-grid">
        <label htmlFor="name" className="recipe-edit__label">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={recipe.name}
          onChange={(e) => handleChange({ name: e.target.value })}
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
          onChange={(e) => handleChange({ cookTime: e.target.value })}
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
          onChange={(e) =>
            handleChange({ serving: parseInt(e.target.value) || "" })
          }
          id="name"
          className="recipe-edit__input"
        />
        <label htmlFor="step" className="recipe-edit__label">
          Step
        </label>
        <textarea
          name="step"
          id="step"
        //   value={recipe.steps.map((step) => step)}
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
            <RecipeIngredientEdit
              key={ingredient.id}
              ingredient={ingredient}
              handleRecipeIngredient={handleRecipeIngredient}
              handleIngredientDelete={handleIngredientDelete}
            />
          );
        })}
      </div>
      <div className="recipe-edit__add-ingredient-btn-container">
        <button className="btn btn--primary" onClick={handleIngredientAdd}>
          Add ingredient
        </button>
      </div>
    </div>
  );
}
