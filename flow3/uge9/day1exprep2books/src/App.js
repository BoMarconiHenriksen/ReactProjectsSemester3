import React, { Component } from 'react';
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>

        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            {/*Link components are used for linking to other views*/}
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Product</Link></li>
            <li><Link to="/category">Company</Link></li>
          </ul>
        </nav>

        <HashRouter >
          <div>
            <Header />
            <Switch>
              <Route exact path="/" render={() => <Home />} />
              <Route path="/products" render={() => <Product />} />
              <Route path="/company" render={() => <Company />} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </HashRouter>

      </div>
    );
  }
}

export default App;
