const mongoose = require('mongoose');

//Schema and model to define a data structure for a user
const Schema = mongoose.Schema;
const model = mongoose.model;

const avatars = ['https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/batman-icon.png',
                 'https://cdn4.iconfinder.com/data/icons/diversity-v2-0-volume-03/64/superhero-batgirl-superhero-asian-redhead-512.png',
                 'https://i.pinimg.com/originals/0d/2c/e7/0d2ce7de833e651e0bf4191c16e2d693.png']

const UserSchema = new Schema({
    username:{
        type: String,
        required:true,
        unique:true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    reviews:{
        type: Array,
    },
    avatar:{
        type: String,
        default: avatars[Math.floor(Math.random() * avatars.length)]
    }
});

const User = model('User',UserSchema);

module.exports = User;