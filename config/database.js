// File : database.js

// Connect to mongoose
const mongoose = require('mongoose');

const dbHost = process.env.DB_HOST || "localhost";
const dbPort = process.env.DB_PORT || "27017";
const dbName = process.env.DB_NAME || "meditationlive";

const db = 'mongodb://' + dbHost +':'+ dbPort  + '/' + dbName;

const options = {
	useNewUrlParser: true, 
	useUnifiedTopology: true
}

const mongo = mongoose.connect(db, options);

mongo.then(() => {
    console.log('Mongo connected');
}, error => {
    console.log(error, 'error');
})
