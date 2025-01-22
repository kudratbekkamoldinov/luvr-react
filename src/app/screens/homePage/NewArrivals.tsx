import React from "react";
import {  Container, Stack } from "@mui/material";
import "../../../css/common.css";

const list = [
  { productName: "Sauvage", imagePath: "/img/sauvages.jpg", productPrice: 120 },
  { productName: "Chanel", imagePath: "/img/chanel.jpg", productPrice: 120 },
  { productName: "Miss Dior", imagePath: "/img/ms.jpg", productPrice: 120 },
  {
    productName: "Dior Lipstick",
    imagePath: "/img/diorlip.jpg",
    productPrice: 120,
  },
  { productName: "Sauvage", imagePath: "/img/sauvages.jpg", productPrice: 120 },
  { productName: "Chanel", imagePath: "/img/chanel.jpg", productPrice: 120 },
  { productName: "Miss Dior", imagePath: "/img/ms.jpg", productPrice: 120 },
  {
    productName: "Dior Lipstick",
    imagePath: "/img/diorlip.jpg",
    productPrice: 120,
  },
];

export default function NewArrivalProducts() {
  return (
    <div className="arrivals-frame">
      <Container>
        <Stack className="arrivals-section">
          <Stack className="f-title">New Arrivals</Stack>
          <Stack className="f-card-grid">
            {list.map((ele, index) => {
              return (
                <Stack key={index} className="f-card">
                  <Stack className="f-card-img">
                    <img
                      src={ele.imagePath}
                      alt={ele.productName}
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
                    <Stack className="f-info-name">{ele.productName}</Stack>
                    <Stack className="f-info-price">
                      <span className="f-price">${ele.productPrice}</span>
                      <span className="f-discount">-30%</span>
                    </Stack>
                  </Stack>
                </Stack>
              );
            })}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
