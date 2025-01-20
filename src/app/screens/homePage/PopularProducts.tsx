import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { CssVarsProvider } from "@mui/joy/styles";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import "../../../css/home.css";
import TextRating from "../../components/common/Rating";
import { CardCover } from "@mui/joy";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Height } from "@mui/icons-material";

const list = [
  { productName: "Sauvage", imagePath: "/img/sauvages.jpg", productPrice: 120 },
  { productName: "Chanel", imagePath: "/img/chanel.jpg", productPrice: 120 },
  { productName: "Miss Dior", imagePath: "/img/ms.jpg", productPrice: 120 },
  {
    productName: "Dior Lipstick",
    imagePath: "/img/diorlip.jpg",
    productPrice: 120,
  },
];

export default function PopularProducts() {
  return (
    <div className="popular-frame">
      <Container>
        <Stack className="popular-section">
          <Stack className="title">Popular Products</Stack>
          <Stack className="card-frame">
            {list.map((ele, index) => {
              return (
                <Stack key={index} className="card">
                  <Stack className="card-img">
                    <img src={ele.imagePath} alt="" className="image" />
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
                    <Stack className="info-name">{ele.productName}</Stack>
                    <Stack className="info-price">
                      <span className="price">${ele.productPrice}</span>
                      <span className="discount" >-30%</span>
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
