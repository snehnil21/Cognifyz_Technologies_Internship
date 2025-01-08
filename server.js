const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Set up the view engine (EJS)
app.set('view engine', 'ejs');

// Serve static files (like CSS)
app.use(express.static('public'));

// Body parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Route to display the form
app.get('/', (req, res) => {
    res.render('index');
});

// Route to handle form submission
app.post('/submit', (req, res) => {
    const { name, email } = req.body; // Access form data
    res.render('result', { name, email }); // Send data to result.ejs
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
