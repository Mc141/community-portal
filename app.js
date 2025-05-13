const express = require('express');
const path = require('path');
const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts');
const pageRoutes = require('./routes/pageRoutes');
require('dotenv').config();

const app = express();

// Configuration
const PORT = process.env.PORT || 3100;
const HOST = process.env.HOST || 'localhost';

// View Engine Setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layout'); // layout.ejs as default

// Middleware
app.use(express.urlencoded({ extended: true })); // parse form data
app.use(express.static(path.join(__dirname, 'public'))); // serve static files

// Routes
app.use('/', pageRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});
