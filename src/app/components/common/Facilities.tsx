import { Container, Stack } from "@mui/material";
import React from "react";
export default function Facilities() {
  return (
    <Stack className="facilities">
      <Container className="frame">
        <Stack className="card">
          <span className="strong">Fast Delivery</span>
          <span className="span">Delivery within 24 Hours in any Place</span>
        </Stack>
        <Stack className="card">
          <span className="strong">24/7 Support</span>
          <span className="span">Get our support any time at any hour</span>
        </Stack>
        <Stack className="card">
          <span className="strong">Secure Shopping</span>
          <span className="span">Highly secured online payment method</span>
        </Stack>
        <Stack className="card">
          <span className="strong">Moneyback</span>
          <span className="span">Guaranteed money back in 30 days</span>
        </Stack>
      </Container>
    </Stack>
  );
}
