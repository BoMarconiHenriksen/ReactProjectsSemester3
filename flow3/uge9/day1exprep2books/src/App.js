import React, { Component } from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Header from './Header';
import Product from './Product';
import Company from './Company';
import Home from './Home';
import AddBook from './AddBook';

class App extends Component {

 render() {

    var allBooks = this.props.bookStore.books;
    
    return (

      <HashRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" render={() => <Home  />} />
            {/* Evt. efter allBooks {...props} */}
            <Route path="/products" render={(props) => <Product data={allBooks} />} />
            <Route path="/add_book" render={() => <AddBook data={allBooks} />} />
            <Route path="/company" render={() => <Company />} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;

const NoMatch = () => (
  <div>
    <h1>404 Wrong url!</h1>
  </div>
);



