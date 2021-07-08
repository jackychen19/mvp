import React, { useState } from 'react';
import axios from 'axios';

const RecipeCard = ({ recipe }) => {
  console.log('recipe:', recipe);

  const capitalizeFirstLetter = (string) => {
    string = string.toLowerCase();
    const words = string.split(' ');
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(' ');
  };

  recipe.label = capitalizeFirstLetter(recipe.label);
  let cuisineType = [];
  if (recipe.cuisineType) {
    recipe.cuisineType.forEach(cuisine => cuisineType.push(capitalizeFirstLetter(cuisine)));
  }

  const recipeURL = () => {
    window.location = recipe.url;
  };

  const addRecipe = () => {
    console.log('Clicked!');
    axios.post('/recipes', recipe)
      .then(response => console.log('POST request sent...'))
      .catch(err => console.error(err));
  };

  return (
    <div className="recipe-card">
      <img src={recipe.image} height="300" width="250"></img>
      <span className="recipe-name" onClick={recipeURL}>{recipe.label}</span>
      <div className="cuisine-type">{cuisineType.map(cuisine => cuisine + ' ')}</div>
      <button className="btn" onClick={addRecipe}>Add Recipe!</button>

    </div>
  );

};

export default RecipeCard;
