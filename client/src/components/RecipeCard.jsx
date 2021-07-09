import React, { useState, useContext } from 'react';
import axios from 'axios';
import { RecipeContext } from '../App.jsx';

const RecipeCard = ({ recipe }) => {
  const updateMyRecipes = useContext(RecipeContext).setRecipes;

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
    axios.post('/recipes', recipe)
      .then(axios('/recipes')
        .then(myRecipes => updateMyRecipes(myRecipes.data)))
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
