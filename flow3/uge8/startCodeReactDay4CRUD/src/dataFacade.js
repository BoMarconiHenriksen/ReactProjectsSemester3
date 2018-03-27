const URL = "http://localhost:3456/api";


// Simple way to handle HTTP-errors which otherwise does not throw an exception with the fetch-API
function handleHttpErrors(res) {
  if (!res.ok) {
    throw Error(res.statusText);
  }
  console.log(res);
  return res.json();
}

function makeOptions(type, data) {
  return {
    method: type, //put eller post som type
    headers: {
      "Accept": "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  }
}

class DataFacade {

  /*
  OBSERVE-1: This returns a promise, NOT the actual data, you must handle asynchronicity by the client
  OBSERVE-2: To "simplify" how to handle asynchronicity you can use async/await as sketche in the example below*/
  getPersons() {
    return fetch(URL).then(handleHttpErrors)
  }

  // In order to use await, a method must be "marked" with async
  async getPersonsAsync() {
    var result = await fetch(URL).then(handleHttpErrors);
    return result;
  }

  addPerson(person) {
    console.log('addPerson i dataFacade: ' + person);
    return fetch(URL, makeOptions("POST", person)).then(handleHttpErrors);
    
    
  }

}

//Returner en instans. Det er en singleton klasse
export default new DataFacade();