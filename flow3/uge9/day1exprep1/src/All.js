import React from 'react';
import { Link, Route } from 'react-router-dom';
import Details from './Details';

const All = ({ match }) => {
console.log(match);
    const usersData = 
     
        [
          {
            "gender": "male",
            "title": "mr",
            "first": "francisco",
            "last": "medina",
            "street": "2748 w dallas st",
            "city": "flowermound",
            "state": "new jersey",
            "zip": "77511",
            "email": "francisco.medina65@example.com",
            "dob": "454252284",
            "phone": "(757)-889-2571",
            "cell": "(113)-542-2123",
            "picture": {
              "large": "http://api.randomuser.me/portraits/men/22.jpg",
              "thumbnail": "http://api.randomuser.me/portraits/thumb/men/22.jpg"
            }
          },
          {
            "gender": "female",
            "title": "mrs",
            "first": "sherry",
            "last": "elliott",
            "street": "3251 brown terrace",
            "city": "wichita falls",
            "state": "washington",
            "zip": "79455",
            "email": "sherry.elliott17@example.com",
            "dob": "224238139",
            "phone": "(225)-793-2067",
            "cell": "(968)-555-1402",
            "picture": {
              "large": "http://api.randomuser.me/portraits/women/37.jpg",
              "thumbnail": "http://api.randomuser.me/portraits/thumb/women/37.jpg"
            }
          },
          {
            "gender": "male",
            "title": "mr",
            "first": "johnny",
            "last": "medina",
            "street": "1313 samaritan dr",
            "city": "redding",
            "state": "new hampshire",
            "zip": "43269",
            "email": "johnny.medina76@example.com",
            "dob": "259176886",
            "phone": "(991)-957-7139",
            "cell": "(502)-773-1487",
            "picture": {
              "large": "http://api.randomuser.me/portraits/men/90.jpg",
              "thumbnail": "http://api.randomuser.me/portraits/thumb/men/90.jpg"
            }
          }
        ];
      
     
        //var {usersData} = this.props;
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
         <div style={{ textAlign:'center'}}>Please select a user.</div>
     )}/>
 
     </div>
 
   )
 }
 
export default All;
