import React from "react";
import Recipe from "./Recipe";

export default function RecipeList({ recipes }) {
  return (
    <div className = "container-recipes">
      <div>
        {recipes.map((recipe) => {
          return <Recipe key={recipe.id} {...recipe} />;
        })}
      </div>
      <button>Add recipe</button>
    </div>
  );
}
