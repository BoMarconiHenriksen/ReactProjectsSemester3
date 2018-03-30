import React, { Component } from 'react';

export default class AddPerson extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            person: {
                firstName: "",
                lastName: "",
                email: ""
            }
        }
    }

    //If only one input field
    /* firstNameHandleChange = (evt) => {
        this.setState({ person: {firstName: evt.target.value} })
    }

    lastNameHandleChange = (evt) => {
        this.setState({ person: {lastName: evt.target.value} })
    }

    emailHandleChange = (evt) => {
        this.setState({ person: {email: evt.target.value} })
    } */

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

    handleSubmit = (evt) => {
        evt.preventDefault();

        this.props.savePerson(this.state.person);
        
        //Clear the input fields
        this.setState({
            person: {
                firstName: "",
                lastName: "",
                email: ""
            }
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name="firstName" placeholder="First Name" value={this.state.person.firstName} onChange={this.handleChange} />
                    <input name="lastName" placeholder="Last Name" value={this.state.person.lastName} onChange={this.handleChange} />
                    <input name="email" placeholder="Email" value={this.state.person.email} onChange={this.handleChange} />
                    <br />
                    <button>Save</button>
                </form>
            </div>
        );
    }
}