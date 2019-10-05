import React from 'react';
import TodoItems from './TodoItems';
import PropTypes from 'prop-types';
class Todos extends React.Component {
    render() {

        return this.props.todos.map((todo) => (
            <TodoItems key={todo.id} todo={todo} markCompleted={this.props.markCompleted} deleteTodo={this.props.deleteTodo} editTodo={this.props.editTodo}/>
        ))
    }
}
Todos.propTypes = { //these are basically to check if the prop we are getting from the other component is in correct data type and check if value is given if we set it to isRequired
    todos: PropTypes.array.isRequired,
    talha: PropTypes.string,
    markCompleted: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}
export default Todos;