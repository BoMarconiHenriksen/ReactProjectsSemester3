import React, { Component } from 'react';

export default class AddJoke extends React.Component {
    constructor() {
        super();
        this.state = { 
            joke: ""
        }
    }

    handleChange = (evt) => {
        this.setState({ joke: evt.target.value })
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        this.props.saveJoke(this.state.joke);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <input value={this.state.joke} onChange={this.handleChange} /> 
                <br/>
                <button>Save</button>
                </form>
            </div>
        );
    }
}