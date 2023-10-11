import React, { Component } from "react";
import Header from "../Header/Header"
import Footer from "../Footer/Footer";
import Body from "../Body/Body";
import Menu from "../Menu/Menu";
import "../../App.css";

export default class MainPage extends Component{
    constructor() {
        super();
        this.state = {
          products: [
            { id: 1, name: "Хліб", price: 15, selected: false },
            { id: 2, name: "М'ясо", price: 120, selected: false },
            { id: 3, name: "Твердий сир", price: 50, selected: false },
            { id: 4, name: "Вода", price: 25, selected: false },
            { id: 5, name: "Олія", price: 30, selected: false },
          ],
          isLoggedIn: false,
          selectedProductsCount: 0,
          exchangeRate: 36.5,
        };
      }
    
      handleProductSelect = (productId) => {
        const updatedProducts = this.state.products.map((product) =>
          product.id === productId
            ? { ...product, selected: !product.selected }
            : product
        );
        this.setState({ products: updatedProducts }, () => {
          this.updatedSelectedProductsCount();
        });
      };
    
      handleLogin = () => {
        this.setState({ isLoggedIn: true });
      };
    
      handleLogout = () => {
        this.setState({ isLoggedIn: false });
      };
    
      updatedSelectedProductsCount = () => {
        const selectedProductsCount = this.state.products.filter(
          (product) => product.selected
        ).length;
        this.setState({ selectedProductsCount });
      };
    
      convertToUSD = (priceInUAH) => {
        const { exchangeRate } = this.state;
        return (priceInUAH / exchangeRate).toFixed(2);
      };

    render(){
    const { products, isLoggedIn, selectedProductsCount } = this.state;
    return(
        <div className="container">
            <Header />
            <Body
                products={products}
                onProductSelect={this.handleProductSelect}
                selectedProductsCount={selectedProductsCount}
                convertToUSD={this.convertToUSD}
            />
            <Menu
                isLoggedIn={isLoggedIn}
                onLogin={this.handleLogin}
                onLogout={this.handleLogout}
            />
            <Footer />
          </div>
    )
    }
}