import React, { useState, useContext } from 'react';
import axios from 'axios';

import { RecipeContext } from '../App.jsx';
import RecipeCard from './RecipeCard.jsx';

const SearchResults = () => {
  const [toggleResults, setToggleResults] = useState(false);
  const results = useContext(RecipeContext).results;

  return (
    <div className="search-results-container">
      <div id="search-result-title">Results</div>
      <div className="search-results">
        {results.map(result => <RecipeCard recipe={result.recipe}/>)}
      </div>
    </div>
  );

};

export default SearchResults;