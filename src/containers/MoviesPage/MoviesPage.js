import React, {Component, Fragment} from 'react';
import Form from "../../components/Form/Form";

import axios from "../../axios-instance";
import Movie from "../../components/Movie/Movie";

import './MoviesPage.css';
import Spinner from "../../components/Spinner/Spinner";

class MoviesPage extends Component {
    state = {
        movies: null,
    };

    url = 'movies.json';

    componentDidMount() {
        axios.get(this.url).then(response=>{
           this.setState({movies: response.data});
        });
    };

    addMovieHandler = (movie) => {
        axios.post('movies.json', movie).then(response => {
            const movies = {...this.state.movies};
            const id = response.data.name;
            movies[id] = movie;
            this.setState({movies});
        });
    };

    removeMovie = id => {
        if (window.confirm('Do you really want to remove this movie ?')) {
            axios.delete('movies/' + id + '.json').then(()=>{
                const movies = {...this.state.movies};
                delete movies[id];
                this.setState({movies});
            });
        }
    };

    editMovie = id => {
        this.props.history.push('movies/' + id + '/edit');
    };

    checkMovie = id => {
        const currentMovieUrl = 'movies/' + id + '.json';
        const movies = {...this.state.movies};
        movies[id].checked = !movies[id].checked;
        this.setState({movies});

        axios.put(currentMovieUrl, movies[id]).then(() => {
            console.log('Updated');
        });
    };

    render() {
        if (!this.state.movies) {
            return <Spinner />
        }

        const movies = Object.keys(this.state.movies).map(movieID => {
            return (
                <Movie
                    key={movieID}
                    title={this.state.movies[movieID].title}
                    removeMovie={() => this.removeMovie(movieID)}
                    editMovie={() => this.editMovie(movieID)}
                    checkedMovie={() => this.checkMovie(movieID)}
                    checked={this.state.movies[movieID].checked}
                />
            );
        });

        return (
            <Fragment>
                <Form title="Type the movie you want:" btnName="Add Movie" submit={this.addMovieHandler}/>
                <h2>The watch list:</h2>
                <ul className="movies-list">
                    {movies}
                </ul>
            </Fragment>
        );
    }
}

export default MoviesPage;