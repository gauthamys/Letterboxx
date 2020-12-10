//SERVER FOR API
//RETRIEVES AND UPLOADS MOVIES AND OTHER INFO TO OUR MONGO DB

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('./middleware/logger');
const mrouter = require('./routes/api/movies');
const urouter = require('./routes/api/users');
const prouter = require('./routes/api/posts');

const app = express();

app.use(cors());

//Ignore
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

//Body Parser
// To read body of requests
app.use(bodyParser.json());

//logger function imported from middleware
app.use(logger);

//Using a separate router for api/movies imported from routes/api/movies
app.use('/api/movies',mrouter);

//Using a separate router for api/users imported from routes/api/users
app.use('/api/users',urouter);
app.use('/api/posts',prouter);

//Getting the database URI to conncet to (imported from config/keys)
const client = require('./config/keys').mongoURI;

//Connect to Mongo
mongoose.connect(client, { useNewUrlParser: true, useUnifiedTopology: true }).then( () => {
    console.log('connected to MongoDB');
}).catch(err => console.log(err));

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));