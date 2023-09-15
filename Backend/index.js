const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000; // Choose a port number

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost', // Change to your MySQL host
    user: 'root',      // Change to your MySQL user
    password: '',      // Change to your MySQL password
    database: 'UserDatabase' // Change to your database name
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database');
});

// Register a new user
app.post('/register', (req, res) => {
    const { username, email, password } = req.body;

    // You should hash and salt the password before saving it to the database for security.
    // Here, we're assuming a plain text password for simplicity (not recommended in production).

    const sql = 'INSERT INTO Users (Username, Email, Password) VALUES (?, ?, ?)';
    db.query(sql, [username, email, password], (err, result) => {
        if (err) {
            console.error('Error registering user:', err);
            res.status(500).json({ error: 'Error registering user' });
            return;
        }
        console.log('User registered successfully');
        res.json({ message: 'User registered successfully' });
    });
});


app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Perform authentication logic here
    // For simplicity, we're comparing plain text passwords (not recommended in production)

    const sql = 'SELECT * FROM Users WHERE Username = ? AND Password = ?';
    db.query(sql, [username, password], (err, result) => {
        if (err) {
            console.error('Error during login:', err);
            res.status(500).json({ error: 'Error during login' });
            return;
        }

        if (result.length === 0) {
            // No user found with the provided credentials
            res.status(401).json({ error: 'Invalid credentials' });
        } else {
            // User successfully authenticated
            res.status(200).json({ message: 'Login successful' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
