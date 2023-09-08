import "./App.css";
import React from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import Input from "./components/Input";
import Image from "./components/Image";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <Header />
      </div>
      <div className="Button">
        <Button />
      </div>
      <div className="Input">
        <Input />
      </div>
      <div className="Image">
        <Image />
      </div>
    </div>
  );
}

export default App;
