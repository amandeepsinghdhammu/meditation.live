/* 
 * File: app.js
 * Description : Root File
 */
 
// Import Express
const express = require('express')
// Import body parser
const bodyParser = require('body-parser');
// Import mongoose
const database = require('./config/database');

// Start App
const app = express();
const port = process.env.PORT || 8080;

// Welcome message
app.get('/', (req, res) => res.send('Welcome here to review the task'));

// Launch app to the specified port
app.listen(port, function() {
    console.log("Running app on Port "+ port);
})

// Configure bodyparser to hande the post requests
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());


// Import routes
const apiRoutes = require("./routes")

// Use API routes in the App
app.use('/api', apiRoutes)
