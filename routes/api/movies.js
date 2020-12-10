const { SHA256 } = require('crypto-js');
const express = require('express');

//short for movie-router
const mrouter = express.Router();

//Importing the Movie model
const Movie = require('../../models/Movie');

mrouter.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

// GETS all the movies in the database
mrouter.get('/', (req,res) => {
    Movie.find().then((movies)=>{
        res.json(movies);
    })
})

// GETS movies where {trending: true}
mrouter.get('/trending', (req,res) => {
    Movie.find({trending:true}).then((movies)=>{
        res.json(movies);
    })
})

//GETS movies whose genre matches ":genre"
mrouter.get('/genre/:genre',(req,res) => {
    Movie.find({genre:req.params.genre, trending:false || null}).then((movies)=>{
        res.json(movies);
    })
})

//GET movie by ID
mrouter.get('/movie/:id', (req,res) => {
    Movie.findById(req.params.id).then( movies => {
        res.json(movies);
    })
})

//POSTS a new movie item to the database
mrouter.post('/', (req,res) => {
    const newMovie = new Movie(
        {src: req.body.src,
        year: req.body.year,
        cast: req.body.cast,
        name:req.body.name,
        genre:req.body.genre,
        director: req.body.director,
        altText: req.body.altText,
        unique: SHA256(req.body.name)}
    );
    
    newMovie.save().then(movie => res.json(movie)).catch((err)=>console.log(err));
})

/*srouter.delete('/:id', (req,res) => {
    Movie.findById(req.params.id).then(movie => {
        movie.remove().then(() => res.json({msg: `${req.params.id} deleted`}))
    }).catch((err)=>{
        res.status(404).json({ msg:`could not find ${req.params.id}` });
    })
})*/

module.exports = mrouter;
