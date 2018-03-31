import React from "react"



export default class AllPersons extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        id: "",
        age: "",
        name: "",
        gender: "",
        email: ""
      }
    }

  }

  onEdit = (event) => {
    event.preventDefault();
    //Get the id based on user click
    const id = event.target.id;

    //persons now holds all the persons objects
    const { persons } = this.props;

    //Find person based on id in the list of persons
    var person = persons.filter(person => person.id === id);

    this.props.getPerson(person);
  }

  onDelete = (event) => {
    event.preventDefault();
    const id = event.target.id;
    
    this.props.deletePerson(id);
  }

  render() {

    const { persons } = this.props;//indeholder props.person
    var rows = persons.map(person => {
      return (
        <tr key={person.id}><td>{person.age}</td><td>{person.name}</td>
          <td>{person.gender}</td><td>{person.email}</td>
          <td><a href="" onClick={this.onEdit} id={person.id}>Edit</a> <a href="" onClick={this.onDelete} id={person.id}>Delete</a></td></tr>
      )
    })
    return (

      <div>
        <table className="table">
          <thead>
            <tr><th>Age</th><th>Name</th><th>Gender</th><th>Email</th></tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
        <p>Please make me show all persons here in the table</p>
        <p>And update me when new are added </p>
      </div>
    )
  }
}


