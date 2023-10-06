import React from 'react';

const RecipeDetail = ({ recipe }) => {
  return (
    <div>
      <h2>{recipe.name}</h2>
      <img src={recipe.imageURL} alt={recipe.name} width="300" />
      <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
      <p><strong>Steps:</strong> {recipe.steps}</p>
      {/* Add more recipe details as needed */}
    </div>
  );
};

export default RecipeDetail;
