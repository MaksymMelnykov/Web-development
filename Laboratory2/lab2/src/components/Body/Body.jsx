import React, { useContext, useState } from "react";
import styles from "./Body.module.css";
import ProductInfoButton from "../ProductInfoButton/ProductInfoButton";
import { CSSTransition } from "react-transition-group";
import AddProductForm from "../AddProductForm/AddProductForm";
import { DataContext } from "../../App";
import { ProductInfoData } from "../ProductInfo/ProductInfo";

const Body = (props) => {
  const [showInUSD, setShowInUSD] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const products = useContext(DataContext);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

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

  const handleAddProduct = (values, { resetForm }) => {
    const newProduct = {
      id: products,
      name: values.name,
      price: parseFloat(values.price),
      selected: false,
    };

    props.setProducts([...props.products, newProduct]);

    resetForm();
  };

  return (
    <div className={styles.body}>
      <h2>Тіло</h2>
      <h2>Список товарів</h2>
      <div className={styles.goods}>
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
                <span className={styles.bodyContent}>
                  <ProductInfoButton
                    idx={idx}
                    name={product.name}
                  ></ProductInfoButton>
                </span>
              </li>
            </>
          ))}
        </ol>
      </div>

      <div className={styles.selected_products}>
        <h2>
          Вибрані товари: <span>{selectedProductsNames.join(", ")}</span>
        </h2>
        <h2>
          Кількість обраних товарів: <span>{props.selectedProductsCount}</span>
        </h2>
      </div>
      <div className={styles.productInfo_currency}>
        <button onClick={toggleCurrencyDisplay}>{currencyButtonText}</button>
      </div>
      <div className={styles.dialog_gallery}>
        <button onClick={openDialog}>Діалогове вікно</button>
        <CSSTransition
          in={isDialogOpen}
          timeout={500}
          classNames={styles.dialog}
          unmountOnExit
          mountOnEnter
        >
          <div className={styles.dialog}>
            <h2>Додати товар</h2>
            <AddProductForm handleSubmit={handleAddProduct} />
            <button onClick={closeDialog}>Закрити</button>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};

export default Body;
