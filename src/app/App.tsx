import { Routes, Route, useLocation } from "react-router-dom";
import { HomeNavbar } from "./components/headers/HomeNavbar";
import { HomePage } from "./screens/homePage";
import { ProductsPage } from "./screens/productsPage";
import { AboutPage } from "./screens/aboutPage";
import { TopNavbar } from "./components/headers/TopNavbar";
import Footer from "./components/footer";
import "../css/app.css";
import "../css/navbar.css";
import "../css/footer.css";
import "../css/home.css"
import "../css/common.css"
import MyPage from "./screens/myPage";

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
          path="/mypage"
          element={authMember ? <MyPage /> : null}
        />
        <Route path="/about" element={<AboutPage />} />
      </Routes>

      <Footer />
    </>
  );
}
