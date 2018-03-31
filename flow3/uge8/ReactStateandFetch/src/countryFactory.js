const URLCOUNTRIES = "http://localhost:3333/countries";
const LABELSURL = "http://localhost:3333/labels";

class CountryFactory {
  constructor() {
    
    this.labels = [];
    this.countries = [];
  }

  getLabels = () => {
    let result = fetch(LABELSURL).then(handleHttpErrors);
    this.labels = result;
    return this.labels;
  }

  getCountries = () => {
    let result = fetch(URLCOUNTRIES).then(handleHttpErrors);
    this.countries = result;
    return this.countries;
  }

}

// Simple way to handle HTTP-errors which otherwise does not throw an exception with the fetch-API
function handleHttpErrors(res) {
  if (!res.ok) {
    throw Error(res.statusText);
  }
  console.log(res);
  return res.json();
}

export default new CountryFactory();
