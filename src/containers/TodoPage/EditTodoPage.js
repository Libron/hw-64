import React, {Component, Fragment} from 'react';
import Form from "../../components/Form/Form";
import axios from "../../axios-instance";
import Spinner from "../../components/Spinner/Spinner";

class EditTodoPage extends Component {
    state = {
        todo: null
    };

    componentDidMount() {
        axios.get('todo/' + this.props.match.params.id + '.json').then(response => {
            this.setState({todo: response.data});
        });
    };

    editTodo = todo => {
        axios.put('todo/' + this.props.match.params.id + '.json', todo).then(()=>{
                this.props.history.push('/todo');
            }
        );
    };

    render() {
        if (!this.state.todo) {
            return <Spinner />
        }

        return (
            <Fragment>
                <h2>TodoList</h2>
                <Form item={this.state.todo} title="Edit todo:" btnName="Edit" submit={this.editTodo}/>
            </Fragment>
        );
    }
}

export default EditTodoPage;