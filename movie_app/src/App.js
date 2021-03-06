import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
    state = {
        isLoading : true,
        movies : []
    };

    getMovies = async () => {
        // const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
        // console.log(movies.data.data.movies);
        const {
            data : {
                data : {movies}
            }
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        console.log(movies);
        this.setState({movies, isLoading : false}); // setState랑 acios 각각에서 옴
    }

    componentDidMount() {
        // setTimeout( () => {
        //     this.setState({isLoading : false});
        // }, 6000);
        this.getMovies();
    }

    render() {
        const {isLoading, movies} = this.state;

        return (
            <section class = "container"> 
                {isLoading ? (
                // ? "Loading..." 
                    <div className = "loader">
                        <span className = "loader__text">Loading...</span>
                    </div>
                ) : (
                    <div className = "movies">
                        {movies.map(movie => (
                            //{
                            //console.log(movie);
                            //return (
                            <Movie
                                key = {movie.id}
                                id = {movie.id} 
                                year = {movie.year} 
                                title = {movie.title} 
                                summary = {movie.summary} 
                                poster = {movie.medium_cover_image}
                                genres = {movie.genres}
                            />
                        ))}
                    </div>
                )}
            </section>
        );
    }
}


export default App;