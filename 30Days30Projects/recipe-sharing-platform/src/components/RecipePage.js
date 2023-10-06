import React from 'react';
import RecipeDetail from './RecipeDetail';

const dummyRecipe = {
  id: 1,
  name: 'Pizza',
  imageURL: 'https://via.placeholder.com/150',
  ingredients: 'Flour, Water, Cheese, Tomato Sauce',
  steps: 'Mix, Bake, Eat',
  // Add more dummy recipe details as needed
};

const RecipePage = () => {
  return (
    <div>
      <h2>Recipe Detail</h2>
      <RecipeDetail recipe={dummyRecipe} />
    </div>
  );
};

export default RecipePage;
