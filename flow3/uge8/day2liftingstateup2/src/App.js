import React, { Component } from 'react';
import './App.css';
import PersonInput from './PersonInput';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);

    this.state = { person: "", info: "" };
  }

  handleFirstNameChange(person) {
    this.setState({ info: "firstName", person });
  }

  handleLastNameChange(person) {
    this.setState({ info: "lastName", person });
  }

  handleEmailChange(person) {
    this.setState({ info: "email", person });
  }


  render() {
    const info = this.state.info;
    const person = this.state.person;
    return (
      <div className="App">
        <PersonInput
          info="firstName"
          
          onNameChange={this.handleFirstNameChange} />

        <showPersons />

      </div>
    );
  }
}

var personList = ["Bo", "Bent"];

function addPerson(props) {
  personList.push.props;
}




function showPersons(props) {
  let result = personList.map(function (props) {
    return "<li>" + props + "</li>";
  }).join("\n");

  return result;
}

export default App;
