// Handle form submission , logging form data to console when the user submits the form


console.log("Hello")

const express = require('express');
const app = express();
const port = 4001;
const cors = require('cors');
app.use(cors()); 

app.use(express.json());


app.use(express.urlencoded({ extended: true }));

app.post('/submit-form', (req, res) => {

  console.log(req.body)
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;

  console.log(`Firstname : ${firstName}, Lastname:${lastName}, Email : ${email},  Password: ${lastName}`);
  res.send(`Username: ${firstName}, Password: ${lastName}`);
});

// Start the server

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
