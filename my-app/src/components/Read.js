// necessary inputs
import React, { useEffect, useState } from "react";
import Movies from "./Movies";
import axios from "axios";
import { useActionData } from "react-router-dom";

// Reusable read component
const Read = () => {

    // constant to store movies as JSON
    const [movies, setMovies] = useState([]); // initialise movies to null array

    // useEffect() method to get movies from API
    /*
    useEffect(
        () => {
            axios.get("https://jsonblob.com/api/jsonblob/1287718524221775872") // gets from given API
            .then((response) => {
                console.log(response.data); // logs api response
                setMovies(response.data.movies) // sets Movies using useState()
            })
            .catch(
                (error) => { // handle errors
                    console.log(error); 
                }
            )
        }, [] // only runs on init
    );
    */

    useEffect(
        () => {
            axios.get("http://localhost:4000/api/movies") // gets from given API
            .then((response) => {
                console.log(response.data); // logs api response
                setMovies(response.data.myMovies) // sets Movies using useState()
            })
            .catch(
                (error) => { // handle errors
                    console.log(error); 
                }
            )
        }, [] // only runs on init
    );
    
    // return message and movie list
    return <div>
            {/* display movies */}
            <h1>Hello from the Read component</h1>
            <Movies myMovies={movies} />
        </div>;
}
  
  export default Read;