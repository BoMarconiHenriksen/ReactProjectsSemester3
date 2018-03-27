import React, { Component } from 'react';
import './App.css';

function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    //<li>{number}</li>
    <ListItem key={number.toString()}
      value={number} />
  );
  return (
    <ul>{listItems}</ul>
  );
}

//Metoden virker ikke
/* function NumberTable(props) {
  const numbersToTable = props.numbersToTable;
  const listTableItems = numbersToTable.map((numberToTable) =>
    <ListItem key={numberToTable.toString()}
      value={numberToTable} />
  );
  return (
     <ul>{listTableItems}</ul>
);
} */

//Opg c
//<NumberList numbers={[1,2,3,4,5]}/>
//<NumberTable numbersToTable={this.state.number} />

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { number: [1, 2, 3, 4, 5, 6, 7, 8] };
    //this.state = { numberToTable: [10, 11, 12, 13, 14] };
  }
  render() {
    return (
      <div className="App">

        <h1>Hello</h1>
       <NumberList numbers={this.state.number} />
        

      </div>
    );
  }
}

export default App;