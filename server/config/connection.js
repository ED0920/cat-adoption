// Updated to use Heroku DB or local DB if it cannot be found
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/cat-adoption');

module.exports = mongoose.connection;
