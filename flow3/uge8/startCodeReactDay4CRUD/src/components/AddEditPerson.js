import React, { Component } from "react"

export default class AddEditPerson extends Component {
  constructor(props) {
    super(props);
    /* this.state = {
      person: { name: "", age: "", email: "", gender: "" }
    }; */
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    
    
    //window.alert(JSON.stringify(personName));
    //window.alert(JSON.stringify(this.state.person.name));
    //Make state to props or pass state to parent.
    //En metode der flytter mig tilbage til app - Bo
  }

  /* handleInput = (event) => {
    const target = event.target;
    const prop = target.id;
    var value = target.value;
    console.log('value: ' + value);
    var person = this.state.person;
    person[prop] = value;
    console.log(person);
    this.setState({
      person: person
    });
  } */

  render() {
    const personName = this.props.personName;
    return (
      <div>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="control-label col-sm-3">Id:</label>
            <div className="col-sm-9">
              <input className="form-control" readOnly id="id" name="id" />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3" htmlFor="name">Name:</label>
            <div className="col-sm-9">
              <input className="form-control" id="name" name="name" value={personName} placeholder="Enter Name" onChange={this.handleInput} />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3" htmlFor="age">Age:</label>
            <div className="col-sm-9">
              <input type="number" className="form-control" name="age" id="age" /* value={this.state.person.age} */ placeholder="Enter age" onChange={this.handleInput} />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3" htmlFor="email">Email:</label>
            <div className="col-sm-9">
              <input type="email" className="form-control" id="email" name="email" /* value={this.state.person.email} */ placeholder="Enter email" onChange={this.handleInput} />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3" htmlFor="pwd">Gender:</label>
            <div className="col-sm-9">
              <input className="form-control" id="gender" name="gender" /* value={this.state.person.gender} */ placeholder="Enter Gender" onChange={this.handleInput} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-3 col-sm-9">
              <button type="submit" className="btn btn-default">Submit</button>
            </div>
          </div>
        </form>

      </div>
    )
  }
}