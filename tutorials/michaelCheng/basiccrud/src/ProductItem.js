import React, { Component } from 'react';

//The reason to make a new componet is that it can have a selfcontained state
//with the products name and price

class ProductItem extends Component {
    constructor(props) {
        super(props);

        //Add an isEdit state to the component in the constructor. 
        //Is going to tell if we are in normal mode or edit mode.
        this.state = {
            isEdit: false
        };

        this.onDelete = this.onDelete.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onEditSubmit = this.onEditSubmit.bind(this);
    }

    //The onEditSubmit method
    //In productItem.js pass in the original name so we can find it in the full list that we need to edit.
	//Normally you would pass the  unik id in. An argument in the onEditSubmit.
    onEditSubmit(event) {
        event.preventDefault();

        //Get the value of the name and the price of the input with ref
        this.props.onEditSubmit(this.nameInput.value, this.priceInput.value, this.props.name);

        //set to false so it turn back when editing is finished.
        this.setState({ isEdit: false })
    }

    //The onEdit method
    onEdit() {
        //Start by setting isEdit to true.
        this.setState({ isEdit: true });
    }

    //onDelete method
    //Pass in the name to delete from App.js
    onDelete() {
        const { onDelete, name } = this.props;

        onDelete(name);
    }

    render() {
        //Get the name and price from props
        const { name, price } = this.props;
        return (
            <div className="App">

                {/*The edit mode*/}
                {
                    this.state.isEdit
                        ? (
                            <form onSubmit={this.onEditSubmit}>
                                <input placeholder="name" ref={nameInput => this.nameInput = nameInput} defaultValue={name} />
                                <input placeholder="price" ref={priceInput => this.priceInput = priceInput} defaultValue={price} />
                                <button>Save</button>
                            </form>
                        )
                        : (

                            <div>
                                <span>{name}</span>
                                {" | "}
                                <span>{price}</span>
                                {" | "}
                                <button onClick={this.onEdit}>Edit</button>
                                {" | "}
                                <button onClick={this.onDelete}>Delete </button>
                            </div>
                        )
                }
            </div>

        );
    }
}

export default ProductItem;
