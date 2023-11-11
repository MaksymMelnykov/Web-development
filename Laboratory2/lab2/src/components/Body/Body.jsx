import React, { useState } from "react";
import "./Body.css";
import ProductInfoButton from "../ProductInfoButton/ProductInfoButton";

const Body = (props) => {
  const [showInUSD, setShowInUSD] = useState(false);

  const getSelectedProducts = () => {
    return props.products.filter((product) => product.selected);
  };

  const convertToUSD = (priceInUAH) => {
    if (props.convertToUSD) {
      return props.convertToUSD(priceInUAH);
    }
    return priceInUAH;
  };

  const toggleCurrencyDisplay = () => {
    setShowInUSD((prevShowInUSD) => !prevShowInUSD);
  };

  const selectedProducts = getSelectedProducts();
  const selectedProductsNames = selectedProducts.map((product) => product.name);

  const currencyButtonText = showInUSD ? "Ціна в гривнях" : "Ціна в доларах";

  return (
    <div className="body">
      <h2>Тіло</h2>
      <h2>Список товарів</h2>
      <ol>
        {props.products.map((product, idx) => (
          <>
            <li key={product.id}>
              <label>
                <input
                  type="checkbox"
                  checked={product.selected}
                  onChange={() => props.onProductSelect(product.id)}
                />
                {product.name}, ціна:{" "}
                {showInUSD
                  ? convertToUSD(product.price) + " USD"
                  : product.price + " грн"}{" "}
                од/кг.
              </label>
              <span className="bodyContent">
                <ProductInfoButton
                  idx={idx}
                  name={product.name}
                ></ProductInfoButton>
              </span>
            </li>
          </>
        ))}
      </ol>
      <div className="selected-products">
        <h2>
          Вибрані товари: <span>{selectedProductsNames.join(", ")}</span>
        </h2>
        <h2>
          Кількість обраних товарів: <span>{props.selectedProductsCount}</span>
        </h2>
      </div>
      <div className="productInfo-currency">
        <button onClick={toggleCurrencyDisplay}>{currencyButtonText}</button>
      </div>
    </div>
  );
};

export default Body;
