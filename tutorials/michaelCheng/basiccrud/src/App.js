import React, { Component } from 'react';
import './App.css';
import ProductItem from './ProductItem';
import AddItem from './AddItem';

//Products for local storage
const products = [
  {
    name: "ipad",
    price: 200
  },

  {
    name: "iphone",
    price: 650
  }
];

//Set up local storage
localStorage.setItem("products", JSON.stringify(products));

class App extends Component {
  //Create state to store the products array. We read and write to state to make it simpler.
  //Whenever we read or write to state we can also write code to store it in the localstorage or a database.
  constructor(props) {
    super(props);

    //the state object
    this.state = {

      //Jason.parse to get it in javascript version
      //Getting data directly from local storage
      products: JSON.parse(localStorage.getItem("products"))
    };
    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  onEditSubmit(name, price, originalName) {
    let products = this.getProducts();

    //If the product name equals the product name we pass in
    products = products.map(product => {
      if(product.name === originalName) {
        product.name = name;
        product.price = price;
      }
      return product;
    });
    //save it
    this.setState({ products });
  }

  //fetch/read data from local storage
  //The componentWillMount after we get the products
  componentWillMount() {
    const products = this.getProducts();

    this.setState({ products });
  }

  //Method for get products
  getProducts() {
    return this.state.products;
  }

  //Add method. The name and the price we want to add.
  onAdd(name, price) {
    //Add the product and price to the state.
    const products = this.getProducts();

    products.push({
      name,
      price
    });

    this.setState({ products });
  }

  //Delete method. This is where the product actually get deleted.
  onDelete(name) {
    //Get the list of products
    const products = this.getProducts();

    //We only want the product we DONT click to delete
    const filteredProducts = products.filter(product => {
      return product.name !== name;
    });

    //Set the state of products to the filtered products
    this.setState({ products: filteredProducts });
  }

  render() {
    return (
      <div className="App">
        <h1>Products Manager</h1>

      {/*AddItem component*/}
      {/*Pass the onAdd as a props into the component.*/}
      <AddItem 
        onAdd={this.onAdd}
      />

        {/*Render products*/}
        {/*Pass the name and price. Evt. use the spred operater that parse them all at once 
        {...product} */}
        {/*Pass the onEditSubmit into the ProductItem component from App.js(Write it in App.js)*/}
        {
          this.state.products.map(product => {
            return (
              <ProductItem
                key={product.name}
                name={product.name}
                price={product.price}
                onDelete={this.onDelete}
                onEditSubmit={this.onEditSubmit}
              />

            )
          })
        }

      </div>
    );
  }
}

export default App;
