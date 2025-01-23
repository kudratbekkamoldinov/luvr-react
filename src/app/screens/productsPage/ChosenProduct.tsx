import { Box, Container, Stack } from "@mui/material";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

export default function ChosenProduct() {
  return (
    <div className="chosen-product">
      <Container className={"product-container"}>
        <Stack className={"chosen-product-slider"}>
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="swiper-area"
          >
            {["/img/sauvage.jpg", "/img/sauvages.jpg"].map(
              (ele: string, index: number) => {
                return (
                  <SwiperSlide key={index}>
                    <img className="slider-image" src={ele} />
                  </SwiperSlide>
                );
              }
            )}
          </Swiper>
        </Stack>
        <Stack className="chosen-product-info">
          <Stack className="product-title">Dior Sauvage</Stack>
          <Stack className="product-price">
            <strong>$20.00</strong>
            <span>$25.00</span>
          </Stack>
          <Stack className="product-size"></Stack>
          <Stack></Stack>
          <Stack></Stack>
          <Stack></Stack>
        </Stack>
      </Container>
    </div>
  );
}
