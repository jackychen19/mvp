import React, { useState } from 'react';
import axios from 'axios';

import MyRecipeEntry from './MyRecipeEntry.jsx';

const MyRecipes = () => {

  return (
    <div className="my-recipes-container">
      <div id="my-recipe-title">My Recipes</div>
      <MyRecipeEntry/>
    </div>
  );

};

export default MyRecipes;