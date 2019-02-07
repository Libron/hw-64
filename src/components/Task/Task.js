import React from 'react';
import './Task.css';

const Task = props => {
    return (
        <div className="task"  style={props.checked ? {background: '#00c853'} : {background: '#ffa726'}}>
            <h4 className="item">{props.title}</h4>
            <div className="buttons">
                <input type="checkbox" name="done" value="done" checked={props.checked} onChange={props.checkedTodo} />
                <button className="btn-remove" onClick={props.remove} />
                <button className="btn-edit" onClick={props.editTodo} />
            </div>
        </div>
    );
};

export default Task;
