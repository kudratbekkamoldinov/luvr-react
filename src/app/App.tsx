import { Routes, Route, useLocation } from "react-router-dom";
import { HomeNavbar } from "./components/headers/HomeNavbar";
import { HomePage } from "./screens/homePage";
import { ProductsPage } from "./screens/productsPage";
import { OrdersPage } from "./screens/ordersPage";
import { AboutPage } from "./screens/aboutPage";
import { UserPage } from "./screens/userPage";
import { TopNavbar } from "./components/headers/TopNavbar";
import Footer from "./components/footer";
import "../css/app.css";
import "../css/navbar.css";
import "../css/footer.css";
import "../css/home.css"
import "../css/common.css"

export default function App() {
  const location = useLocation(); // Detect current route
  const authMember = true;

  return (
    <>
      <TopNavbar/>
      {location.pathname === "/" && <HomeNavbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/*" element={<ProductsPage />} />
        <Route
          path="/orders"
          element={authMember ? <OrdersPage /> : <div>Unauthorized</div>}
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/user/*" element={<UserPage />} />
      </Routes>

      <Footer />
    </>
  );
}
