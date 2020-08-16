import React from "react";

export default function Ingredient(props) {
  const { name, amount, measurement } = props;
  return (
    <div className = "ingredient-container">
      <span>{name}</span>
      <span>{amount}</span>
      <span>{measurement}</span>
    </div>
  );
}
