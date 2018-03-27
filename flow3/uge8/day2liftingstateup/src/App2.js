import React, { Component } from 'react';
import './App.css';

class AllTodos extends React.Component { //YELLOW
    constructor(props) {
      super(props);
    }
    render() {
      const lis = this.props.todos.map((j, i) => (<li key={i}>{j}</li>))
      return (
        <ul>
          {lis}
        </ul>
      );
    }
  }

class AddTodo extends React.Component { //RED
    constructor() {
      super();
      this.state = { newTodo: "" }
    }
    handleChange = (evt) => {
      this.setState({ newTodo: evt.target.value })
    }
    handleSubmit = (evt) => {
      evt.preventDefault();
      this.props.saveTodo(this.state.newTodo);
    }
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input value={this.state.newTodo} onChange={this.handleChange} /><br />
            <button>Save</button>
          </form>
        </div>
      );
    }
  }

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { todos: props.todoStore.todos };
      }
      saveTodo = (joke) => {
        this.props.todoStore.addTodo(joke);
        this.setState({ todos: this.props.todoStore.todos });
      }
  
    
  //<p>Random Joke: { this.props.JokeStore.getRandomJoke() }</p>
  /* <p>Add Joke</p>
        <AddJoke saveJoke={this.saveJoke} />
        <br/>
        <p>All Jokes</p>
        <AllJokes jokes={this.state.jokes} /> */
    render() {
      return (
        <div className="App">

        <p>Random Todo: {this.props.todoStore.getRandomTodo()}</p>
        <div>
          <p>Add Todo</p>
          <AddTodo saveTodo={this.saveTodo} />
        </div>
        <div>
          <p>All Todo's</p>
          <AllTodos todos={this.state.todos} />
        </div>
      
         
        
  
        </div>
      );
    }
  }

  export default App;

  //TodoStore start
class TodoStore {
    constructor() {
      this._todos = [
        "Study hard",
        "Learn JavaScript",
        "Learn React",
      ]
    }
    addTodo(todo) {
      this._todos.push(todo);
    }
    getRandomTodo() {
      return this._todos[Math.floor(Math.random()*this._todos.length)];
    }
    get todos() {
      return this._todos;
    }
  }
  //TodoStore end
  let store = new TodoStore();
  
  
  
 