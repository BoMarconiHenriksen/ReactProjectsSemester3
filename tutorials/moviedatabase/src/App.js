/* eslint react/no-did-mount-set-state: 0 */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';

// = to a function
const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <Link to="/:id">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
      </header>

      <Switch>
        <Route exact path="/" Component={MovieList} />
        <Route path="/test" Component={MovieDetail} />
      </Switch>

    </div>
  </Router>
);

export default App;
