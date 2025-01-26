import React, { ChangeEvent, useEffect, useState } from "react";
import {
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  Stack,
} from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { ProductCollection } from "../../../libs/enums/product.enum";
import ProductService from "../../services/ProductService";
import { Product, ProductInquiry } from "../../../libs/types/product";
import { createSelector, Dispatch } from "@reduxjs/toolkit";
import "../../../css/product.css";
import { CartItem } from "../../../libs/types/search";
import { useHistory } from "react-router-dom";


const actionDispatch = (dispatch: Dispatch) => ({
  setProducts: (data: Product[]) => dispatch(setProducts(data)),
});

const ProductsRetriever = createSelector(retrieveProducts, (products) => ({
  products,
}));

interface ProductsProps {
  onAdd: (item: CartItem) => void;
}

export default function Products(props: ProductsProps) {
  const { onAdd } = props;
  const { setProducts } = actionDispatch(useDispatch());
  const { products } = useSelector(ProductsRetriever);
  console.log("products:", products);
  const [productSearch, setProductSearch] = useState<ProductInquiry>({
    page: 1,
    limit: 8,
    order: "createdAt",
    productCollection: ProductCollection.PERFUME,
    search: "",
  });

  const [searchText, setSearchText] = useState<string>("");
  const history = useHistory();

  useEffect(() => {
    const product = new ProductService();

    product
      .getProducts(productSearch)
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => err);
  }, [productSearch]);

  useEffect(() => {
    if (searchText === "") {
      productSearch.search = "";
      setProductSearch({ ...productSearch });
    }
  }, [searchText]);

  /* Handlers */

  const searchCollectionHandler = (collection: ProductCollection) => {
    productSearch.page = 1;
    productSearch.productCollection = collection;
    setProductSearch({ ...productSearch });
  };

  const searchOrderHandler = (order: string) => {
    productSearch.page = 1;
    productSearch.order = order;
    setProductSearch({ ...productSearch });
  };

  const searchProductHandler = () => {
    productSearch.search = searchText;
    setProductSearch({ ...productSearch });
  };

  const paginationHandler = (e: ChangeEvent<any>, value: number) => {
    productSearch.page = value;
    setProductSearch({ ...productSearch });
  };

  const chooseDishHandler = (id: string) => {
    history.push(`/products/${id}`);
  };

  return (
    <div className="products">
      <Container style={{ height: "auto" }}>
        <Stack className="product-frame">
          <Stack className="avatar-big-box">
            <Stack className="product-title" sx={{ pr: "132" }}>
              <Box>Products</Box>
              <Stack className="home-logo">
                <img src="/icons/home.svg" />
                <span className="logo-text">Collection</span>
              </Stack>
            </Stack>
          </Stack>
          <Stack className="products-part">
            <Stack className="sidebar">
              <div className="sidebar-section">
                <Stack className="product-search">
                  <Stack>
                    <input
                      placeholder="Search"
                      className="search-input"
                      type="search"
                      value={searchText}
                      onChange={(e) => setSearchText(e.target.value)}
                      onKeyDown={(e) => {
                        // if (e.key === "Enter") searchProductHandler();
                      }}
                    />
                  </Stack>
                  <Stack className="search-logo">
                    <Box>
                      <img
                        src="/icons/side-search.svg"
                        alt="Search Icon"
                        className="logo-search"
                      />
                    </Box>
                  </Stack>
                </Stack>
                <Stack className="sidebar-title">Collection</Stack>
                <Stack className="collection-list">
                  <Stack
                    className="category-options"
                    onClick={() => productCollectionHandler("Perfume")}
                  >
                    <strong
                      style={{
                        color: `${
                          productCollection === "Perfume"
                            ? "#C28566"
                            : "#394149"
                        }`,
                      }}
                    >
                      Perfume
                    </strong>
                    <span
                      style={{
                        color: `${
                          productCollection === "Perfume"
                            ? "#C28566"
                            : "#394149"
                        }`,
                      }}
                    >
                      (09)
                    </span>
                  </Stack>
                  <Stack
                    className="category-options"
                    onClick={() => productCollectionHandler("Makeup")}
                  >
                    <strong
                      style={{
                        color: `${
                          productCollection === "Makeup" ? "#C28566" : "#394149"
                        }`,
                      }}
                    >
                      Makeup
                    </strong>
                    <span
                      style={{
                        color: `${
                          productCollection === "Makeup" ? "#C28566" : "#394149"
                        }`,
                      }}
                    >
                      (09)
                    </span>
                  </Stack>
                  <Stack
                    className="category-options"
                    onClick={() => productCollectionHandler("Fashion")}
                  >
                    <strong
                      style={{
                        color: `${
                          productCollection === "Fashion"
                            ? "#C28566"
                            : "#394149"
                        }`,
                      }}
                    >
                      Fashion
                    </strong>
                    <span
                      style={{
                        color: `${
                          productCollection === "Fashion"
                            ? "#C28566"
                            : "#394149"
                        }`,
                      }}
                    >
                      (09)
                    </span>
                  </Stack>
                  <Stack
                    className="category-options"
                    onClick={() => productCollectionHandler("Cream")}
                  >
                    <strong
                      style={{
                        color: `${
                          productCollection === "Cream" ? "#C28566" : "#394149"
                        }`,
                      }}
                    >
                      Cream
                    </strong>
                    <span
                      style={{
                        color: `${
                          productCollection === "Cream" ? "#C28566" : "#394149"
                        }`,
                      }}
                    >
                      (09)
                    </span>
                  </Stack>
                  <Stack
                    className="category-options"
                    onClick={() => productCollectionHandler("Essential Oil")}
                  >
                    <strong
                      style={{
                        color: `${
                          productCollection === "Essential Oil"
                            ? "#C28566"
                            : "#394149"
                        }`,
                      }}
                    >
                      Essential Oil
                    </strong>
                    <span
                      style={{
                        color: `${
                          productCollection === "Essential Oil"
                            ? "#C28566"
                            : "#394149"
                        }`,
                      }}
                    >
                      (8)
                    </span>
                  </Stack>
                  <Stack
                    className="category-options"
                    onClick={() => productCollectionHandler("Body Lotion")}
                  >
                    <strong
                      style={{
                        color: `${
                          productCollection === "Body Lotion"
                            ? "#C28566"
                            : "#394149"
                        }`,
                      }}
                    >
                      Body Lotion
                    </strong>
                    <span
                      style={{
                        color: `${
                          productCollection === "Body Lotion"
                            ? "#C28566"
                            : "#394149"
                        }`,
                      }}
                    >
                      (11)
                    </span>
                  </Stack>
                </Stack>
              </div>

              {/* Capacity Section */}
              <div className="sidebar-section">
                <h3 className="sidebar-title">Capacity</h3>
                <div className="capacity-options">
                  {["20ml", "40ml", "50ml", "100ml", "250ml", "500ml"].map(
                    (size, index) => (
                      <FormControlLabel
                        key={index}
                        control={<Checkbox />}
                        label={`${size} `}
                      />
                    )
                  )}
                </div>
              </div>
            </Stack>
            <Stack className="f-card-grid">
              {products.map((ele, index) => {
                return (
                  <Stack key={index} className="f-card">
                    <Stack className="f-card-img">
                      <img
                        src={ele.imagePath}
                        alt={ele.productName}
                        className="f-image"
                      />
                    </Stack>
                    <Stack className="f-card-info">
                      <Stack className="f-info-box">
                        <Stack className="f-category-text">Perfume</Stack>
                        <Stack>
                          <img
                            src={"/icons/review.svg"}
                            alt="Review Stars"
                            style={{ width: "128px", height: "20px" }}
                          />
                        </Stack>
                      </Stack>
                      <Stack className="f-info-name">{ele.productName}</Stack>
                      <Stack className="f-info-price">
                        <span className="f-price">${ele.productPrice}</span>
                        <span className="f-discount">-30%</span>
                      </Stack>
                    </Stack>
                  </Stack>
                );
              })}
            </Stack>
          </Stack>

          <Stack className="pagination-section">
            <Stack spacing={2}>
              <Pagination
                count={10}
                variant="outlined"
                shape="rounded"
                sx={{
                  "& .Mui-selected": {
                    backgroundColor: "#C28566", // Change to your desired color
                    color: "white",
                  },
                }}
              />
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
