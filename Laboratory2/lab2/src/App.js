import MainPage from "./components/MainPage/MainPage";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route
            path="/productInfo"
            element={<ProductInfo id={1} name="Хліб" />}
          />
        </Routes>
      </Router>
    );
  }
}
