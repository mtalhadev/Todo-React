import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal);


export class AddTodo extends Component {
    state = {
        title: ""
    }
    onUpdate = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onAdd = (e) => {
        MySwal.fire(
            'Added!',
            'Your Todo Added!',
            'success'
        )
        e.preventDefault();
        if (this.state.title !== "") {
            this.props.addTodo(this.state.title);
        }
        this.setState({ title: "" });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onAdd} style={{ display: "flex" }}>
                    <input
                        type="text"
                        placeholder="Add the Todo Item..."
                        name="title"
                        value={this.state.title}
                        onChange={this.onUpdate}
                        style={{ flex: "10", padding: "5px" }}
                    />
                    <input
                        type="submit"
                        value="Submit"
                        className="btn"
                        style={{ flex: "1" }}
                    />
                </form>
            </div>
        )
    }
}
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
}
export default AddTodo
