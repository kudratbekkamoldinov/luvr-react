import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footers = styled.div`
  width: 100%;
  height: 570px;
  display: flex;
  background: var(--Accent-Opacity, #f7f0eb);
  background-size: cover;
`;

export default function Footer() {
  const authMember = null;

  return (
    <Footers>
      <Container>
        <Stack flexDirection={"row"} sx={{ mt: "94px" }}>
          <Stack flexDirection={"column"} style={{ width: "340px", gap: "20px" }}>
            <Box>
              <img className="logo" src="/icons/illustration.svg" alt="Logo" />
              <img width={"100px"}  src={"/icons/Luvr.svg"} />
            </Box>
            <Box className={"foot-desc-txt"}>
              Find the most desirable Cosmetic product with best quality that is available. We do our best to reach your satisfaction from cosmetics world. We are glad to see you! 
            </Box>
            <Box className="sns-context">
              <img src={"/icons/visa 1.svg"} />
              <img src={"/icons/Amreican Express.svg"} />
              <img src={"/icons/paypal.svg"} />
            </Box>
          </Stack>
          <Stack sx={{ ml: "288px" }} flexDirection={"row"}>
            <Stack>
              <Box>
                <Box className={"foot-category-title"}>Learn More</Box>
                <Box className={"foot-category-link"}>
                  <Link to="/">Home</Link>
                </Box>
                <Box className={"foot-category-link"}>
                  <Link to="/products">Products</Link>
                </Box>
                <Box className={"foot-category-link"}>
                  {authMember && <Link to="/">Orders</Link>}
                </Box>
                <Box className={"foot-category-link"}>
                  <Link to="/help">Help</Link>
                </Box>
              </Box>
            </Stack>
            <Stack sx={{ ml: "100px" }}>
              <Box>
                <Box className={"foot-category-title"}>Find us</Box>
                <Box
                  flexDirection={"column"}
                  sx={{ mt: "20px" }}
                  className={"foot-category-link"}
                  justifyContent={"space-between"}
                >
                  <Box flexDirection={"row"} className={"find-us"}>
                    <div>
                      Moonshine St. 14/05 Light City, London, United Kingdom
                    </div>
                  </Box>
                  <Box className={"find-us"}>
                    <div>+82 10 7901 3883</div>
                  </Box>
                  <Box className={"find-us"}>
                    <div>kamoldinovq@gmail.com</div>
                  </Box>
                </Box>
              </Box>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          style={{ border: "1px solid #C5C8C9", width: "100%", opacity: "0.2" }}
          sx={{ mt: "80px" }}
        ></Stack>
        <Stack className={"copyright-txt"}>
          © Copyright Luvr, All rights reserved.
        </Stack>
      </Container>
    </Footers>
  );
}
