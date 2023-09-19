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
    };
  }

  handleProductSelect = (productId) => {
    const updatedProducts = this.state.products.map((product) =>
      product.id == productId
        ? { ...product, selected: !product.selected }
        : product
    );
    this.setState({ products: updatedProducts });
  };
  render() {
    return (
      <div className="container">
        <Header />
        <Body
          products={this.state.products}
          onProductSelect={this.handleProductSelect}
        />
        <Menu />
        <Footer />
      </div>
    );
  }
}
