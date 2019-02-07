import React, {Component} from 'react';
import './Form.css';

class Form extends Component {
    constructor(props) {
        super(props);
        if (props.item) {
            this.state = {...props.item};
        } else {
            this.state = {
                title: '',
                checked: false
            };
        }
    }

    valueChanged = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };

    submitClicked = event => {
        event.preventDefault();
        if (this.state.title) {
            this.props.submit({...this.state});
        } else {
            alert('Field title cannot be Empty !');
        }
    };

    render() {
        return (
            <form className="form" onSubmit={event => this.submitClicked(event)}>
                <label htmlFor="title">{this.props.title}</label>
                <input type="text" name="title" id="title" value={this.state.title} onChange={this.valueChanged} />
                <button type="submit" className="btn-add">{this.props.btnName}</button>
            </form>
        );
    }
}

export default Form;