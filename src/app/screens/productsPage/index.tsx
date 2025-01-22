import React from "react";
import { Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import ChosenProduct from "./ChosenProduct";

export function ProductsPage() {
  return (
    <div className="products-page">
      <Routes>
        <Route path={"/:productId"} element={<ChosenProduct />} />
      </Routes>
    </div>
  );
}
