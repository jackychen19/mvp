import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Search from './components/Search.jsx';
import MyRecipes from './components/MyRecipes.jsx';
import SearchResults from './components/SearchResults.jsx';

const App = () => {
  const [name, setName] = useState('Jacky');

  return (
    <div>
      <Search/>
      <div className="container">
        <MyRecipes/>
        <SearchResults/>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));