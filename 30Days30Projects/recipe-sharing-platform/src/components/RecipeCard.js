import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={recipe.imageURL} />
      <Card.Body>
        <Card.Title>
          <Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default RecipeCard;
