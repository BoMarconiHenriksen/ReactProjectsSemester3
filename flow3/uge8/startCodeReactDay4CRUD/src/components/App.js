import React, { Component } from 'react';
import '../styles/App.css';
import AddEditPerson from "./AddEditPerson"
import AllPersons from "./AllPersons"

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {persons: [], err:""} //state sat her
  }

  //Kan laves async og laves som i async componentDidMount
  addPerson(person) {
    //Tilføj person via ny metode, der skal laves i facaden
    //Når person er tilføjet, hent list med alle brugere igen
    person = this.props.person;
    console.log('App: ' + person);
    this.props.facade.addPerson(person)
    .then(data => this.setState({person: data, err: ""}))
    .catch(err => this.setState({err: err.message}))
  }

  /* //Fetch sker her. Der skal være state inden med dummy data.
  componentDidMount() {
    this.props.facade.getPersons() //returner promise
    .then(data => this.setState({persons: data, err:""})) //setState kalder render
    .catch(err => this.setState({err:err.message}))//Får fejl ind
  } */
//Til async i datafacade. Køres i rækkefølgen det står i.
  async componentDidMount() {
    try {
    var data = await this.props.facade.getPersonsAsync() //returner promise
    //Kommer ikke her ned før data er hentet
    this.setState({persons: data, err:""});
    } catch(err) {

    }
  }

  render() {
    return (
      <div style={{ margin: 20, width: "70%" }}>
        <h3>CRUD Demo </h3>
        <div className="row">
          <div className="col-md-8">
            <h3>All Persons</h3>
            <AllPersons persons={this.state.persons} />
          </div>
          <div className="col-md-4" >
            <h3 style={{textAlign:"center"}}>Add Persons</h3>
            <AddEditPerson addPerson={this.addPerson} />
          </div>
        </div>
      <p style = {{color:"red"}}>{this.state.err}</p>
      </div>
    );
  }
}

export default App;
