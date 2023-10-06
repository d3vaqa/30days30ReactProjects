import React from 'react';
import RecipeCard from './RecipeCard';

const dummyRecipes = [
  { id: 1, name: 'Pizza', imageURL: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Burger', imageURL: 'https://via.placeholder.com/150' },
  // Add more dummy recipes as needed
];

const HomePage = () => {
  return (
    <div>
      <h2>Featured Recipes</h2>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {dummyRecipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
