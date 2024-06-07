const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/signup', (req, res) => {
  const { email, fullName, username, password } = req.body;

  // Validate the request body
  if (!email || !fullName || !username || !password) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const sql = "INSERT INTO mybgs (`email`, `name`, `username`, `password`) VALUES (?, ?, ?, ?)";
  const values = [email, fullName, username, password];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting user data:', err.message, 'Details:', err);
      return res.status(500).json({ error: 'Error signing up. Please try again later.' });
    }
    res.status(200).json({ message: 'Signup successful', result: result });
  });
});



// Create a MySQL connection
const connection = mysql.createConnection({
  host: '127.0.0.1',
  port: '3307',
  user: 'root',
  password: '',
  database: 'signup'
});

// Connect to the MySQL database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err.message);
    return;
  }
  console.log('Connected to MySQL database!');
});

// Define a route to handle the signup process
app.post('/signup', (req, res) => {
  const { email, fullName, username, password } = req.body;

  // Validate the request body
  if (!email || !fullName || !username || !password) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const sql = "INSERT INTO mybgs (`email`, `name`, `username`, `password`) VALUES (?, ?, ?, ?)";
  const values = [email, fullName, username, password];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting user data:', err.message, 'Details:', err);
      return res.status(500).json({ error: 'Error signing up. Please try again later.' });
    }
    res.status(200).json({ message: 'Signup successful', result: result });
  });
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
