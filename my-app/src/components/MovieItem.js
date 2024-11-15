// necessary inputs
import { useEffect } from "react";
import Card from "react-bootstrap/Card";

const MovieItem = (props) => {

    // useEffect() functions handle side effects caused by anything
    // that may be outside of scope of the function such as
    // fetching data, subscriptions etc.

    // useEffect() runs after the renderer by default.
    // If no dependency is provided, it will execute after
    // every render cycle.

    // If you provide a dependency array as the second argument,
    // useEffect() will only run when the given argument's
    // values update.

    // useEffect() can also return a cleanup function, such as:

    /*
        useEffect(() => {
        const subscription = someAPICall();
  
        return () => {
            subscription.unsubscribe(); // Cleanup when component unmounts
        };
        }, []);
    */

    // This is useful for resetting state and cleaning up subscription calls.

    
    useEffect(() => {
        // debug - log movies to console whenever props mount
        // or update
        console.log("Movies:", props.myMovies);
      }, [props.myMovies]);
    
    // return movie information for MovieItem
    return(
        <div>   
            {/*card for stylized list*/}
            <Card>
                <Card.Header>
                    {props.myMovie.Title}
                </Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={props.myMovie.Poster} alt={props.myMovie.Year}/>
                        <footer>{props.myMovie.Year}</footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </div>
    );
}

export default MovieItem;