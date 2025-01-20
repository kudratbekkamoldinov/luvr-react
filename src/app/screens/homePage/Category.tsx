import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";

export default function Category() {
  return (
    <div className="category-frame">
      <Container className="category-section">
        <Stack className="cards-frame">
          <Stack
            className="card"
            style={{
              backgroundImage: 'url("/img/ms.jpg")',
              backgroundColor: "lightgray",
              backgroundPosition: "50%",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Stack className="name" >
              <Typography className="text">Perfume</Typography>
            </Stack>
          </Stack>
          <Stack className="card" style={{
              backgroundImage: 'url("/img/diorlip.jpg")',
              backgroundColor: "lightgray",
              backgroundPosition: "50%",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}>
            <Stack className="name">
              <Typography className="text">Makeup</Typography>
            </Stack>
          </Stack>
          <Stack className="card" style={{
              backgroundImage: 'url("/img/creamm.jpg")',
              backgroundColor: "lightgray",
              backgroundPosition: "50%",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}>
            <Stack className="name">
              <Typography className="text">Skincare</Typography>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
