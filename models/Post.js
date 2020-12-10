const mongoose = require('mongoose');
//Schema and model to define the data structure for movie
const Schema = mongoose.Schema;
const model = mongoose.model;
const names = ['anonymouse','VainGloriousEmu','Bryan Gosling','Jurj Clooners','Achew Perry','Halle BlueBerry']

const PostSchema = new Schema({
    username:{
        type: String,
        default: 'anonymous',
    },
    date:{
        type: String,
        default: Date().toString().slice(0,21)
    },
    movie:{
        type: String,
    },
    title:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    },
    stars:{
        type: Number,
        min: 0,
        max: 5,
        required: true
    },
    likes:{
        type: Number,
        default: 0
    },
    timestamp:{
        type: Number,
        default: 0
    },
    movieId:{
        type: String,
    }
})

const Post = model('posts', PostSchema);

module.exports = Post;