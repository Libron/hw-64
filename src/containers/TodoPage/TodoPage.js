import React, {Component, Fragment} from 'react';

import './TodoPage.css';
import Form from "../../components/Form/Form";
import axios from "../../axios-instance";
import Task from "../../components/Task/Task";

class TodoPage extends Component {
    state = {
        todos: null,
    };

    url = 'todo.json';

    componentDidMount() {
        axios.get(this.url).then(response=>{
            this.setState({todos: response.data});
        });
    };

    removeTodo = id => {
        if (window.confirm('Do you really want to remove this todo ?')) {
            axios.delete('todo/' + id + '.json').then(()=>{
                const todos = {...this.state.todos};
                delete todos[id];
                this.setState({todos});
            });
        }
    };

    editTodo = id => {
        this.props.history.push('todo/' + id + '/edit');
    };

    addTodo = todo => {
        axios.post(this.url, todo).then(response => {
            const todos = {...this.state.todos};
            const id = response.data.name;
            todos[id] = todo;
            this.setState({todos});
        });
    };

    checkTodo = id => {
        const currentMovieUrl = 'todo/' + id + '.json';
        const todos = {...this.state.todos};
        todos[id].checked = !todos[id].checked;
        this.setState({todos});

        axios.put(currentMovieUrl, todos[id]).then(() => {
            console.log('Updated');
        });
    };

    render() {
        if (!this.state.todos) {
            return <h1>Loading...</h1>;
        }

        const todos = Object.keys(this.state.todos).map(todoID => {
            return (
                <Task
                    key={todoID}
                    title={this.state.todos[todoID].title}
                    remove={() => this.removeTodo(todoID)}
                    editTodo={() => this.editTodo(todoID)}
                    checkedTodo={() => this.checkTodo(todoID)}
                    checked={this.state.todos[todoID].checked}
                />
            );
        });


        return (
            <Fragment>
                <Form title="Todo:" btnName="Add task" submit={this.addTodo}/>
                {todos}
            </Fragment>
        );
    }
}

export default TodoPage;