// Import necessary modules
const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const cors = require('cors'); 
const path = require('path');

// Load environment variables based on NODE_ENV
const environment = process.env.NODE_ENV || 'development';
dotenv.config({ path: `.env.${environment}.local` });

// Then, you can access the database configuration
const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
};

const app = express();
const PORT = process.env.PORT || 5000;
const DATA_DIR = path.join(__dirname, 'uploads');

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS middleware

// MySQL connection pool
const pool = mysql.createPool(dbConfig);

// Endpoint to handle form submission and save data into MySQL database
app.post('/api/submitForm', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const ipAddress = req.ip; // Get the IP address of the client

    // Get a connection from the pool
    const connection = await pool.getConnection();

    // Insert the form data and IP address into the database
    await connection.query('INSERT INTO contact_form (name, email, message, ip_address) VALUES (?, ?, ?, ?)', [name, email, message, ipAddress]);

    // Release the connection
    connection.release();

    // Send success response
    res.status(200).json({ success: true, message: 'Form data saved successfully' });
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
