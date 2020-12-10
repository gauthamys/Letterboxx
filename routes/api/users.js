const express = require('express');

//Modules for encrypting passwords
const AES = require('crypto-js/aes');
const SHA256 = require('crypto-js/sha256');
const bodyParser = require('body-parser');


//short for user-router
const urouter = express.Router();

urouter.use(bodyParser.urlencoded({extended: true}));

// Import the User model
const User = require('../../models/User');

//GETS all the users from the database
urouter.get('/',(req,res)=>{
    User.find().then((users)=>{
        res.json(users);
    })
})

//GETS a single user from the database by email
urouter.get('/:email',(req,res)=>{
    User.find({email:req.params.email}).then((users)=>{
        res.json(users);
    })
})

//GETS a single user from the database by email
urouter.get('/:username',(req,res)=>{
    User.find({username:req.params.username}).then((users)=>{
        res.json(users);
    })
})

urouter.put('/review/:userId/:mvId', (req,res) => {
    User.findById(req.params.userId).then(user => {
        let reviews = user.reviews;
        for(var i=0; i<reviews.length; i++){
            if(reviews[i].movieId == req.params.mvId){
                res.json({msg:'review exists'})
            }
            else{
                User.findByIdAndUpdate(req.params.userId, {$push :{reviews: req.body}}).then(()=>{
                    User.findById(req.params.userId).then((user) => {
                        res.json(user);
                    })
                })
            }
        }
    })
})

//POSTS a new user to the database
urouter.post('/',(req,res)=>{
    const newUser = new User({
        username: '@'+req.body.username,
        email: req.body.email,
        password: req.body.password,
    })

    newUser.save('users').then(user => res.json(user)).catch(err => console.log(err));
})

/*urouter.put('/user/:id',(req,res)=>{
    User.findById(req.params.id).then((user)=>{
        user.username='haha';
        res.send(user);
    });
}) */

module.exports = urouter;