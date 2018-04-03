import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import Category from './Category';
import Products from './Products';
import Login, { fakeAuth } from './Login';

//Demo https://www.sitepoint.com/react-router-v4-complete-guide/

/* Home component */
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

/* Category component */
/* const Category = () => (
  <div>
    <h2>Category</h2>
  </div>
) */

/* Products component */
/* const Products = () => (
  <div>
    <h2>Products</h2>
  </div>
) */

/* App component */
class App extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">

            {/*Link components are used for linking to other views*/}
            <li><Link to="/">Homes</Link></li>
            <li><Link to="/category">Category</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/admin">Admin area</Link></li>
          </ul>
        </nav>

        {/*Route components are rendered if the path prop matches the current URL */}
        {/*exact={true} Fjerner home componenten fra de andre komponenter så det kun er den exakte path, der vises.*/}
        {/*<Route exact={true} path="/" component={Home} />*/}

        <Switch>
        <Route path="/login" component={Login}/>
        <Route exact path="/" component={Home}/>
        <Route path="/category" component={Category}/>
        <PrivateRoute path='/admin' component = {Admin} />
        <Route path="/products" component={Products}/>
       </Switch>
      </div>
      
    );
  }
}

export default App;

//Private router function
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => fakeAuth.isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />} />
  )
}

//Admin component
const Admin = ({ match }) => {
  return(<div> <h2>Welcome admin </h2></div>)
}
