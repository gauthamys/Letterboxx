const express = require('express');

//short for movie-router
const prouter = express.Router();

//Importing the Movie model
const Post = require('../../models/Post');

prouter.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

// GETS all the movies in the database
prouter.get('/', (req,res) => {
    Post.find().sort('-timestamp').then((movies)=>{
        res.json(movies);
    })
})

prouter.get('/movie/:movieId', (req,res) => {
    Post.find({movieId:req.params.movieId}).sort('-timestamp').then((movies)=>{
        res.json(movies);
    })
})

prouter.get('/user/:username', (req,res) => {
    Post.find({username: req.params.username}).then((docs) => {
        res.json(docs);
    })
})

prouter.delete('/tests', (req,res) => {
    Post.deleteMany({title:'test'} || {title:'a'} || {title:'test2'}).then(()=>{
        res.json({msg:"deleted"})
    });
})

//POSTS a new post to the database
prouter.post('/', (req,res) => {
    const newPost = new Post({
        movie: req.body.movie,
        username: req.body.username,
        movieId: req.body.movieId,
        title: req.body.title,
        stars: req.body.stars,
        body: req.body.body,
        timestamp: Date.now(),
        likes: 0,
    });
    
    newPost.save().then(post => res.json(post)).catch((err)=>console.log(err));
})

module.exports = prouter;
