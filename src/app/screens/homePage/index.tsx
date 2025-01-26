import React, { useEffect } from "react";
import Category from "./Category";
import PopularProducts from "./PopularProducts";
import Facilities from "../../components/common/Facilities";
import NewArrivals from "./NewArrivals";
import Advertisement from "./Advertisement";
import Events from "./Events";
import { Dispatch } from "@reduxjs/toolkit";
import ProductService from "../../services/ProductService";
import MemberService from "../../services/MemberService";
import { setEvents, setNewProducts, setPopularProducts } from "./slice";
import { Product } from "../../../libs/types/product";
import { ProductCollection } from "../../../libs/enums/product.enum";
import "../../../css/home.css";

/* redux slice & selector */
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularProducts: (data: Product[]) => dispatch(setPopularProducts(data)),
  setNewProducts: (data: Product[]) => dispatch(setNewProducts(data)),
  setEvents: (data: Event[]) => dispatch(setEvents(data)),
});

export function HomePage() {
  const actionDispatch = (dispatch: Dispatch) => ({
    setPopularProducts: (data: Product[]) => dispatch(setPopularProducts(data)),
  });
  
  // Selector: Store => Data
  console.log(process.env.REACT_APP_API_URL);
  
  useEffect(() => {
    // Backend server data
    const product = new ProductService();
    product
      .getProducts({
        page: 1,
        limit: 4,
        order: "productViews",
        productCollection: ProductCollection.PERFUME,
      })
      .then((data) => {
        setPopularProducts(data); // Slice: Data => Store
      })
      .catch((err) => console.log(err));

    product
      .getProducts({
        page: 1,
        limit: 4,
        order: "createdAt",
      })
      .then((data) => setNewProducts(data))
      .catch((err) => console.log(err));

    const member = new MemberService();
    member
      .getTopUsers()
      .then((data) => setEvents(data))
      .catch((err) => console.log(err));
    // Slice: Data => Store
  }, []);
  return (
    <div className="homepage">
      <Category />
      <PopularProducts />
      <Facilities />
      <NewArrivals />
      <Advertisement />
      <Events />
    </div>
  );
}
