import React, { Component } from 'react';

export default class AllJokes extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const list = this.props.jokes.map((j, i) => (<li key={i}>{j}</li>))
        return (
            <ul>
                {list}
            </ul>
        );
    }
}
