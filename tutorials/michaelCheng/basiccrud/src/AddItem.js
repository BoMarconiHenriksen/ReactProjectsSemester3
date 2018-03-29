import React, { Component } from 'react';

class AddItem extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault(); //Prevent page refresh.

        //Get the value of the name and the price of the input with ref
        this.props.onAdd(this.nameInput.value, this.priceInput.value);

        //clear the input fields after submit.
        this.nameInput.value = "";
        this.priceInput.value = " ";
    }

    render() {

        return (
            <form onSubmit={this.onSubmit}>

            <h3>Add Product</h3>

            {/*Add input with the placeholder name and price*/}
            <input placeholder="name" ref={nameInput => this.nameInput = nameInput} />
            <input placeholder="price" ref={priceInput => this.priceInput = priceInput} />
            <button>Add</button>

            {/*hr tag to seperate it from the list*/}
            <hr />
            </form>
        );
    }
}

export default AddItem;
