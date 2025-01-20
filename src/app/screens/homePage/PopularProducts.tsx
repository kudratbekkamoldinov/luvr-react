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
  { productName: "Sauvage", imagePath: "/img/sauvages.jpg" },
  { productName: "Chanel", imagePath: "/img/chanel.jpg" },
  { productName: "Miss Dior", imagePath: "/img/ms.jpg" },
  { productName: "Dior Lipstick", imagePath: "/img/diorlip.jpg" },
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
                <Stack key={index}>
                  <Stack className="card">
                    <CardCover className="card-cover">
                      <img src={ele.imagePath} alt="" />
                    </CardCover>
                  </Stack>
                  <Stack className="card-info">
                    <Stack style={{ justifyContent: "space-between" }}>
                      <Stack>Perfume</Stack>
                      <Stack>
                        <img src={"/icons/review.svg"} />
                      </Stack>
                    </Stack>
                    <Stack></Stack>
                    <Stack></Stack>
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
