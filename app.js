const express = require('express');
const { sequelize, umzug,  testConnection } = require('./config/config'); // Import 

const app = express();
const port = 4600;

// Testing the database connection
testConnection(); 


umzug.up()
  .then((migrations) => {
    console.log('Migrations applied:', migrations);
  })
  .catch((error) => {
    console.error('Error applying migrations:', error);
  });
  

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});