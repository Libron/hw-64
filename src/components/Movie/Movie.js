import React, {Component} from 'react';
import './Movie.css';
import {Button, FormGroup, Input, Label} from "reactstrap";

class Movie extends Component {
    shouldComponentUpdate(nextProps) {
        return (nextProps.title !== this.props.title || nextProps.checked !== this.props.checked);
    };

    render() {
        return (
            <li className="movie-item" style={this.props.checked ? {background: '#c5e1a5'} : null}>
                <p>{this.props.title}</p>
                    <FormGroup check>
                    <Label check>
                        <Input type="checkbox" checked={this.props.checked} onChange={this.props.checkedMovie}/>
                        Watched:
                    </Label>
                    <Button color="warning" onClick={this.props.editMovie}>Edit</Button>
                    <Button color="danger" onClick={this.props.removeMovie}>Remove</Button>
                </FormGroup>

            </li>
        );
    }
}

export default Movie;