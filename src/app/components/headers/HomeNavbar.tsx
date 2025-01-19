import { Box, Button, Container, Stack, Typography } from "@mui/material";

import "../../../css/navbar.css";

export function HomeNavbar() {
  return (
    <Box className="hero">
      <Container className="hero-container">
        <Stack>
          <Box className="hero-image">
            <img
            //   src="/img/banner.jpg"
              className="hero-image-content"
            />
          </Box>
          <Box className="hero-text">
            <Typography variant="overline" className="hero-subtitle">
              forever beautiful
            </Typography>
            <Typography variant="h3" className="hero-title">
              Beauty Product That Really <span className="highlight">Works</span>
            </Typography>
            <Typography variant="body1" className="hero-description">
              Since when has the concept of "beauty" existed? When it comes to
              beauty, people often think of personal accessories that make a
              difference to help the wearer stand out.
            </Typography>
            <Button variant="contained" className="hero-button">
              Explore
            </Button>
          </Box>
        </Stack>
      </Container>
      <Box className="product-preview-card">
        <img
          src="/assets/couch.jpg"
          alt="Teal Full Length Couch"
          className="product-image"
        />
        <Typography variant="body1" className="product-title">
          Teal Full Length Couch
        </Typography>
        <Typography variant="body2" className="product-price">
          $270.00
        </Typography>
      </Box>
    </Box>
  );
}
