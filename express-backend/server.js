const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');
const cors = require('cors'); // Import the cors middleware
const fs = require('fs');
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



// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });