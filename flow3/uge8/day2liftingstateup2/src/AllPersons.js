import React, { Component } from 'react';

export default class AllPersons extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            person: {
                firstName: "",
                lastName: "",
                email: "",
                isEdit: false
            }
        }
    }

    onDelete = (event) => {
        event.preventDefault();
        const target = event.target;//.id??? og slet næste linje
        const id = target.id;

        this.props.deletePerson(id);
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        var person = this.state.person;
        person[name] = value;
        this.setState({
            person
        });
    }

    onEditSubmit = (event) => {
        event.preventDefault();
        const target = event.target;
        const id = target.id;
        console.log(id);
        //Nye værdier skal med og id
        this.setState({ isEdit: false });
    }

    onEdit = (event) => {
        event.preventDefault();
        //Set edit to true so user can edit
        this.setState({ isEdit: true });
        console.log(this.state.person.isEdit);
    }

    render() {
        const personList = this.props.persons.map((person, index) =>
            (<tr key={person.email}><td>{person.firstName}</td><td>{person.lastName}</td><td>{person.email}</td>
                <td>(<a href="" onClick={this.onDelete} id={index}>Delete</a>,
        <a href="" onClick={this.onEdit} id={index}>Edit</a>)</td></tr>))
        return (
            <div>

                {/*Edit mode*/}
                {
                    this.state.isEdit
                        ? (
                            <div>
                                <h1>Edit a person</h1>
                                <form onSubmit={this.onEditSubmit}>
                                    <input name="firstName" placeholder="First Name" value={this.state.person.firstName} onChange={this.handleChange} />
                                    <input name="lastName" placeholder="Last Name" value={this.state.person.lastName} onChange={this.handleChange} />
                                    <input name="email" placeholder="Email" value={this.state.person.email} onChange={this.handleChange} />
                                    <br />
                                    <button>gem</button>
                                </form>

                                <table className="table">
                                    <thead>
                                        <tr><th>Firstname</th><th>Lastname</th><th>email</th></tr>
                                    </thead>
                                    <tbody>
                                        {personList}
                                    </tbody>
                                </table>
                            </div>
                        )
                        : (
                            <div>
                                <h1>All Persons</h1>
                                <table className="table">
                                    <thead>
                                        <tr><th>Firstname</th><th>Lastname</th><th>email</th></tr>
                                    </thead>
                                    <tbody>
                                        {personList}
                                    </tbody>
                                </table>
                            </div>
                        )
                }
            </div>
        );
    }

}
