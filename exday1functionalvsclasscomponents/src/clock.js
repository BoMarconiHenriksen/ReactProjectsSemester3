import React, { Component } from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    console.log('constructor');
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    console.log('I didMount');
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    console.log("I will UnMount");
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    console.log('render');
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

const element = <Clock name="Fun Clock" />;
