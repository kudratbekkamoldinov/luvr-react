import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { createSelector } from "@reduxjs/toolkit";
import { retrievePopularProducts } from "./selector";
import { serverApi } from "../../../libs/config";
import { useSelector } from "react-redux";
import { Product } from "../../../libs/types/product";
import { useNavigate } from "react-router-dom";

const PopularProductsRetriever = createSelector(
  retrievePopularProducts,
  (popularProducts) => ({ popularProducts })
);

export default function PopularProducts() {
  const { popularProducts } = useSelector(PopularProductsRetriever);
  const navigate = useNavigate();

  console.log("popularDishes:", popularProducts);

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="popular-frame">
      <Container>
        <Stack className="popular-section">
          <Stack className="title">Popular Products</Stack>
          <Stack className="card-frame">
            {popularProducts.length !== 0 ? (
              popularProducts.map((product: Product) => {
                const imagePath = `${serverApi}/${product.productImages[0]}`;
                return (
                  <Stack key={product._id} className="card" onClick={() => handleProductClick(product._id)} sx={{cursor: "pointer"}}>
                    <Stack className="card-img">
                      <img src={imagePath} alt="" className="image" />
                    </Stack>
                    <Stack className="card-info">
                      <Stack className="info-box">
                        <Stack className="category-text">Perfume</Stack>
                        <Stack>
                          <img
                            src={"/icons/review.svg"}
                            alt="Review Stars"
                            style={{ width: "128px", height: "20px" }}
                          />
                        </Stack>
                      </Stack>
                      <Stack className="info-name">{product.productName}</Stack>
                      <Stack className="info-price">
                        <span className="price">${product.productPrice}</span>
                        <span className="discount">-30%</span>
                      </Stack>
                    </Stack>
                  </Stack>
                );
              })
            ) : (
              <Box className="no-data">Popular product are not avaiable!</Box>
            )}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
