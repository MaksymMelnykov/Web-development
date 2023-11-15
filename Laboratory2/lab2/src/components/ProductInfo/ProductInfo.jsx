import React, { useContext, createContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../App";
import ProductsPage from "../ProductsPage/ProductsPage";

export const ProductInfoData = createContext(null);

function ProductInfo() {
  const { idx } = useParams();
  const products = useContext(DataContext);

  const product = products[idx];
  const productData = {
    id: product.id,
    name: product.name,
    description:
      "Discover the incredible world of this product, filled with innovative technology, stunning design, and unmatched performance. Dive into a rich experience that will exceed your expectations! Lorem ipsum dolor sit amet consectetur adipisicing elit. At illo saepe assumenda harum libero magni quod illum quis perspiciatis explicabo nesciunt aliquam, nemo recusandae magnam, sed debitis ipsum itaque possimus!",
  };

  return (
    <ProductInfoData.Provider value={productData}>
      <ProductsPage />
    </ProductInfoData.Provider>
  );
}

export default ProductInfo;
