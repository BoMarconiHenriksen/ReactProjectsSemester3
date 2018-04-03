import React, { Component } from 'react';
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import './App.css';
import data from "./data/data.json";
import Welcome from './Welcome';
import All from './All';
import Details from './Details';

//Mangler hashrouter
//og få data fra json fil.

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      users: data
    };
  }

  render() {
    //console.log(this.state.users);
    return (
      <div className="App">

        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li className="nav-item"><Link to="/">Welcome</Link></li>
            <li className="nav-item"><Link to="/all">All Users</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/all" component={All} />
          <Route path="/details" component={Details} />
        </Switch>



      </div>
    );
  }
}

export default App;
