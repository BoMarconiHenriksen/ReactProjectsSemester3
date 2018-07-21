//import React from 'react';

import React, { Component } from 'react';


class AddBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            info: ""
        }
        }

        onSubmit = () => {
//Før bookstore herned og kald addBook
        }
        
    render() {

        return (
            <div>
                <h1>Add Book</h1>
                <form onSubmit={this.onSubmit}>
                    <input placeholder="Title" />
                    <br />
                    <br />
                    <input placeholder="Info" />
                    <br />
                    <br />
                    <button >Save</button>
                </form>
            </div>
        );
    }
}

export default AddBook;


/* const AddBook = () => (
    <div>
        <h1>Add Book</h1>
        <form>
            <input placeholder="Title" />
            <br />
            <br />
            <input placeholder="Info" />
            <br />
            <br />
            <button>Save</button>
        </form>
    </div>
); */

//export default AddBook;
