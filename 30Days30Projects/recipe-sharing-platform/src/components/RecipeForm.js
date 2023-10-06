import React, { useState } from 'react';

const RecipeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    ingredients: '',
    steps: '',
    // Add more form fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Submitted Recipe:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Ingredients:
        <input type="text" name="ingredients" value={formData.ingredients} onChange={handleChange} />
      </label>
      <label>
        Steps:
        <textarea name="steps" value={formData.steps} onChange={handleChange}></textarea>
      </label>
      {/* Add more form fields as needed */}
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default RecipeForm;
