import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Search from './components/Search.jsx';
import MyRecipes from './components/MyRecipes.jsx';
import SearchResults from './components/SearchResults.jsx';

export const SearchResultContext = React.createContext([]);

const App = () => {
  const [results, setResults] = useState([]);

  const searchVal = {
    results,
    setResults
  };

  return (
    <div>
      <SearchResultContext.Provider value={searchVal}>
        <Search/>
        <div className="container">
          <MyRecipes/>
          <SearchResults/>
        </div>
      </SearchResultContext.Provider>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));