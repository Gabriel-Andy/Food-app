import React from "react";

export default function RecipeIngredientEdit(props) {
  const { ingredient, handleRecipeIngredient, handleIngredientDelete } = props;
  const { name, amount, measurement, id } = ingredient;
  function handleChange(changes) {
    handleRecipeIngredient(ingredient.id, { ...ingredient, ...changes });
  }

  return (
    <>
      <input
        type="text"
        value={name}
        className="recipe-edit__input"
        onChange={(e) => handleChange({ name: e.target.value })}
      />
      <input
        type="text"
        value={amount}
        className="recipe-edit__input"
        onChange={(e) => handleChange({ amount: e.target.value })}
      />
      <input
        type="text"
        value={measurement}
        onChange={(e) => handleChange({ measurement: e.target.value })}
        className="recipe-edit__input"
      />
      <button
        className="btn btn-danger"
        onClick={() => handleIngredientDelete(id)}
      >
        &times;
      </button>
    </>
  );
}
