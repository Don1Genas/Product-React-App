import "./App.css";
import productsData from "./data/productsData";

import { Component } from "react";

import Navbar from "./components/Navbar";
import ProductsList from "./components/ProductsList";
import Form from "./components/Form";
import ShoppingCart from "./components/ShoppingCart";

class App extends Component {
  state = {
    productsData: productsData,
    productName: "",
    productPrice: 0,
    productDescription: "",
    shoppingCartItems: [],
  };

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
// Create New Product
    const newProduct = {
      name: this.state.productName,
      price: this.state.productPrice,
      description: this.state.productDescription,
      inStock: true,
    };
    console.log(newProduct);
    this.setState({ 
      productsData: [newProduct,...this.state.productsData ],
      productName: '',
      productPrice: 0,
      productDescription: ''
    });
  };

  addToCart = (product) => {
    console.log(product);
    this.setState({shoppingCartItems: [product, ...this.state.shoppingCartItems]})
  }

  render() {
    return (
      <div className="App">
        <Navbar />

        <ShoppingCart shoppingCartItems={this.state.shoppingCartItems} />

        <Form handleSubmit={this.handleSubmit} 
        handleChange={this.handleChange} 
        productName={this.state.productName} 
        productPrice={this.state.productPrice} 
        productDescription={this.state.productDescription} /> 

        <ProductsList products={this.state.productsData} addToCart={this.addToCart} />
      </div>
    );
  };
};

export default App;
