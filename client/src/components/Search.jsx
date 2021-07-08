import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [food, setFood] = useState('');

  const handleSearch = (e) => {
    setFood(e.target.value);
  };

  const handleClick = () => {
    console.log('food:', food);
    axios('/recipes', {params: {'food': food}})
      .then(response => console.log(response.data))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <input type="text" onChange={handleSearch} placeholder="Search for recipes here!"></input>
      <button onClick={handleClick}>Search!</button>
    </div>
  );
};

export default Search;