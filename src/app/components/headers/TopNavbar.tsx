import { Box, Container, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import "../../../css/topNavbar.css";

export function TopNavbar() {
  return (
    <div className="top-navbar">
      <Container className="top-navbar-container">
        {/* Logo and Title */}
        <Box className="menu">
          <NavLink to="/">
            <img className="logo" src="/icons/illustration.svg" alt="Logo" />
          </NavLink>
          <Typography className="title">Luvr</Typography>
        </Box>

        {/* Navigation Links */}
        <Box className="nav-links">
          <NavLink to="/" className="nav-item">
            Home
          </NavLink>
          <NavLink to="/products" className="nav-item">
            Products
          </NavLink>
          <NavLink to="/orders" className="nav-item">
            Orders
          </NavLink>
          <NavLink to="/user" className="nav-item">
            User
          </NavLink>
          <NavLink to="/about" className="nav-item">
            About
          </NavLink>
        </Box>

        {/* Icons and Profile */}
        <Box className="nav-icons">
          <NavLink to="/products">
            <img className="icon" src="/icons/search.svg" />
          </NavLink>

          <NavLink to="/user">
            <img className="icon" src="/icons/user.svg" />
          </NavLink>
        </Box>
      </Container>
    </div>
  );
}
