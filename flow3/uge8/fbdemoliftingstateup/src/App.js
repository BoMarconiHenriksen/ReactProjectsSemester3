import React, { Component } from 'react';
import './App.css';
import TemperatureInput from './TemperatureInput';

//This is the parent.
//temperature and scale will be stored in the local state here.
//This is the state we “lifted up” from the inputs, and it will serve as the “source of truth” for both of them. 
//It is the minimal representation of all the data we need to know in order to render both inputs.

/* For example, if we enter 37 into the Celsius input, the state of the Calculator component will be:

{
  temperature: '37',
  scale: 'c'
}

If we later edit the Fahrenheit field to be 212, the state of the Calculator will be:

{
  temperature: '212',
  scale: 'f'
} */

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    //The inputs stay in sync because their values are computed from the same state:
    this.state = { temperature: '', scale: 'c' };
  }

  handleCelsiusChange(temperature) {
    this.setState({ scale: 'c', temperature });
  }

  handleFahrenheitChange(temperature) {
    this.setState({ scale: 'f', temperature });
  }


  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <div className="App">

        {/*Render 2 seperate input boxes. 2 different components.*/}
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />

        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />

        {/*Renders the boiling verdict for the input.*/}
        <BoilingVerdict
          celsius={parseFloat(temperature)} />


      </div>
    );
  }
}

//Accepts celsius temperature as a prop, and prints wether it is enough to boil the water.
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  } else if (props.celsius < 0) {
    return <p>The water would frezee!</p>
  }
  return <p>The water would not boil.</p>;
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

//calculate the value of one input based on the other input.
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

export default Calculator;

/* Let’s recap what happens when you edit an input:

1) React calls the function specified as onChange on the DOM <input>. 
In our case, this is the handleChange method in TemperatureInput component.

2) The handleChange method in the TemperatureInput component calls this.props.onTemperatureChange() with the new desired value. 
Its props, including onTemperatureChange, were provided by its parent component, the Calculator.

3) When it previously rendered, 
the Calculator has specified that onTemperatureChange of the Celsius TemperatureInput is the Calculator’s handleCelsiusChange method, 
and onTemperatureChange of the Fahrenheit TemperatureInput is the Calculator’s handleFahrenheitChange method. 
So either of these two Calculator methods gets called depending on which input we edited.

4) Inside these methods, 
the Calculator component asks React to re-render itself by calling this.setState() 
with the new input value and the current scale of the input we just edited.

5) React calls the Calculator component’s render method to learn what the UI should look like. 
The values of both inputs are recomputed based on the current temperature and the active scale. 
The temperature conversion is performed here.

6) React calls the render methods of the individual TemperatureInput components with their new props specified by the Calculator. 
It learns what their UI should look like.

7) React DOM updates the DOM to match the desired input values. 
The input we just edited receives its current value, and the other input is updated to the temperature after conversion.

Every update goes through the same steps so the inputs stay in sync. */
