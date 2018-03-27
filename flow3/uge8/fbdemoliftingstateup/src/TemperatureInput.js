import React, { Component } from 'react';

//temperature and scale is being liftedup in this example!

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        //Saves the value of temperature in this.state.temperature. Which is the local state
        //this.state = { temperature: '' };  //Before when state was local
    }

    /* There is no special meaning to either temperature or onTemperatureChange prop names in custom components. 
    We could have called them anything else, like name them value and onChange which is a common convention. */
    handleChange(e) {
        //this.setState({ temperature: e.target.value }); //Before when state was local
        //when the TemperatureInput wants to update its temperature, it calls this.props.onTemperatureChange
        //The onTemperatureChange prop will be provided together with the temperature prop by the parent Calculator component. 
        //It will handle the change by modifying its own local state, thus re-rendering both inputs with the new values.
        this.props.onTemperatureChange(e.target.value); 
    }

    render() {
        {/*Before uplifting. This is the local state. 
        When local we can change it with this.setState.
        const temperature = this.state.temperature; */}

        {/*Temperature is going to be parsed from Calculator(App.js). 
        We cant change temperature in TemperatureInput as its comming from its parent Calculator(App.js).
        The component is now "controlled".
        Just like the DOM <input> accepts both a value and an onChange prop, 
        so can the custom TemperatureInput accept both temperature and onTemperatureChange props from its parent Calculator.*/}
        const temperature = this.props.temperature; 
       
        {/*Scale prop that can bee either c or f.*/}
        const scale = this.props.scale; {/*Sættes i App*/}
        return (
            <fieldset> {/*is used to group related elements in a form and draws a box around the related elements. */}

                {/*Get information from object based on scale value which is set in App.js*/}
                <legend>Enter temperature in {scaleNames[scale]}:</legend> {/*defines a caption for the <fieldset> element.*/}
                {/*Input lets you enter the temperature*/}
                <input value={temperature}
                    onChange={this.handleChange} />

            </fieldset>
        );
    }
}

export default TemperatureInput;
