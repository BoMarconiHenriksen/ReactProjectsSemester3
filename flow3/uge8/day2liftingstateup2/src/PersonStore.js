import React, { Component } from 'react';

class JokesStore {
    constructor(persons) {
       this._persons = persons;
       
    }

    //1 means only one person is spliced
    deletePerson(id) {
        this._persons.splice(id, 1);
    }

    addPerson(person) {
      this._persons.push(person);
    }

    getRandomPerson() {
      return this._persons[Math.floor(Math.random() * this._persons.length)];
    }

    get persons() {
      return this._persons;
    }

  }

  let startPersons = [
    { 
        firstName: "Kurt", 
        lastName: "Wonnegut", 
        email: "kw@gmail.com"
     },

     { 
        firstName: "Bo", 
        lastName: "Henriksen", 
        email: "bo@hotmail.com"
     },

     { 
        firstName: "Bente", 
        lastName: "sapir", 
        email: "bs@maybe.dk"
     }
     
  ]
  
  //Når den bliver givet som array, så skal den i konstruktøren
  //også modtages som et array.
  export default new JokesStore(startPersons);
  