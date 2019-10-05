import React, { Component } from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import About from './components/pages/About'
import axios from 'axios'
// import uuid from 'uuid';
class App extends Component {
  state = {
    todos: [],
    talha: "Talha"
  }
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => this.setState({ todos: res.data }))
      .catch((res)=>document.write(res));
  }
  markCompleted = (id) => {
    this.setState({
      todos: this.state.todos.map(
        (todo) => {
          if (todo.id === id) {
            todo.completed = !todo.completed;
          }
          return todo;
        }
      )
    }
    )
  }
  deleteTodo = (id) => {
    // this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }))
  }

  addTodo = (title) => {
    // const newTodo = {
    //   id: uuid.v4(),
    //   title,
    //   completed: false
    // }
    // this.setState({ todos: [...this.state.todos, newTodo] });
    axios.post("https://jsonplaceholder.typicode.com/todos", {
      title: title,
      completed: false
    })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }))
  }
  editTodo=(id)=>{
    console.log(id);
    // function editTitle(){
      
    // }
    // this.setState({todos:[...this.state.todos.map((todo)=>{
    //   if(todo.id===id)
    //   {
    //     todo.title=editTitle();
    //   }
    // })]})
  }
  render() { //required lifecycle method
    return (
      <Router>
        <div className="div1"> {/*className instead of class*/}
          <div className='container'>
            <Header />
            <Route exact path="/" render={(props) => {
              return (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos todos={this.state.todos} markCompleted={this.markCompleted} deleteTodo={this.deleteTodo} editTodo={this.editTodo}/>
                </React.Fragment>
              )
            }} />
            <Route path="/About" component={About} />
            {/* <img src={logo}></img> this is how to use a image imported*/}
          </div>
        </div>
      </Router>
    )
  }
}
export default App;

