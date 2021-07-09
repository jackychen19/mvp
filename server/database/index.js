const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'recipes'
});

db.connect();

const getMyRecipes = () => {
  const query = 'SELECT recipe_name, recipe_url, image_url FROM my_recipes';
  return new Promise((resolve, reject) => {
    db.query(query, (err, result) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

const addRecipe = (recipe) => {
  const query = `INSERT INTO my_recipes(recipe_name, recipe_url, image_url) VALUES ('${recipe.name}', '${recipe.url}', '${recipe.image}')`;
  return new Promise((resolve, reject) => {
    db.query(query, (err, result) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log('result:', result);
        resolve(result);
      }
    });
  });
};

module.exports = {
  addRecipe,
  getMyRecipes
};