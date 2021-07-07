const mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'jacky',
  password: 'password',
  database: 'recipes'
});

connection.connect();