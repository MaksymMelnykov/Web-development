import AdminPage from "./components/AdminPage/AdminPage";
import Debug from "./components/Debug/Debug";
import MainPage from "./components/MainPage/MainPage";
import NavigationHistory from "./components/NavigationHistory/NavigationHistory";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import { useDispatch } from "react-redux";
import { setProduct } from "./actions";
import store from "./store";

const products = [
  { id: 1, name: "Хліб", price: 15, selected: false },
  { id: 2, name: "М'ясо", price: 120, selected: false },
  { id: 3, name: "Cир", price: 50, selected: false },
  { id: 4, name: "Вода", price: 25, selected: false },
  { id: 5, name: "Олія", price: 30, selected: false },
  { id: 6, name: "Масло", price: 70, selected: false },
];

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setProduct(products));
  }, [dispatch]);

  store.subscribe(() => {
    console.log("Updated State:", store.getState());
  });
  return (
    <Router>
      <NavigationHistory>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path={`/productInfo/:idx`} element={<ProductInfo />} />
          <Route path="/debug" element={<Debug />}></Route>
          <Route path="/admin" element={<AdminPage />}></Route>
          <Route path="/register" element={<RegistrationForm />}></Route>
        </Routes>
      </NavigationHistory>
    </Router>
  );
}
