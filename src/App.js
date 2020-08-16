import React from "react";
import "./App.css";
import RecipeList from "./RecipeList";
import uuid from "react-uuid";
export default function App() {
  return (
    <>
      <RecipeList recipes={data} />
    </>
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
      { name: "WhiteFish", amount: 1, measurement: "l lb" },
      { name: "Cheese", amount: 1, measurement: "cup" },
      { name: "iceberg lettuce", amount: 2, measurement: "cups" },
      { name: "Tomatoes", amount: 1, measurement: "med" },
      { name: "Tortilla", amount: 0.5, measurement: "cup" },
      { name: "Garlic", amount: 3, measurement: "cloves" },
    ],
    steps: [
      "Cook the fish on the grill until hot.",
      "place the fish on the 3 tortillas.",
      "Top them with lettuce, tomatoes, and cheese",
    ],
  },
];
