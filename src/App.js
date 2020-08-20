import React, { useState, useEffect } from "react";
import "./App.css";
import RecipeList from "./RecipeList";
import uuid from "react-uuid";

export const RecipeContext = React.createContext();
const LOCAl_STORAGE_KEY = "cookingWithReact.recipes";

export default function App() {
  const [recipes, setRecipes] = useState(data);
  useEffect(() => {
    const getRecipes = localStorage.getItem(LOCAl_STORAGE_KEY);
    if (getRecipes != null) {
      console.log(" I am not inside the local storage");
      setRecipes(JSON.parse(getRecipes));
    }
  }, []);
  useEffect(() => {
    console.log("I am a developer");
    localStorage.setItem(LOCAl_STORAGE_KEY, JSON.stringify(recipes));
  }, [recipes]);
  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
  };

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuid(),
      cookTime: 3,
      serving: 5,
      name: "baked cake",
      ingredients: [
        { id: uuid(), name: "Bread", amount: 1, measurement: "l lb" },
        { id: uuid(), name: "Coca cola", amount: 1, measurement: "cup" },
      ],
      steps: [
        "eat every single morning before going at work",
        "be able to wake up at 5:30 in the morning",
      ],
    };
    setRecipes([...recipes, newRecipe]);
  }
  function handleRecipeDelete(id) {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  }
  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList recipes={recipes} />
    </RecipeContext.Provider>
  );
}

let data = [
  {
    id: uuid(),
    cookTime: 20,
    serving: 4,
    name: "Baked Salmon",
    ingredients: [
      { id: uuid(), name: "Salmon", amount: 1, measurement: "l lb" },
      { id: uuid(), name: "Pine Nuts", amount: 1, measurement: "cup" },
      { id: uuid(), name: "Butter lettuce", amount: 2, measurement: "cups" },
      { id: uuid(), name: "Yellow Squash", amount: 1, measurement: "med" },
      { id: uuid(), name: "Olive Oil", amount: 0.5, measurement: "cup" },
      { id: uuid(), name: "Garlic", amount: 3, measurement: "cloves" },
    ],
    steps: [
      "Preheat the oven to 350 degrees.\n",
      "Spread the olive oil around a glass baking dish\n",
      "Add the samon, garlic, and pine nuts to the dish.\n",
      "Bake for 15minutes.",
      "Add the yellow squash and put back in the oven for 20 mins.",
      "Remove from oven and let cool for 15 minutes. Add the lettuce and serve",
    ],
  },
  {
    id: uuid(),
    cookTime: 15,
    serving: 5,
    name: "Fish Tacos",
    ingredients: [
      { id: uuid(), name: "WhiteFish", amount: 1, measurement: "l lb" },
      { id: uuid(), name: "Cheese", amount: 1, measurement: "cup" },
      { id: uuid(), name: "iceberg lettuce", amount: 2, measurement: "cups" },
      { id: uuid(), name: "Tomatoes", amount: 1, measurement: "med" },
      { id: uuid(), name: "Tortilla", amount: 0.5, measurement: "cup" },
      { id: uuid(), name: "Garlic", amount: 3, measurement: "cloves" },
    ],
    steps: [
      "Cook the fish on the grill until hot.",
      "place the fish on the 3 tortillas.",
      "Top them with lettuce, tomatoes, and cheese",
    ],
  },
];
