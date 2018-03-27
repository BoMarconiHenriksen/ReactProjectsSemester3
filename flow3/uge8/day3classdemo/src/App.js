import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { name: "Hi class", number: 0 }
    //tager 2 arg. første er det jeg vil køre og andet hvor tit skal det køre
    this.id = setInterval(() => {
      var number = this.state.number + 1;
      if (number === 2) {
        clearInterval(this.id)
      }
      //property number som sætter value number number:number. Vi bruger shortcut
      //Kan bruges når property og value er det samme
      this.setState({ number })
    }, 1000)
  }
  render() {
    return (
      <div className="App">

        
        <LifeCycleDemo name={this.state.name + ", " + this.state.number} />


      </div>
    );
  }
}

//put komponent ind ved at skrive
//<LifeCycleDemo name={this.state.name + ", " + this.state.number} />

//LifeCycle Demo
class LifeCycleDemo extends Component {
  constructor() {
    super();
    console.log("constructor");
  }

  componentDidMount() { console.log('componentDidMunt') }
  componentWillMount() { console.log('componentWillMunt') }
  componentWillReceiveProps(newProps) { console.log('componentWillReceiveProps', newProps) }
  componentDidUpdate() { console.log('componentDidUpdate') }
  componentWillUnmount() { console.log('componentWillUnmount') }
  componentWillUpdate() { console.log('componentWillUpdate') }



  render() {
    console.log('render');
    return (
      <h2>{this.props.name}</h2>
    )
  }
}

export default App;
