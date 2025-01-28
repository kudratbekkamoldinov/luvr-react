// import React from "react";
// import { Route, Router, Routes, useMatch, useResolvedPath } from "react-router-dom";
// import "../../../css/products.css";
// import ChosenProduct from "./ChosenProduct";
// import { CartItem } from "../../../libs/types/search";

// interface ProductsPageProps {
//   onAdd: (item: CartItem) => void;
// }

// export default function ProductsPage(props: ProductsPageProps) {
//   const { onAdd } = props;

//   // Resolve the base path dynamically
//   // const resolvedPath = useResolvedPath("");

//   return (
//       <Routes>
//         <Route path="/:productId" element={<ChosenProduct onAdd={onAdd}/>} />
//         <Route path="/" element={<ProductsPage onAdd={onAdd} />} />
//       </Routes>
//     // <div className="products-page">
//     //   <Routes>
//     //     <Route
//     //       path="/:productId"
//     //       element={<ChosenProduct onAdd={onAdd} />}
//     //     />
//     //     <Route path="/" element={<Products onAdd={onAdd} />} />
        
//     //     {/* Match the base products route */}
//     //     {/* <Route path={resolvedPath.pathname} element={<Products onAdd={onAdd} />} /> */}
//     //   </Routes>
//     // </div>
//   );
// }


import React from "react";
import { Route, Routes } from "react-router-dom";
import "../../../css/products.css";
import ChosenProduct from "./ChosenProduct";
import Products from "./Products"; // Import the Products component
import { CartItem } from "../../../libs/types/search";

interface ProductsPageProps {
  onAdd: (item: CartItem) => void;
}

export default function ProductsPage(props: ProductsPageProps) {
  const { onAdd } = props;

  return (
    <div className="products-page">
      <Routes>
        {/* Route for the chosen product */}
        <Route path="/:productId" element={<ChosenProduct onAdd={onAdd} />} />

        {/* Route for the main products page */}
        <Route path="/" element={<Products onAdd={onAdd} />} />
      </Routes>
    </div>
  );
}