import React from "react"
import Category from "./Category";
import PopularProducts from "./PopularProducts";
import Facilities from "../../components/common/Facilities";
import NewArrivals from "./NewArrivals";
import Advertisement from "./Advertisement";
import Events from "./Events";
import "../../../css/home.css"

export function HomePage() {
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
