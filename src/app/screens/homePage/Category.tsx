import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";

export default function Category() {
  return (
    <div className="category-frame">
      <Container className="category-section">
        <Stack className="cards-frame">
          <Box
            className="card"
            style={{
              backgroundImage: 'url("/img/ms.jpg")',
              backgroundColor: "lightgray",
              backgroundPosition: "50%",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Box className="name" >
              <Typography className="text">Perfume</Typography>
            </Box>
          </Box>
          <Box className="card" style={{
              backgroundImage: 'url("/img/diorlip.jpg")',
              backgroundColor: "lightgray",
              backgroundPosition: "50%",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}>
            <Box className="name">
              <Typography className="text">Makeup</Typography>
            </Box>
          </Box>
          <Box className="card" style={{
              backgroundImage: 'url("/img/creamm.jpg")',
              backgroundColor: "lightgray",
              backgroundPosition: "50%",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}>
            <Box className="name">
              <Typography className="text">Skincare</Typography>
            </Box>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
