import React, { Component } from 'react';

export default class AllJokes extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const list = this.props.jokes.map((joke, index) => (<li key={index}>{joke}</li>))
        return (
            <ul>
                {list}
            </ul>
        );
    }
}
