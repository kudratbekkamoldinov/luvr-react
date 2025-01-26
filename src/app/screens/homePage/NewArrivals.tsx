import React from "react";
import "../../../css/common.css";
import { Box, Container, Stack } from "@mui/material";
import { createSelector } from "@reduxjs/toolkit";
import { serverApi } from "../../../libs/config";
import { useSelector } from "react-redux";
import { Product } from "../../../libs/types/product";
import { ProductCollection } from "../../../libs/enums/product.enum";
import { retrieveNewProducts } from "./selector";

const NewProductsRetriever = createSelector(
  retrieveNewProducts,
  (newProducts) => ({ newProducts })
);

export default function NewProducts() {
  const { newProducts } = useSelector(NewProductsRetriever);
  console.log("newProducts:", newProducts);

  return (
    <div className="arrivals-frame">
      <Container>
        <Stack className="arrivals-section">
          <Stack className="f-title">New Arrivals</Stack>
          <Stack className="f-card-grid">
            {newProducts.length !== 0 ? (
              newProducts.map((product: Product) => {
                const imagePath = `${serverApi}/${product.productImages[0]}`;
                const sizeVolume =
                product.productCollection === ProductCollection.PERFUME
                    ? product.productVolume + "ml"
                    : product.productSize + "size";
                return (
                  <Stack key={product._id} className="f-card">
                    <Stack className="f-card-img">
                      <img
                        src={imagePath}
                        alt={product.productName}
                        className="f-image"
                      />
                    </Stack>
                    <Stack className="f-card-info">
                      <Stack className="f-info-box">
                        <Stack className="f-category-text">Perfume</Stack>
                        <Stack>
                          <img
                            src={"/icons/review.svg"}
                            alt="Review Stars"
                            style={{ width: "128px", height: "20px" }}
                          />
                        </Stack>
                      </Stack>
                      <Stack className="f-info-name">{product.productName}</Stack>
                      <Stack className="f-info-price">
                        <span className="f-price">${product.productPrice}</span>
                        <span className="f-discount">-30%</span>
                      </Stack>
                    </Stack>
                  </Stack>
                );
              })
            ) : (
              <Box className="no-data">New product are not avaiable!</Box>
            )}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
