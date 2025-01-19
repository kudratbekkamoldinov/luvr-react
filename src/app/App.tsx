import { Routes, Route } from "react-router-dom";
import { HomeNavbar } from "./components/headers/HomeNavbar";
import { HomePage } from "./screens/homePage";
import { ProductsPage } from "./screens/productsPage";
import { OrdersPage } from "./screens/ordersPage";
import { AboutPage } from "./screens/aboutPage";
import { UserPage } from "./screens/userPage";
import { Footer } from "./components/footer";


export default function App() {
  const  authMember  = true;
  return (
    <div>
      <HomeNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop/*" element={<ProductsPage  />} />
        <Route path="/orders" element={authMember ? <OrdersPage /> : null} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/user/*" element={<UserPage />} />
      </Routes>
      <Footer />
    </div>
  );
}