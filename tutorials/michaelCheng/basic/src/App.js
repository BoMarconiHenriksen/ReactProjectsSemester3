import React, { Component } from 'react';
import './App.css';
import MyComponent from './MyComponent';

//exercises from https://www.youtube.com/watch?v=S66rHpyU-Eg
class App extends Component {
  constructor(props) {
    super(props);

    //Manage the state of the component with this.state as an object.
    this.state = {
      name: "Initial name",
      title: "Initial titile",
      checked: true,
      shouldRenderTitle: true
    };
    //setState example.
    //Bind the onclickSetStateEx to this beacuse we are going to use 
    //this.setState otherwise this.state would not be defined.
    this.onClickSetStateEx = this.onClickSetStateEx.bind(this);
    this.onClickWithProps = this.onClickWithProps.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateCheck = this.updateCheck.bind(this);
  }

  //conditional rendering method
  renderTitle() {
    //We dont want to render anything
    if(!this.state.shouldRenderTitle) { return null; }

    //We want to render title
    return <h1>Conditional Rendering Title</h1>
  }

  //Controlled input. Set the new value as input.
  updateCheck() {
    this.setState({ checked: !this.state.checked }) ;//The opposite of this.state.checked
  }


  //Controlled input. Set the new value as input.
  updateName(event) {
    this.setState({
      name: event.target.value
    });
  }

  //Passing props
  onClickWithProps() {
    this.setState({
      name: "New app Name",
      title: "Props App Title"
    });
  }

  //setState example
  //Change the title
  onClickSetStateEx() {
    this.setState({
      title: "New App Title"
    });
  }

  //Eventhandler onSubmit
  onSubmit(event) {
    event.preventDefault(); //Prevent the browser to refresh
    alert("Submitted");
  }

  //Eventhandler on input
  onChange(event) {
    console.log(event.target.value);
  }

  //Eventhandler onclick
  onClick() {
    alert("Clicked");
  }

  render() {

    //Render variabels
    const title = "This is Bo's App";
    const anotherTitle = "Another title";

    //Render a list with map method
    //Husk key skal være unik!
    const list = [
      "item 1",
      "item 2",
      "item 3"
    ];

    return (
      <div className="App">
        <h1>My App</h1>

        <h2>{title}</h2>

        {/*Also use methods
        ternary. if true... else...*/}
        <h3>
          {
            true ? anotherTitle : title
          }
        </h3>

        <div>
          {
            list.map(item => {
              return (
                <div key={item} onClick={this.onClick}>{item}</div>
              );
            })
          }
        </div>

        <form onSubmit={this.onSubmit} >
          <input onChange={this.onChange} />
        </form>

        {/*Render an object*/}
        <h1>{this.state.title}</h1>

        {/*setState example*/}
        <div onClick={this.onClickSetStateEx}>Click Here!</div>

        {/*Add a component*/}
        {/*Passing props title and name and method*/}
        <MyComponent
          title={this.state.title}
          name={this.state.name}
          onClickWithProps={this.onClickWithProps}
        />

        {/*Uncontrolled input with basic value*/}
        <p>Uncontrolled Input</p>
        <input defaultValue="name" />

          {/*Controlled input with basic value*/}
          {/*You need a onChange handler else the value can not change*/}
          <p>Controlled input</p>
          <input
          onChange={this.updateName}
          value={this.state.name}
          />

          <br />

          {/*Controlled input and checkbox*/}
          <input 
          type="checkbox"
          onChange={this.updateCheck}
          checked={this.state.checked}
          />

          {/*Conditional rendering methods*/}
          {this.renderTitle()}

           {/*Or use a ternary or move it up in a method*/}
           {
            this.state.shouldRenderTitle
              ? <h1>Conditional render with Ternary</h1> 
              : null
           }
      </div>
    );
  }
}

export default App;
