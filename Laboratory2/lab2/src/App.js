import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Body from "./components/Body/Body";
import Menu from "./components/Menu/Menu";
import { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        { id: 1, name: "Хліб", selected: false },
        { id: 2, name: "М'ясо", selected: false },
        { id: 3, name: "Твердий сир", selected: false },
        { id: 4, name: "Вода", selected: false },
        { id: 5, name: "Олія", selected: false },
      ],
      isLoggedIn: false,
      selectedProductsCount: 0,
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

  render() {
    const { products, isLoggedIn, selectedProductsCount } = this.state;

    return (
      <div className="container">
        <Header />
        <Body
          products={products}
          onProductSelect={this.handleProductSelect}
          selectedProductsCount={selectedProductsCount}
        />
        <Menu
          isLoggedIn={isLoggedIn}
          onLogin={this.handleLogin}
          onLogout={this.handleLogout}
        />
        <Footer />
      </div>
    );
  }
}
