import React, { Component } from 'react';

//Opg. 4

export default class Reservation extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isGoing: true,
        numberOfGuests: 2
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    handleInputChange(event) {
      const target = event.target;
      //if target.type === "checkbox then target.checked else target.value"
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    }

    //For the submit button
    handleSubmit = (evt) =>{
        evt.preventDefault();
        window.alert(JSON.stringify(this.state));
      }
  
    render() {
      return (
          <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Is going:
            <input
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Number of guests:
            <input
              name="numberOfGuests"
              type="number"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange} />
          </label>
          <br/>
          <label>
              Name of First Guest:
              <input
              name="nameOfFirstGuest"
              type="text"
              value={this.state.nameOfFirstGuest}
              onChange={this.handleInputChange} />
          </label>
          <br/>
          <label>
              Name of Secound Guest:
              <input
              name="nameOfSecoundGuest"
              type="text"
              value={this.state.nameOfSecoundGuest}
              onChange={this.handleInputChange} />
          </label>
          <br/>
          <button>Submit</button>
        </form>
       
        </div>
      );
    }
  }

/*   Spørgsmål
In a Controlled Component React state is made the "Single source of truth", so how:
    - Do we ensure that input controls like text, textarea or select always 
        presents the value found in the components state?
        Det gør vi ved at lave en konstruktør og sætte value med this.state.value

    - Do we ensure that a controls state, always matches the value found in an input control?
        Ja, ellers er det ikke controlled men uncontrolled. Uncontrolled er når dommen 
        håndter form data i stedet for react state.

What is the purpose of doing event.preventDefault() in an event handler?
Det er for at fjerne den default opførelse som er på f.eks en button.

What would be the effect of NOT doing event.preventDefault in a submit handler
Det vil komme post til serveren, som vil sende et response tilbage.

Why don't we want to submit the traditional way, in a single page application?
Det er for at undgå hele tiden at kontakte serveren. Det gør at det som trykkes på vises instant.

What are the two different ways we can use to make this works as expected for our event handlers?
Onsubmit skal henvise til en funktion og derefter bruge event.preventDefault()

Explain in words what it takes to implement the "Controlled Component" pattern for a form 
Input, textarea og select har deres egen state. Controlled componenet er når
du i stedet bruger react state til at bestemme, hvad der skal ske med brugerens input i formen. Dvs input elementets
values kontrollers af react, og det er det som er controlled component.

*/
