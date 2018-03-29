import React, { Component } from 'react';
import './App.css';
import AddPerson from './AddPerson';
import AllPersons from './AllPersons';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: props.personStore.persons
    };
  }

  deletePerson = (id) => {
    this.props.personStore.deletePerson(id);
    this.setState({ persons: this.props.personStore.persons });
  }

  savePerson = (person) => {
    this.props.personStore.addPerson(person);
    this.setState({ persons: this.props.personStore.persons });
  }

  onEditSubmit(id) {
    console.log(id);
  }

  render() {
    return (
      <div className="App">

        <p>Add person</p>
        <AddPerson savePerson={this.savePerson} />
        <br />
        
        <AllPersons 
          persons={this.state.persons} 
          deletePerson={this.deletePerson}
          onEditSubmit={this.onEditSubmit} 
        />
      </div>
    );
  }


}

export default App;
