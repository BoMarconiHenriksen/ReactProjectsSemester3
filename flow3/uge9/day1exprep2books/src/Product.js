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
    console.log(data);
    const allBooks = data;
    const unOrderedList = allBooks.map(book => {
        return (
            <ul key={book.id}> {book.title} </ul>
        )
    }) 
         
    
    
    return (
        <div>
        <h1>Product</h1>
        {unOrderedList}
        
        </div>
    );
}


export default Product;


