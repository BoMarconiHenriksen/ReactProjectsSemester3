import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//Router is the wrapper around our component.
//Link directs us to specific urls.

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">About Me</Link>
        </li>
        <li>
          <Link to="/about_react">About React</Link>
        </li>
        <li>
          <Link to="/jsx">JSX</Link>
        </li>
        <li>
          <Link to="/props_and_state">Props and State</Link>
        </li>
        <li>
          <Link to="/lifecycle_hooks">Lifecycle Hooks</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>
      <hr />

      {/*When we hit jsx go to component Jsx*/}
      <Route exact path="/" component={Home} />
      <Route path="/about_react" component={About} />
      <Route path="/jsx" component={Jsx} />
      <Route path="/props_and_state" component={PropsAndState} />
      <Route path="/lifecycle_hooks" component={LifecycleHooks} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);

{/*Defining every component*/}
const Home = () => (
  <div>
    <h2>About Me</h2>
    <p>Bo Henriksen</p>
    <br/>
    <a href="https://github.com/BoMarconiHenriksen/ReactProjectsSemester3/tree/master/flow3/uge8/routerdemo">Koden på github til dette projekt.</a>

  </div>
);

const About = () => (
  <div>
    <h2>About React</h2>
    <p>React er et javascript bibliotek, der kan bruges til at lave single page applikationer.</p>
    <p>Det kan kun bruges til UI, og det er muligt på en forholdsvis let måde at lave interactive UI.</p>
  </div>
);

const Jsx = () => (
  <div>
    <h2>About JSX</h2>
    <p>JSX er hverken en string eller html. Det er en syntaks extension til javascript.</p>
    <p>Det er muligt at embedde expressions i JSX ved hjælp af tuborg klammer.</p>
    <p>JSX repræsenter objekter, og kompileres ned til React.createElement() kald.</p>
  </div>
);

const PropsAndState = () => (
  <div>
    <h2>Props and State</h2>
    <p>Props er read only, hvorimod state bruges når data skal ændres for at vise noget nyt på skærmen(ændre viewet).</p>
    <p>Vi prøver at bruge props så meget som muligt, da state gør det hele mere komplekst.</p>
    <p>Det eneste sted state kan sættes direkte er i konstruktøren. Ellers skal man bruge metoden setState().</p>
  </div>
);

const LifecycleHooks = () => (
  <div>
    <h2>Lifecycle Hooks</h2>
    <h3>componentDidMount()</h3>
    <p>Bliver kaldt lige efter en komponent er mounted. Kan bruges ifm fetch, når der skal hentes data fra serveren. Kalder render metoden igen.</p>
    <h3>render()</h3>
    <p>Returner et React element, som repræsenter det view som brugeren ser.</p>
    <h3>componentWillReceiveProps</h3>
    <p>Bliver kaldt før en mounted komponent modtager nye props. Kan bruges, hvis du har behov for at opdater state, hvis props har ændret sig.</p>
    <h3>shouldComponentUpdate</h3>
    <p>Fortæller React at den nuværenende komponent ikke bliver påvirket at ændringer i props eller state.</p>
    <p>Kaldes før rendering når nye props eller state modtages af React.</p>
    <h3>componentWillUpdate</h3>
    <p>Hvis du har brug for at gøre noget inden en updatering af en komponent så brug denne metode.</p>
    <p>Kaldes lige før rendering.</p>
    <h3>componentDidUpdate</h3>
    <p>Kaldes lige efter en opdatering er sket. Bruges hvis du har brug for at operer på DOMen lige efter en opdatering.</p>
    <p>Her kan det også være et godt sted at lave netvork requests, så længe du sammenligner de nuværende props med tidligere props.</p>
    <h3>componentWillUnmount()</h3>
    <p>Klades lige så snart en komponent er unmounted og destroyed. Bruges til oprydning eks. stoppe requests, timere ect.</p>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);



export default App;
