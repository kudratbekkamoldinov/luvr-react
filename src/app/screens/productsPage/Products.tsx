import React, { ChangeEvent, useEffect, useState } from "react";
import {
  Box,
  Button,
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
import { CartItem } from "../../../libs/types/search";
import { useNavigate, useParams } from "react-router-dom";
import { retrieveProducts } from "./selector";
import { setProducts } from "./slice";
import { serverApi } from "../../../libs/config";
import "../../../css/product.css";

const countProductsByCollection = (
  products: Product[]
): Record<ProductCollection, number> => {
  return products.reduce((counts, product) => {
    const collection = product.productCollection;
    counts[collection] = (counts[collection] || 0) + 1;
    return counts;
  }, {} as Record<ProductCollection, number>);
};

const actionDispatch = (dispatch: Dispatch) => ({
  setProducts: (data: Product[]) => dispatch(setProducts(data)),
});

const ProductsRetriever = createSelector(retrieveProducts, (products) => ({
  products,
}));

interface ProductsProps {
  onAdd: (item: CartItem) => void;
}

export default function ProductsPage(props: ProductsProps) {
  const { productId } = useParams();
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
  const navigate = useNavigate();

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

  const chooseProductHandler = (id: string) => {
    navigate(`/product/${id}`);
  };

  const [productCounts, setProductCounts] = useState<
    Record<ProductCollection, number>
  >({} as Record<ProductCollection, number>);

  useEffect(() => {
    // Fetch products and update counts
    const product = new ProductService();

    product
      .getProducts(productSearch)
      .then((data) => {
        setProducts(data); // Update the products in Redux
        const counts = countProductsByCollection(data); // Calculate counts
        setProductCounts(counts); // Update the state
      })
      .catch((err) => console.error(err));
  }, [productSearch]);

  const [selectedCapacities, setSelectedCapacities] = useState<string[]>([]);

  const handleCapacityChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedCapacities([...selectedCapacities, value]);
    } else {
      setSelectedCapacities(
        selectedCapacities.filter((capacity) => capacity !== value)
      );
    }
  };

  useEffect(() => {
    const product = new ProductService();

    product
      .getProducts({
        ...productSearch,
        capacities: selectedCapacities,
      })
      .then((data) => {
        setProducts(data); // Update the products in Redux
        const counts = countProductsByCollection(data); // Calculate counts
        setProductCounts(counts); // Update the state
      })
      .catch((err) => console.error(err));
  }, [productSearch, selectedCapacities]);

  if (productId) return null;

  return (
    <div className="products">
      <Container style={{ height: "auto" }}>
        <Stack className="product-frame">
          <Stack className="avatar-big-box">
            <Stack>
              <Box
                sx={{
                  color: "#394149",
                  fontFamily: "Poppins",
                  fontSize: 30,
                  fontStyle: "normal",
                  fontWeight: 600,
                  marginTop: 10,
                }}
              >
                Products
              </Box>
              <Stack className="home-logo">
                {/* <img src="/icons/home.svg" /> */}
                {/* <span className="logo-text">Collection</span> */}
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
                        if (e.key === "Enter") searchProductHandler();
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
                    onClick={() =>
                      searchCollectionHandler(ProductCollection.PERFUME)
                    }
                  >
                    <strong
                      style={{
                        color: `${
                          productSearch.productCollection ===
                          ProductCollection.PERFUME
                            ? "#C28566"
                            : "#394149"
                        }`,
                      }}
                    >
                      {ProductCollection.PERFUME}
                    </strong>
                    <span
                      style={{
                        color: `${
                          productSearch.productCollection ===
                          ProductCollection.PERFUME
                            ? "#C28566"
                            : "#394149"
                        }`,
                      }}
                    >
                      ({productCounts[ProductCollection.PERFUME] || 0})
                    </span>
                  </Stack>
                  <Stack
                    className="category-options"
                    onClick={() =>
                      searchCollectionHandler(ProductCollection.MAKEUP)
                    }
                  >
                    <strong
                      style={{
                        color: `${
                          productSearch.productCollection ===
                          ProductCollection.MAKEUP
                            ? "#C28566"
                            : "#394149"
                        }`,
                      }}
                    >
                      {ProductCollection.MAKEUP}
                    </strong>
                    <span
                      style={{
                        color: `${
                          productSearch.productCollection ===
                          ProductCollection.MAKEUP
                            ? "#C28566"
                            : "#394149"
                        }`,
                      }}
                    >
                      ({productCounts[ProductCollection.MAKEUP] || 0})
                    </span>
                  </Stack>
                  <Stack
                    className="category-options"
                    onClick={() =>
                      searchCollectionHandler(ProductCollection.FASHION)
                    }
                  >
                    <strong
                      style={{
                        color: `${
                          productSearch.productCollection ===
                          ProductCollection.FASHION
                            ? "#C28566"
                            : "#394149"
                        }`,
                      }}
                    >
                      {ProductCollection.FASHION}
                    </strong>
                    <span
                      style={{
                        color: `${
                          productSearch.productCollection ===
                          ProductCollection.FASHION
                            ? "#C28566"
                            : "#394149"
                        }`,
                      }}
                    >
                      ({productCounts[ProductCollection.FASHION] || 0})
                    </span>
                  </Stack>
                  <Stack
                    className="category-options"
                    onClick={() =>
                      searchCollectionHandler(ProductCollection.CREAM)
                    }
                  >
                    <strong
                      style={{
                        color: `${
                          productSearch.productCollection ===
                          ProductCollection.CREAM
                            ? "#C28566"
                            : "#394149"
                        }`,
                      }}
                    >
                      {ProductCollection.CREAM}
                    </strong>
                    <span
                      style={{
                        color: `${
                          productSearch.productCollection ===
                          ProductCollection.CREAM
                            ? "#C28566"
                            : "#394149"
                        }`,
                      }}
                    >
                      ({productCounts[ProductCollection.CREAM] || 0})
                    </span>
                  </Stack>
                  <Stack
                    className="category-options"
                    onClick={() =>
                      searchCollectionHandler(ProductCollection.ESSENTIAL_OIL)
                    }
                  >
                    <strong
                      style={{
                        color: `${
                          productSearch.productCollection ===
                          ProductCollection.ESSENTIAL_OIL
                            ? "#C28566"
                            : "#394149"
                        }`,
                      }}
                    >
                      {ProductCollection.ESSENTIAL_OIL}
                    </strong>
                    <span
                      style={{
                        color: `${
                          productSearch.productCollection ===
                          ProductCollection.ESSENTIAL_OIL
                            ? "#C28566"
                            : "#394149"
                        }`,
                      }}
                    >
                      ({productCounts[ProductCollection.ESSENTIAL_OIL] || 0})
                    </span>
                  </Stack>
                  <Stack
                    className="category-options"
                    onClick={() =>
                      searchCollectionHandler(ProductCollection.BODY_LOTION)
                    }
                  >
                    <strong
                      style={{
                        color: `${
                          productSearch.productCollection ===
                          ProductCollection.BODY_LOTION
                            ? "#C28566"
                            : "#394149"
                        }`,
                      }}
                    >
                      {ProductCollection.BODY_LOTION}
                    </strong>
                    <span
                      style={{
                        color: `${
                          productSearch.productCollection ===
                          ProductCollection.BODY_LOTION
                            ? "#C28566"
                            : "#394149"
                        }`,
                      }}
                    >
                      ({productCounts[ProductCollection.BODY_LOTION] || 0})
                    </span>
                  </Stack>
                  <Stack
                    className="category-options"
                    onClick={() =>
                      searchCollectionHandler(ProductCollection.OTHERS)
                    }
                  >
                    <strong
                      style={{
                        color: `${
                          productSearch.productCollection ===
                          ProductCollection.OTHERS
                            ? "#C28566"
                            : "#394149"
                        }`,
                      }}
                    >
                      {ProductCollection.OTHERS}
                    </strong>
                    <span
                      style={{
                        color: `${
                          productSearch.productCollection ===
                          ProductCollection.OTHERS
                            ? "#C28566"
                            : "#394149"
                        }`,
                      }}
                    >
                      ({productCounts[ProductCollection.OTHERS] || 0})
                    </span>
                  </Stack>
                </Stack>
              </div>

              {/* Capacity Section */}
              <div className="sidebar-section">
                <h3 className="sidebar-title">Sort By</h3>
                <div className="capacity-options">
                  <Button
                    variant="contained"
                    sx={{
                      color:
                        productSearch.order === "createdAt" ? "#fff" : "black",
                      width: "75px",
                      "&:hover": { background: "#C28566", opacity: 0.8 }
                    }}
                    className="order"
                    onClick={() => searchOrderHandler("createdAt")}
                  >
                    New
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      color:
                        productSearch.order === "productPrice"
                          ? "#fff"
                          : "black",
                          "&:hover": { background: "#C28566", opacity: 0.8 }
                    }}
                    className="order"
                    onClick={() => searchOrderHandler("productPrice")}
                  >
                    Price
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      color:
                        productSearch.order === "productViews"
                          ? "#fff"
                          : "black",
                          "&:hover": { background: "#C28566", opacity: 0.8 }
                    }}
                    className="order"
                    onClick={() => searchOrderHandler("productViews")}
                  >
                    Views
                  </Button>
                </div>
              </div>
            </Stack>
            {products.length !== 0 ? (
              <Stack className="f-card-grid">
                {products.map((product) => {
                  const imagePath = `${serverApi}/${product.productImages[0]}`;
                  // const sizeVolume =
                  //   product.productCollection === ProductCollection.PERFUME

                  //      product.productSize + "size";
                  return (
                    <Stack key={product._id} className="f-card">
                      <Stack className="f-card-img">
                        <img
                          src={imagePath}
                          alt={product.productName}
                          className="f-image"
                          onClick={() => chooseProductHandler(product._id)}
                        />
                      </Stack>
                      <Stack className="f-card-info">
                        <Stack className="f-info-box">
                          <Stack className="f-category-text">
                            {product.productCollection}
                          </Stack>
                          <Stack>
                            <img
                              src={"/icons/review.svg"}
                              alt="Review Stars"
                              style={{ width: "128px", height: "20px" }}
                            />
                          </Stack>
                        </Stack>
                        <Stack className="f-info-name">
                          {product.productName}
                        </Stack>
                        <Stack className="f-info-price">
                          <span className="f-price">
                            ${product.productPrice}
                          </span>
                          <span className="f-discount">-30%</span>
                        </Stack>
                      </Stack>
                    </Stack>
                  );
                })}
              </Stack>
            ) : (
              <Box className="no-data" sx={{ marginRight: "80px" }}>
                Popular product are not avaiable!
              </Box>
            )}
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
