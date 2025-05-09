const express = require('express');
const ejs = require('ejs');
const path = require('path');


// Import routes defined in pageRoutes module
const pageRoutes = require('./routes/pageRoutes');

app = express();
port = 5000;

// Enables the use of static files (css, js, etc.)
app.use(express.static(path.join(__dirname, "public")));

// Sets render engine to ejs
app.set('view engine', 'ejs');
// Sets express to look for ejs templates in /views/pages, instead of /views
app.set('views', path.join(__dirname, '/views/pages'));


// Use the router defined in the pageRoutes module
app.use('/', pageRoutes);


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
  })