import React from "react";
import { Route, Routes, useMatch, useResolvedPath } from "react-router-dom";
import "../../../css/products.css";
import ChosenProduct from "./ChosenProduct";
import Products from "./Products";
import { CartItem } from "../../../libs/types/search";

interface ProductsPageProps {
  onAdd: (item: CartItem) => void;
}

export default function ProductsPage(props: ProductsPageProps) {
  const { onAdd } = props;

  // Resolve the base path dynamically
  const resolvedPath = useResolvedPath("");

  return (
    <div className="products-page">
      <Routes>
        {/* Match a specific product */}
        <Route path={`${resolvedPath.pathname}/:productId`} element={<ChosenProduct onAdd={onAdd} />} />
        
        {/* Match the base products route */}
        <Route path={resolvedPath.pathname} element={<Products onAdd={onAdd} />} />
      </Routes>
    </div>
  );
}
