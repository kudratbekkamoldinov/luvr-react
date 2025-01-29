import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import "../../../css/topNavbar.css";
import { useState } from "react";
import { CartItem } from "../../../libs/types/search";
import { useGlobals } from "../../hooks/useGlobals";
import Basket from "./Basket";

interface TopNavbarProps {
  cartItems: CartItem[];
  onAdd: (item: CartItem) => void;
  onRemove: (item: CartItem) => void;
  onDelete: (item: CartItem) => void;
  onDeleteAll: () => void;
  setSignupOpen: (isOpen: boolean) => void;
  setLoginOpen: (isOpen: boolean) => void;
  anchoEl: HTMLElement | null;
}

export function TopNavbar(props: TopNavbarProps) {
  const {
    cartItems,
    onAdd,
    onRemove,
    onDelete,
    onDeleteAll,
    setSignupOpen,
    setLoginOpen,
    anchoEl,
  } = props;

  const { authMember } = useGlobals();

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
          {authMember ? (
            <NavLink to="/mypage" className="nav-item">
              My Page
            </NavLink>
          ) : null}
          {!authMember ? (
            <Button
              variant="contained"
              className="login-button"
              onClick={() => setLoginOpen(true)}
              style={{
                textTransform: "capitalize",
                fontSize: 18,
                padding: "0px",
              }}
            >
              Login
            </Button>
          ) : (null)
          }
          <NavLink to="/about" className="nav-item">
            About
          </NavLink>
        </Box>

        <Box className="nav-icons">
          <NavLink to="/products">
            <img className="icon" src="/icons/search.svg" />
          </NavLink>
          <NavLink to="/mypage?section=orders">
            {authMember ? (
              <Basket
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}
                onDelete={onDelete}
                onDeleteAll={onDeleteAll}
              />
            ) : null}
          </NavLink>
          <NavLink to="/mypage?section=Profile">
            <img className="icon" src="/icons/user.svg" alt="Profile Icon" />
          </NavLink>
        </Box>
      </Container>
    </div>
  );
}
