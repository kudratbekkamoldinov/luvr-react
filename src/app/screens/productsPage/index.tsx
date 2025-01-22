import React from "react";
import { Routes, Route } from "react-router-dom";
import ChosenProduct from "./ChosenProduct";
import Products from "./Products";
import "../../../css/product.css";

export function ProductsPage() {
  return (
    <div className="products-page">
      <Routes>
        <Route path={"/:productId"} element={<ChosenProduct />} />
        <Route path={``} element={<Products />} />
      </Routes>
    </div>
  );
}
