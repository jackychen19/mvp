import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import MyRecipeEntry from './MyRecipeEntry.jsx';
import { RecipeContext } from '../App.jsx';

const MyRecipes = () => {
  const [loading, setLoading] = useState(false);
  const myRecipes = useContext(RecipeContext).recipes;
  const setMyRecipes = useContext(RecipeContext).setRecipes;

  useEffect(() => {
    if (!loading) {
      setLoading(true);
      axios.get('/recipes')
        .then(response => {
          setMyRecipes(response.data);
        })
        .catch(err => console.error(err));
    }
  });

  return (
    <div className="my-recipes-container">
      <div id="my-recipe-title">My Recipes</div>
      <div className="search-results">
        {
          myRecipes.map(recipe => <MyRecipeEntry name={recipe.recipe_name} url={recipe.recipe_url}/>)

        }
      </div>
    </div>
  );

};

export default MyRecipes;