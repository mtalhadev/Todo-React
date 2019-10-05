// rce+tab button to generate basic component structure
import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItems extends Component {
    stylesheet = () => {
        return {
            backgroundColor: "#f4f4f4",
            textDecoration: this.props.todo.completed ? "line-through" : "none",
            padding: "10px",
            borderBottom: "1px #ccc dotted",
            display: "flex",
            flexDirection: "column",
            flexWrap: "nowrap",
            justifyContent: "space-between",
            minWidth: "250px"
        }
    }
    
    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.stylesheet()}>
                <h5>
                    <input type="checkbox" onChange={this.props.markCompleted.bind(this, id)} />{' '}
                    {title}
                    <button style={buttonStyle} onClick={this.props.editTodo.bind(this,id)}>Edit</button>
                    <button style={buttonStyle} onClick={this.props.deleteTodo.bind(this, id)}>Delete</button>
                </h5>
            </div>
        )
    }
}
TodoItems.propTypes = {
    todo: PropTypes.object.isRequired,
    markCompleted: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}
const buttonStyle = {
    backgroundColor: "red",
    color: "white",
    padding: "5px 10px",
    borderRadius: "15%",
    cursor: "pointer",
    float: "right"
}
export default TodoItems
