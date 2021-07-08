import React, { useState } from 'react';
import axios from 'axios';

import MyRecipeEntry from './MyRecipeEntry.jsx';

const MyRecipes = () => {
  const [results, setResults] = useState('false');

  const toggleResults = () => {
    setResults(true);
  };

  return (
    <div className="my-recipes-container">
      {results &&
      <div id="my-recipe-title">My Recipes</div>
      }
      <div className="search-results">
        <MyRecipeEntry/>
      </div>
    </div>
  );

};

export default MyRecipes;