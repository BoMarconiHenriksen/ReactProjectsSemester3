import React, { Component } from 'react';

/* class Product extends Component {



    render() {
console.log(this.props.bookStore.books);
        return (
            <div>

            </div>
        );
    }
} */



const Product = ({ data }) => {

    const allBooks = data;

    const lis = allBooks.map(book => {
        return (
            <li key={book.id}> {book.title} </li>
        )
    })

    return (
        <div>
            <h1>Product</h1>
           <ul>{lis}</ul> 

        </div>
    );
}


export default Product;


