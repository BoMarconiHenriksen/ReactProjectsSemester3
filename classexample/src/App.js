import React, { Component } from 'react';
import './App.css';
//import default
import upper from "./DataStore1";
//import named
import {text1,text2, text3} from "./DataStore1";
//import both
//Normalt er det ikke anbefalet at man blander default export med named export.
//import upper, {text1,text2, text3} from "./DataStore1";
import person from "./DataStore";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
         <h1>Hello</h1>
        </header>

         <p>{text1}</p>
         <p>{text2}</p>
         <p>{text3}</p>

         <p>{upper("please uppercase me")}</p>

        <p>{person.firstName} - {person.email}</p>
        

               

      </div>
    );
  }
}

export default App;
