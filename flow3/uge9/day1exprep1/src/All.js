import React from 'react';
import { Link, Route, NavLink } from 'react-router-dom';
import Details from './Details';
import data from "./data/data.json";

const All = ({ match }) => {
     
        var usersData = data.users;
        console.log(usersData);
   var linkList = usersData.map( (user) => {
     return(
       <li key={user.email}>
        <Link to={`${match.url}/${user.email}`}>
           {user.first} {user.last}
         </Link>
       </li>
       )
          
     });
  
   return(
     <div>
      <div style={{ display: 'block',  justifyContent: "space-between" }}>
       <div style={{
         float:'left',
         padding: '10px',
         width: '30%',
         background: '#f0f0f0',
         marginLeft:'auto' }}>
 
         <h3> Users</h3>
         <ul  style={{ listStyleType: 'none', padding: 0, fontSize:'15px' }}> {linkList} </ul>
       </div>
     </div>
     
     <Route path={`${match.url}/:userEmail`} render={ (props) => <Details data= {usersData} {...props} />}/>
     <Route exact path={match.url} 
       render={() => (
         <div style={{ textAlign:'left'}}>Please select a user.</div>
     )}/>
 
     </div>
 
   )
 }
 
export default All;

const Header = () => (
  <div>
      
      <ul className="header">
          <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
          <li><NavLink activeClassName="active" to="/products">Products</NavLink></li>
          <li><NavLink activeClassName="active" to="/company">Company</NavLink></li>
      </ul>

  </div>
);
