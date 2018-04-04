import React, { Component } from 'react';
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import './App.css';
import Header from './Header';
import Product from './Product';
import Company from './Company';
import Home from './Home';

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
          <Switch>
            <Header />
            <Route exact path="/" render={() => <Home />} />
            <Route path="/products" render={() => <Product />} />
            <Route path="/company" render={() => <Company />} />
            
          </Switch>
        </HashRouter>

      </div>
    );
  }
}

export default App;
