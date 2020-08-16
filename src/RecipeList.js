import React from "react";
import Recipe from "./Recipe";

export default function RecipeList({
                 recipes,
                 handleRecipeAdd,
                 handleRecipeDelete,
               }) {
                 return (
                   <div className="container-recipes">
                     <div>
                       {recipes.map((recipe) => {
                         return (
                           <Recipe
                             key={recipe.id}
                             {...recipe}
                             handleRecipeDelete={handleRecipeDelete}
                           />
                         );
                       })}
                     </div>
                     <button onClick={handleRecipeAdd}>Add recipe</button>
                   </div>
                 );
               }
