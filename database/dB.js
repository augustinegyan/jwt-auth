const mongoose = require('mongoose');
require('dotenv').config();

const connectToDb = async () => {
    try {
        await mongoose.connect('mongodb+srv://augustinehappysunshine369:2024@cluster0.0epmy.mongodb.net/', {

        });
        console.log('Connected to Mongo Database');
    } catch (error) {
        console.error('Could not connect to Mongo Database', error);
        process.exit(1);
    }
};

module.exports = connectToDb;