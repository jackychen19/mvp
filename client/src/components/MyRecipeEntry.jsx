import React, { useState } from 'react';
import axios from 'axios';

const MyRecipeEntry = ({ name, url }) => {
  const recipeURL = () => {
    window.location = url;
  };

  return (
    <div className="my-recipe" onClick={recipeURL}>{name}</div>
  );
};

export default MyRecipeEntry;