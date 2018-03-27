import React, { Component } from 'react';

const infoOnPerson = {
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email"
}

export default class PersonInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onNameChange(e.target.value);
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        this.props.addPerson(this.props.firstname);
      }

    render() {
        const firstname = this.props.firstname;
        const info = this.props.info;
        return (

            <fieldset>

                <form onSubmit={this.handleSubmit}>
                    <legend>Enter {infoOnPerson[info]}</legend>
                    <input value={firstname} onChange={this.handleChange} /><br />
                    <button>Save</button>
                </form>

                

            </fieldset>

        )
    }

}