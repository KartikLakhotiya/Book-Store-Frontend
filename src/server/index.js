const express = require('express');
const app = express();
const port = 4001;
const cors = require('cors');
app.use(cors()); // Add this line before your routes

// Built-in middleware for json body parsing
app.use(express.json());

// Buāilt-in middleware for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// Define a route for POST requests to '/submit-form'
// Import express
app.post('/submit-form', (req, res) => {
  // Access parsed request body
  console.log(req.body)
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;

  // Process the data, then respond
  console.log(`Username: ${firstName}, Password: ${lastName}`);
  res.send(`Username: ${firstName}, Password: ${lastName}`);
});

// Start the server

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
