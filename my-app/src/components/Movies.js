// necessary inputs
import MovieItem from "./MovieItem";

// Movies holds list of Movie objects
const Movies = (props) => {
    // build list of MovieItems for displaying as html code
    return props.myMovies.map(
        (movie) => {
            // give key to identify individual MovieItem 
            return <MovieItem myMovie={movie} key={movie.imdbID}/>
        }
    );
}

export default Movies;