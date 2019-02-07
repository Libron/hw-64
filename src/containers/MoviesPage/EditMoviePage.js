import React, {Component, Fragment} from 'react';
import Form from "../../components/Form/Form";
import axios from '../../axios-instance';

class EditMoviePage extends Component {
    state = {
        movie: null
    };

    componentDidMount() {
        axios.get('movies/' + this.props.match.params.id + '.json').then(response => {
            this.setState({movie: response.data});
        });
    };

    editMovie = movie => {
        axios.put('movies/' + this.props.match.params.id + '.json', movie).then(()=>{
                this.props.history.push('/movies');
            }
        );
    };

    render() {
        if (!this.state.movie) {
            return <h1>Fetching Movie data...</h1>
        }

        return (
            <Fragment>
                <h2>Movie</h2>
                <Form item={this.state.movie} title="Edit movie title:" btnName="Edit" submit={this.editMovie}/>
            </Fragment>
    );
    }
}

export default EditMoviePage;