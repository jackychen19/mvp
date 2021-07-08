import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [food, setFood] = useState('');

  const handleSearch = (e) => {
    setFood(e.target.value);
  };

  const handleClick = () => {
    if (food !== '') {
      axios('/recipes', {params: {'food': food}})
        .then(response => console.log(response.data))
        .catch(err => console.error(err));
    }
  };

  return (
    <div className="hero">
      <div id="title">MyRecipePal</div>
      <div className="search">
        <form>
          <input type="text" id="search-bar" onChange={handleSearch} placeholder="Enter recipe here..." required/>
          <button id="search-btn" onClick={handleClick}>Search!</button>
        </form>
      </div>
    </div>
  );
};

export default Search;