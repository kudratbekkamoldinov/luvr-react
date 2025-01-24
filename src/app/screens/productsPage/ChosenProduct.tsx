import { Box, Button, Container, Stack } from "@mui/material";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { useState } from "react";
import Facilities from "../../components/common/Facilities";
import PopularProducts from "../homePage/PopularProducts";
import NewArrivalProducts from "../homePage/NewArrivals";

export default function ChosenProduct() {
  const [selectedSize, setSelectedSize] = useState<string>("30ml");
  const [quantity, setQuantity] = useState<number>(1);

  const sizes = [
    "20ml",
    "30ml",
    "40ml",
    "50ml",
    "100ml",
    "150ml",
    "200ml",
    "500ml",
  ];

  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (action: "increment" | "decrement") => {
    setQuantity((prev) =>
      action === "increment" ? prev + 1 : Math.max(1, prev - 1)
    );
  };

  return (
    <div className="chosen-product">
      <Container>
        <Stack className={"product-container"}>
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
            <Stack spacing={2} className="product-sizes">
              {/* Sizes */}
              <Box className="sizes-container">
                {sizes.map((size) => (
                  <Button
                    key={size}
                    className={`size-button ${
                      selectedSize === size ? "active" : ""
                    }`}
                    sx={{
                      background: "#EAEAEA",
                      color: "#394149",
                      textTransform: "lowercase",
                    }}
                    onClick={() => handleSizeClick(size)}
                  >
                    {size}
                  </Button>
                ))}
              </Box>

              {/* Quantity Selector */}
              <Box className="quantity-container">
                <Button
                  className="quantity-button"
                  sx={{ fontSize: "30px" }}
                  onClick={() => handleQuantityChange("decrement")}
                >
                  -
                </Button>
                <Box className="quantity-display">{quantity}</Box>
                <Button
                  className="quantity-button"
                  sx={{ fontSize: "25px" }}
                  onClick={() => handleQuantityChange("increment")}
                >
                  +
                </Button>
              </Box>

              {/* Action Buttons */}
              <Stack direction="row" spacing={2}>
                <Button variant="contained" className="add-to-cart">
                  Add To Cart
                </Button>
                <Button variant="contained" className="buy-now">
                  Buy Now
                </Button>
              </Stack>
              <Stack className="delivery-info">
                <span>
                  <img
                    src="/icons/shipping.svg"
                    alt="icon"
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "8px",
                      alignItems: "flex-end",
                    }}
                  />
                  Free Shipping & Returns: On Orders Over $200
                </span>
                <span>
                  <img
                    src="/icons/delivery.svg"
                    alt="icon"
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "8px",
                      alignItems: "flex-end",
                    }}
                  />
                  Estimated Delivery: 3-5 Business Days
                </span>
                <strong>
                  We offer fast and reliable delivery options to ensure your
                  purchase arrives on time. Enjoy free shipping on orders over
                  $200, with estimated delivery within 3-5 business days. Need
                  it sooner? Upgrade to express shipping at checkout for
                  next-day delivery. Track your order easily through your
                  account, and rest assured with our hassle-free return policy
                  for a seamless shopping experience.
                </strong>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack>
          <Facilities />
        </Stack>
        <Stack style={{marginTop: "80px"}}>
          <NewArrivalProducts/>
        </Stack>
      </Container>
    </div>
  );
}
