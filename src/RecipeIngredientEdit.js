import React from "react";

export default function RecipeIngredientEdit(props) {
  const {ingredient} = props
  const { name, amount, measurement } = ingredient;
  return (
    <>
      <input type="text" value={name} className="recipe-edit__input" />
      <input type="text" value={amount} className="recipe-edit__input" />
      <input type="text" value={measurement} className="recipe-edit__input" />
      <button className="btn btn-danger">&times;</button>
    </>
  );
}
