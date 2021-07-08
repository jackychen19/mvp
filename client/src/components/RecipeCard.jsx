import React, { useState } from 'react';
import axios from 'axios';

const sampleImg = 'https://www.spoonforkbacon.com/wp-content/uploads/2021/03/Jajangmyeon-recipe-card-500x500.jpg';

const RecipeCard = () => {

  return (
    <div className="search-results">
      <div className="recipe-card">
        <img src={sampleImg} height="300" width="250"></img>
        <span className="recipe-name">Jajangmyeon</span>
        <span className="cuisine-type">Korean</span>
      </div>
      <div className="recipe-card">
        <img src={sampleImg} height="300" width="250"></img>
        <div className="recipe-name">Jajangmyeon</div>
        <div className="cuisine-type">Korean</div>
      </div>
      <div className="recipe-card">
        <img src={sampleImg} height="300" width="250"></img>
        <div className="recipe-name">Jajangmyeon</div>
        <div className="cuisine-type">Korean</div>
      </div>
      <div className="recipe-card">
        <img src={sampleImg} height="300" width="250"></img>
        <div className="recipe-name">Jajangmyeon</div>
        <div className="cuisine-type">Korean</div>
      </div>
      <div className="recipe-card">
        <img src={sampleImg} height="300" width="250"></img>
        <div className="recipe-name">Jajangmyeon</div>
        <div className="cuisine-type">Korean</div>
      </div>
      <div className="recipe-card">
        <img src={sampleImg} height="300" width="250"></img>
        <div className="recipe-name">Jajangmyeon</div>
        <div className="cuisine-type">Korean</div>
      </div>
    </div>
  );

};

export default RecipeCard;