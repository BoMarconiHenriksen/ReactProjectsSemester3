import React, { Component } from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Header from './Header';
import Product from './Product';
import Company from './Company';
import Home from './Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookList: this.bookStore
    }

  }



  render() {

    var allBooks = this.props.bookStore.books;
    //console.log(allBooks);
    //data={allBooks} {...props}

    return (

      <HashRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" render={() => <Home  />} />
            <Route path="/products" render={(props) => <Product data={allBooks} {...props} />} />
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



