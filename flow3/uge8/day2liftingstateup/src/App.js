import React, { Component } from 'react';
import './App.css';
import AddJoke from "./AddJoke";
import AllJokes from "./AllJokes";
import JokesStore from "./JokeStore";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: props.jokeStore.jokes
    };
  }


  saveJoke = (joke) => {
    this.props.jokeStore.addJoke(joke);
    this.setState({ jokes: this.props.jokeStore.jokes });
  }

  render() {
    return (
      <div className="App">

        <p>Add Joke</p>
        <AddJoke saveJoke={this.saveJoke} />
        <br />
        <p>All Jokes</p>
        <AllJokes jokes={this.state.jokes} />

      </div>
    );
  }
}


export default App;
