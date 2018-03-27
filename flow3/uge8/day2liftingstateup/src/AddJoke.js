import React, { Component } from 'react';

export default class AddJoke extends React.Component {
    constructor() {
        super();
        this.state = { newJoke: ""}
    }

    handleChange = (evt) => {
        this.setState({ newJoke: evt.target.value })
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        this.props.saveJoke(this.state.newJoke);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <input value={this.state.newJoke} onChange={this.handleChange} /> 
                <br/>
                <button>Save</button>
                </form>
            </div>
        )
    }
}