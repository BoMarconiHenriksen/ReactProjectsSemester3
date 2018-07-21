import React, { Component } from "react";
import CharacterList from "./characterList";
import HeroList from "./heroList";
import "../styles/index.css";
import SquardStats from './SquardStats';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>SuperSquard</h2>
        <div className="col-md-4">
          <CharacterList />
        </div>
        <div className="col-md-4">
          <HeroList />
        </div>
        <div className="col-md-4">
            <SquardStats />
        </div>
      </div>
    );
  }
}

export default App;
