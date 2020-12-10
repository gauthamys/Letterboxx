const mongoose = require('mongoose');
//Schema and model to define the data structure for movie
const Schema = mongoose.Schema;
const model = mongoose.model;

const MovieSchema = new Schema({
    src:{
        type: String,
        required: true,
        unique:true
    },
    postersrc:{
        type: String,
        required:true,
        unique:true
    },
    name:{
        type: String,
        required: true,
        unique:true
    },
    genre:{
        type: String,
        required: true
    },
    trending:{
        type: Boolean
    },
    director:{
        type: String,
        required: true
    },
    cast:{
        type: Array,
        required: true
    },
    year:{
        type: String,
        required: true
    },
    altText:{
        type: String,
        default: 'could not load'
    },
    unique:{
        type: String,
        required: true,
        unique: true
    }
})

const Movie = model('slide', MovieSchema);

module.exports = Movie;