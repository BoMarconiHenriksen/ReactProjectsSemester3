import React, { Component } from 'react';

export default class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // This binding is necessary to make `this` work in the callback
     // this.handleClick = this.handleClick.bind(this);
      //Opg c) Bind gør at den binder this.handleClick til this, så den ikke forsvinder.
      
    }

    handleClick = () => {
       this.handleClick();
    }

    
  
    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      );
    }
  }

/* Spørgsmål
What is the purpose of this line in the constructor: this.handleClick = this.handleClick.bind(this);
This er nu defineret som handleClick og kan ikke ændres.

How can we disable the default behavior of an event handler (for example prevent a submit handler to submit?)
Man kan kalde preventDefault

What is the benefit(s) you get from using arrow-functions in a ES6 class?
Arrow function adopter bind i scopet så this ikke ændres. Det sker automatisk. Du skal ikke gøre noget. */


