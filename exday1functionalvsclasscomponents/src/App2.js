import React, { Component } from 'react';


export function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  
  export function App() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
      </div>
    );
  }

  export default(Welcome, App);