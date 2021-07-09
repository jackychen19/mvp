const express = require('express');
const path = require('path');
const axios = require('axios');
const config = require('./config.js');
const db = require('./database/index.js');

const app = express();
const port = 6969;

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

app.get('/recipes', (req, res) => {
  return db.getMyRecipes()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => console.error(err));
});

app.get('/search', (req, res) => {
  let query = req.query;
  axios({
    url: 'https://api.edamam.com/api/recipes/v2',
    params: {
      type: 'public',
      q: query.recipeQuery,
      // eslint-disable-next-line camelcase
      app_id: config.appID,
      // eslint-disable-next-line camelcase
      app_key: config.appKey
    }
  })
    .then(response => {
      res.status(200).send(response.data.hits);
    })
    .catch(err => {
      console.error(err);
      res.send(400);
    });
});

app.post('/recipes', (req, res) => {
  const recipe = {
    name: req.body.label,
    url: req.body.url,
    image: req.body.image
  };
  db.addRecipe(recipe)
    .then(response => res.status(200))
    .catch(err => console.error(err));
});