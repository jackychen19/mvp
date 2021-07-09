import React, { useState, useContext } from 'react';
import axios from 'axios';

import { RecipeContext } from '../App.jsx';

const Search = () => {
  const [recipeQuery, setRecipeQuery] = useState('');
  const setResults = useContext(RecipeContext).setResults;

  const handleSearch = (e) => {
    setRecipeQuery(e.target.value);
  };

  const handleClick = (e) => {
    if (recipeQuery !== '') {
      e.preventDefault();
      axios('/search', {params: {'recipeQuery': recipeQuery}})
        .then(searchResults => {
          setResults(searchResults.data);
        })
        .catch(err => console.error(err));
    }
  };

  return (
    <div className="hero">
      <div id="title">MyRecipePal</div>
      <div className="search">
        <form>
          <input type="text" id="search-bar" onChange={handleSearch} placeholder="Enter recipe here..." required/>
          <button className="btn" onClick={handleClick}>Search!</button>
        </form>
      </div>
    </div>
  );
};

export default Search;