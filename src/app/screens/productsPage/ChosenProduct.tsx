import { Box, Button, Container, Stack } from "@mui/material";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { useEffect, useState } from "react";
import Facilities from "../../components/common/Facilities";
import NewArrivalProducts from "../homePage/NewArrivals";
import { createSelector } from "reselect";
import { setChosenProduct, setShop } from "./slice";
import { retrieveChosenProduct, retrieveShop } from "./selector";
import { Dispatch } from "@reduxjs/toolkit";
import { useParams } from "react-router-dom";
import ProductService from "../../services/ProductService";
import MemberService from "../../services/MemberService";
import { Product } from "../../../libs/types/product";
import { CartItem } from "../../../libs/types/search";
import { serverApi } from "../../../libs/config";
import { useDispatch, useSelector } from "react-redux";
import { useGlobals } from "../../hooks/useGlobals";
import { sweetErrorHandling } from "../../../libs/sweetAlert";
import "../../../css/product.css"


const actionDispatch = (dispatch: Dispatch) => ({
  setChosenProduct: (data: Product) => dispatch(setChosenProduct(data)),
});

const ChosenProductRetrieve = createSelector(
  retrieveChosenProduct,
  (chosenProduct) => ({
    chosenProduct,
  })
);

const ShopRetrieve = createSelector(retrieveShop, (shop) => ({
  shop,
}));

interface ChosenProductsProps {
  onAdd: (item: CartItem) => void;
}

export default function ChosenProduct(props: ChosenProductsProps) {
  const [selectedSize, setSelectedSize] = useState<string>("30ml");
  const [quantity, setQuantity] = useState<number>(1);

  const { onAdd } = props;
  const { productId } = useParams();
  const { setChosenProduct } = actionDispatch(useDispatch());
  const { authMember } = useGlobals();
  const { chosenProduct } = useSelector(ChosenProductRetrieve);
  console.log("chosenProduct:", chosenProduct);
  const { shop } = useSelector(ShopRetrieve);
  console.log("id", productId);

  useEffect(() => {
    const product = new ProductService();

    if (productId) {
      product
        .getProduct(productId)
        .then((data) => setChosenProduct(data))
        .catch((err) => console.log("Err chosenProduct:", err));
    }

    const member = new MemberService();
    member
      .getShop()
      .then((data) => setShop(data))
      .catch((err) => console.log(err));
  }, [productId]);
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

  const handleAuth = () => {
    sweetErrorHandling("Please login first!");
  };

  if (!chosenProduct) return null;

  return (
    <div className="chosen-product" >
      <Container>
        <Stack className={"product-container"} direction="row" spacing={2}>
          <Stack className={"chosen-product-slider"}>
            <Swiper
              loop={true}
              spaceBetween={10}
              navigation={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="swiper-area"
            >
              {chosenProduct?.productImages.map(
                (ele: string, index: number) => {
                  const imagePath = `${serverApi}/${ele}`;
                  return (
                    <SwiperSlide key={index}>
                      <img className="slider-image" src={imagePath} />
                    </SwiperSlide>
                  );
                }
              )}
            </Swiper>
          </Stack>
          <Stack className="chosen-product-info"  sx={{ flex: 1 }}>
            <Stack className="product-title">{chosenProduct.productName}</Stack>
            <Stack className="product-price">
              <strong>${chosenProduct.productPrice}</strong>
              <span>${chosenProduct.productPrice + chosenProduct.productPrice * 0.3 }</span>
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
                <Button
                  variant="contained"
                  className="add-to-cart"
                  onClick={(e) => {
                    console.log("Button Press");
                    onAdd({
                      _id: chosenProduct._id,
                      quantity: 1,
                      name: chosenProduct.productName,
                      price: chosenProduct.productPrice,
                      image: chosenProduct.productImages[0],
                      size: chosenProduct.productSize,
                    });
                    e.stopPropagation();
                  }}
                >
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
        <Stack style={{ marginTop: "80px" }}>
          <NewArrivalProducts />
        </Stack>
      </Container>
    </div>
  );
}

