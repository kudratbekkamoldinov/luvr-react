import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Navigate, NavLink, useNavigate } from "react-router-dom";

import "../../../css/navbar.css";

export function HomeNavbar() {
    const navigate = useNavigate();

    const homeClick = () => {
        navigate('/products');
    }
  return (
    <Box className="hero">
      <Container>
        <Stack className="hero-container">
          <Box className="hero-image">
            <img src="/img/banner.jpg" className="hero-image-content" />
          </Box>
          <Box className="hero-text">
            <Box className="hero-subtitle">forever beautiful</Box>
            <Box className="hero-title">
              Beauty Product That Really{" "}
              <span className="highlight">Works</span>
            </Box>
            <Box className="hero-description">
              Since when has the concept of "beauty" existed? When it comes to
              beauty, people often think of personal accessories that make a
              difference to help the wearer stand out.
            </Box>
            <Box className="hero-button" onClick={homeClick} >
                <Box className="explore">Explore</Box>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
