import React, { Component } from 'react';
import PropTypes from "prop-types";

const propTypes = {
    name: PropTypes.string.isRequired,
    onClicked: PropTypes.func, //is not required
    title: PropTypes.string.isRequired
};

const defaultProps = {
    name: "Default propType name"
};

class MyComponent extends Component {
    //Runs before a component mount.
    /* componentWillMount() {
        //expect it will logout before didMount
        console.log('Will Mount');
    } */

    //Runs after a component mount.
    /* componentDidMount() {
        console.log('Did Mount');
    } */

    //Runs right before a component update.
    /* componentWillUpdate(nextProps, nextState) {
        //Click the buttons
        console.log(this.props, this.state, nextProps, nextState);
    } */

    //Runs right after a component did update.
    /* componentDidUpdate(prevProps, prevState) {
        //Click the buttons
        console.log(this.props, this.state, prevProps, prevState);
    } */

    //sholdComponentUpdate based on the new props its recieving.
    //returns a boolean
    /* shouldComponentUpdate(nextProps, nextState) {
        return false; //The component will not update.
    } */

    render() {

        const { title, name, onClickWithProps } = this.props;

        return (
            <div className="Component">

                <h1>This is a component that is droped into another component</h1>

                {/*Passing props from App.js*/}
                <h1>Title: {this.props.title}</h1>
                <h2>Name: {this.props.name}</h2>

                {/*A more clean way to pass props using const*/}
                <h1>Title - More clean way: {title}</h1>
                <h2>Name - More clean way: {name}</h2>
                <div onClick={onClickWithProps}>Click Me</div>

                
            </div>
        );
    }
}

MyComponent.propTypes = propTypes;
MyComponent.defaultProps = defaultProps;

export default MyComponent;
