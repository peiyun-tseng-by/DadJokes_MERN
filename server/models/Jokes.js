const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Create Schema
const JokeSchema = new Schema({
    joke: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Joke = mongoose.model('joke', JokeSchema);