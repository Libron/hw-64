import React from 'react';
import './TaskForm.css';

const TaskForm = props => (
    <form onSubmit={props.submit} className="TaskForm">
        <label htmlFor="title">
            <input type="text" placeholder="Buy milk ..." name="title" onChange={props.currentTitle} />
        </label>
        <button type="submit" className="btn-add">Add Task</button>
    </form>
);

export default TaskForm;