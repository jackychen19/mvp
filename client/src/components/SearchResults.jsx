import React, { useState } from 'react';
import axios from 'axios';

import RecipeCard from './RecipeCard.jsx';

const SearchResults = () => {

  return (
    <div className="search-results">
      <div id="search-result-title">Results</div>
      <RecipeCard/>
    </div>
  );

};

export default SearchResults;