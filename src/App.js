import React, { Component } from 'react';
import Todos from './todos'
import AddTodo from './AddTodo'

class App extends Component {
  state = {
    todos: [
      // {id: 1, content: 'Get measurements'},
      // {id: 2, content: 'DM Afghan Lady'}
    ]
  }
  deleteToDo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    })
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">ToDo List</h1>
        <Todos todos = {this.state.todos} deleteToDo ={this.deleteToDo}/>
        <AddTodo addTodo = {this.addTodo}/>
      </div>
    );
  }
}

export default App;
