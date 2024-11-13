
/*
    Express.js allows for easy creation of a server that 
    handles routes and uses URL params
*/

/*
    MongoDB --> NoSQL database
    Stores data in documents, KV pairs, graphs
    More scalable and flexible than traditional relational DBs.
    Ideal for handling large volumes of 
    unstructured and semi-structured data.
    Suits applications that have rapidly changing data needs.

    MongoDB is well-suited for modern web apps, especially good
    with apps made with MERN stack (MongoDB, Express, React, Node.js).
    Model is both flexible and powerful, allowing for complex,
    nested data structures and rapid data retrieval.
*/
const mongoose = require('mongoose');
mongoose.connect('my_db_connection_string');

const movieSchema = new mongoose.Schema({
  title: String,
  year: String,
  poster: String
});

const Movie = mongoose.model('Movie', movieSchema);

const express = require('express');
const app = express();

const port = 4000; // port for website

const cors = require('cors');
app.use(cors());

/* 
    cors is a middleware that defines what a ips are allowed to communicate
    with the server. Protects against DOS attacks, etc.
*/
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/*
    In post http requests, the data is returned in the body of the response.
    BodyParser allows for us to parse the returned data easily,
    in json in this case
*/
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/*
    The bodyParser allows for access to the body of a post.
    This is necessary because unlike the get method, data
    is returned in the body, and not the URL.
*/
//const bodyParser = require('body-parser');

const path = require('path');
const { stringify } = require('querystring');

//app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

// return status code 500 if there is an error in gets / posts
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});


// return movies as JSON
app.get("/api/movies", (req, res) => {
    // app returns back JSON on movies
    const movies = [
        {
          "Title": "Avengers: Infinity War (server)",
          "Year": "2018",
          "imdbID": "tt4154756",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
          "Title": "Captain America: Civil War (server)",
          "Year": "2016",
          "imdbID": "tt3498820",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        },
        {
          "Title": "World War Z (server)",
          "Year": "2013",
          "imdbID": "tt0816711",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
        }
      ];

      // post response to client about added movie
      app.post('/api/movies', async (req, res)=>{

        const { title, year, poster } = req.body;
       
        const newMovie = new Movie({ title, year, poster });
        await newMovie.save();
       
        res.status(201).json({ message: 'Movie created successfully', movie: newMovie });
        })

    // status ok
    res.status(200).json({ myMovies: movies });

});

// log port to console
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

