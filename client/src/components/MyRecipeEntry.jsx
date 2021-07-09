import React, { useState } from 'react';
import axios from 'axios';

const MyRecipeEntry = ({ name, url }) => {
  const recipeURL = () => {
    window.location = url;
  };

  return (
    <div className="my-recipe">
      <div onClick={recipeURL}>{name}</div>
    </div>
  );
};

export default MyRecipeEntry;