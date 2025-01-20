import React from "react"
import Category from "./Category";
import PopularProducts from "./PopularProducts";
import Facilities from "./Facilities";
import FeaturedProducts from "./FeaturedProducts";
import NewArrivals from "./NewArrivals";
import Advertisement from "./Advertisement";
import Events from "./Events";

export function HomePage() {
  return (
    <div className="homepage">
      <Category />
      <PopularProducts />
      <Facilities />
      <FeaturedProducts />
      <NewArrivals />
      <Events />
      <Advertisement />
    </div>
  );
}
