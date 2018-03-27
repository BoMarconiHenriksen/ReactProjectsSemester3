import React, { Component } from "react";

class CountryTable extends Component {
  constructor(props){
    super(props);
  }

  // { countries } = props; //indeholder props.name

  rows(props) {
    const {countries} = props;
    var allRows = countries.map(country => {
      return (
        <tr key={country.name}><td>{country.name}</td></tr>
      )
    }) ;
  }

  

  render() {
    return (
      <table className="table">
        <thead>
          <tr><th>This is the header. Replace with a row generated from the Labels endpoint</th></tr>
        </thead>
        
        <tbody>
         <tr></tr>
        </tbody>
      </table>
    );
  }
}
export default CountryTable;