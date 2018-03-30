import React, { Component } from "react";

class CountryTable extends Component {
  constructor(props) {
    super(props);
  }

  //{ countries } = props; //indeholder props.name
  /* rows(props) {
    const { countries } = this.props;
    var allRows = countries.map(country => {
      return (
        <tr key={country.name}><td>{country.name}</td></tr>
      )
    });
  } */



  render() {

    const { labels } = this.props;

    const { countries } = this.props;//indeholder props.person
    var rows = countries.map(country => {
      return (
        <tr key={country.name}><td>{country.name}</td><td>{country.capital}</td><td>{country.region}</td><td>{country.population}</td><td>{country.area}</td><td>{showFirstElement(country.timezones)}</td><td>{showFirstElement(country.borders)}</td><td>{showFirstElement(country.topLevelDomain)}</td><td>{showFirstElement(country.currencies)}</td><td>{showFirstElement(country.languages)}</td></tr>
      )
    })

    return (
      <table className="table">
        <thead>
          <tr></tr>
        </thead>

        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}

export default CountryTable;

function showFirstElement(array) {
  let lengtOfArray = array.length - 1;
  if (lengtOfArray !== 0) {
    return array[0] + " (+" + lengtOfArray + ")";
  } else {
    return array[0];
  }

}